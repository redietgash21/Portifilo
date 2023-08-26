



  
  
  const express= require('express');
 const app= express();
 const path = require('path')
 const bodyParser = require('body-parser');
 const session = require('express-session');
 const cookieParser=require('cookie-parser');
 const multer=require('multer');
 const mysql= require("mysql");
 const cors= require("cors");
 const fs=require('fs');
const { Console } = require('console');
 app.use(cors(
//    {
//    origin: ["http://localhost:3000/?"],
//    methods: ["GET", "POST"],
//    credentials: true,
//  }
 ));
//  app.use(cookieParser());
app.use("/Image",express.static(path.join(__dirname,"Image")));
app.use(bodyParser.urlencoded({extended:false}));
// app.use(
//    session({
  
//    secret: process.env.SESSION_SECRET,
//    resave: false,
//    saveUninitialized: false,
//    cookie: {
//       httpOnly: true,
//       maxAge: parseInt(process.env.SESSION_MAX_AGE)
//    },
// }))

 /*app.use((req, res, next)=>{
   res.setHeader('Acess-Control-Allow-Origin','*');
   res.setHeader('Acess-Control-Allow-Headers, Origin, X-Requesterd-With, Content-Type, Accept, Authorization');
   res.setHeader('Acess-Control-Allow-Methods','GET, POST, PATCH, DELETE');
   next();
 });  
 app.use('/user',userUpload);
*/
 app.use(express.json());
 const db= mysql.createConnection({
   user: 'root',
   host: 'localhost',
   password: 'test',
   database: 'qrcode'
});
/*const storage=multer.diskStorage({
  destination: (req, file, cb)=>{
   cb(null, "./");
     },
     filename: function(req, file, cb){
      const ext= file.mimetype.split("/")[1];
      cb(null, `uploads/${file.orginalname}-${Date.now()}.${ext}`);
        }
      });
      
const upload= multer({
   storage: storage
});*/
db.connect(err=>{
   if(err) console.log("Error while connecting to database: ",err)
   else console.log("Server is running...");
})

var uploadEmpImg = multer({ dest: path.join(__dirname,'Image/temp/')});
var type = uploadEmpImg.single('image');

app.post('/insertEmployeeInfo', type, (req, res)=>{
  
  const firstName= req.body.firstName;
  const lastName= req.body.lastName;
  const id= req.body.id;
  const phoneNumber= req.body.phoneNumber;
  const department= req.body.department;
  
  const imgName = req.body.imgName
  var tmp_path = req.file.path;
  const employeeStatus=req.file.employeeStatus;
  console.log(tmp_path);
  var target_path = path.join(__dirname, 'Image/') + req.file.originalname;
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  
  //remove temp files  
  const directory = path.join(__dirname,'Image/temp/')
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }});

  let tableEmployee = "INSERT INTO employee(firstName, lastName, id, department, phoneNumber, imagePath, employeeStatus) VALUES(?,?,?,?,?,?,'active')";
 

  db.query(tableEmployee,
     [firstName, lastName, id, department, phoneNumber, imgName, employeeStatus], (err, result)=>{
      if(err){
         console.log(err);
         console.log(tableEmployee);
      }
      else{
         console.log(result.affectedRows," rows inserted");
         console.log(tableEmployee);
         res.send("values inserted");
      }
     }
);

});
app.post('/insertInOrOut', type, (req, res)=>{
   // console.log("========",req.body,"===========")
   const id= req.body.id;
   const inOrOut= req.body.inOrOut;
   const remark=req.body.remark;
   const serialNumber=req.body.serialNumber;
   let tableEmployee = "insert into inorout( id,inorout,daytime,remark,serialNumber) values(?,?,current_timestamp(),?,?)";
   
 
   db.query(tableEmployee,
      [ id, inOrOut, remark,serialNumber], (err, result)=>{
       if(err){
          console.log(err);
       }
       else{
         //  console.log(tableEmployee," rows inserted");
          res.send("values inserted");
       }
      }
 );
 
 });
var type2 = uploadEmpImg.single('image');
app.post('/editEmployeeInfo', type2, (req, res)=>{
   // console.log("============",req.body,"===========");
   // console.log("file detail: ",req.file);
      const firstName= req.body.firstName;
      const lastName= req.body.lastName;
      const id=req.body.id;
      const phoneNumber= req.body.phoneNumber;
      const department= req.body.department;
      const imgName = req.body.imgName;

   if(req.file){

      var tmp_path = req.file.path;
      
      console.log(tmp_path);
      var target_path = path.join(__dirname, 'Image/') + req.file.originalname;
      var src = fs.createReadStream(tmp_path);
      var dest = fs.createWriteStream(target_path);
      src.pipe(dest);
      
      //remove temp files  
      const directory = path.join(__dirname,'Image/temp/')
      fs.readdir(directory, (err, files) => {
         if (err) throw err;
         for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
            });
         }});
   }

   let tableEmployee = `update employee set firstName='${firstName}', lastName='${lastName}', department='${department}', phoneNumber=${phoneNumber}, imagePath='${imgName}' where id = ${id}`;
  db.query(tableEmployee,
     [firstName, lastName, department, phoneNumber, imgName], (err, result)=>{
      if(err){
         console.log(req.file);
      }
      else{
         // console.log(result.affectedRows," rows updated");
         // res.send({message:"Success"});
      }
     }
);
});

app.post("/insertLaptopInfo",(req,res)=>{
   const productName= req.body.productName;
   const serialNumber= req.body.serialNumber;
   const laptopStatus=req.body.laptopStatus;
   const totalMemory= req.body.totalMemory;
   const processorName= req.body.processorName;
   const ram= req.body.ram;
   const systemType= req.body.systemType;
   let tableLaptop = "INSERT INTO laptop(productName,serialNumber,totalMemory,processorName,RAM,systemType,laptopStatus) VALUES(?,?,?,?,?,?,'free')";
   db.query(tableLaptop,
      [productName, serialNumber, totalMemory, processorName, ram, systemType,laptopStatus], (err, result)=>{
       if(err){
          console.log(err);
       }
       else{
          console.log(result.affectedRows," rows inserted");
          res.send("values inserted");
       }
      }
);
})

app.post("/editLaptopInfo",(req,res)=>{
 
 console.log(req.body);
   const productName= req.body.productName;
   const serialNumber=req.body.serialNumber;
   const totalMemory= req.body.totalMemory;
   const processorName= req.body.processorName;
   const ram= req.body.ram;
   const systemType= req.body.systemType;
   let tableLaptop = `update laptop set productName='${productName}', totalMemory='${totalMemory}', processorName='${processorName}', RAM='${ram}', systemType='${systemType}' where serialNumber = '${serialNumber}'`;
   db.query(tableLaptop,
      [productName, totalMemory, processorName, ram, systemType,serialNumber], (err, result)=>{
       if(err){
          console.log(err);
         
       }
       else{
          console.log(result.affectedRows," rows inserted");
          res.send("values inserted");
       }
      }
);
})
app.post("/login",(req,res)=>{
   const userName= req.body.userName;
   const passwordd= req.body.passwordd;
   const statuss= req.body.statuss;
   let tableUserName = `update username set username='${userName}',passwordd='${passwordd}' where statuss='${statuss}'`;
   db.query(tableUserName,
      [userName, passwordd,statuss], (err, result)=>{
       if(err){
          console.log(err);
       }
       else{
          console.log(tableUserName);
          res.send("values inserted");
       }
      }
);
})
app.post('/updateToFreeLaptop', type, (req, res)=>{
   // console.log(req.body);
   const serialNumber= req.body.serialNumber; 
   const id=req.body.id;
   //   `update laptop set laptopStatus='${laptopStatus}' returnDate=${current_timestamp()} where serialNumber = '${serialNumber}' returnDate = ${"is null"}`
   let update = `update laptop, employeelaptop set
 laptop.laptopStatus='free', employeelaptop.returnDate=current_timestamp()
 where laptop.serialNumber = '${serialNumber}' and employeelaptop.serialNumber= '${serialNumber}' and employeelaptop.id=${id} and employeelaptop.returnDate=0`;
   
  
    db.query(update,
      
        (err, result)=>{
           if(err){

              console.log(err);
           }
           else{
            //   console.log(result.affectedRows," laptops update to free");
            //   console.log(serialNumber," Laptop serialnum");
             console.log(update," Laptop to free");
              res.send("values inserted");
           }
          }
  );
  });

app.post("/insertLaptopInfoEL",(req,res)=>{
   // console.log(req.body);
   const serialNumber= req.body.serialNumber;
   const id= req.body.id;
   
   let tableLaptop = `INSERT INTO employeelaptop(serialNumber,id,assignDate,returnDate) VALUES(?,?,current_timestamp(),0) 
   `;
   db.query(tableLaptop,
      [ serialNumber, id], (err, result)=>{
       if(err){
          console.log(err);
       }
       else{
         //  console.log(result.affectedRows," rows inserted");
          res.send("values inserted");
       }
      }
);
})
app.post('/updateToActiveEmployee', type, (req, res)=>{
   const id= req.body.id; 
    let update = `update employee set employeeStatus='active' where id = ${id} `;
    db.query(update,
      
        (err, result)=>{
           if(err){

              console.log(err);
           }
           else{
            //   console.log(result.affectedRows," rows inserted");
              
            //   console.log(update,employeeStatus," rows inserted");
            //   res.send("values inserted");
           }
          }
  );
  });
app.post('/updateToDeactiveEmployee', type, (req, res)=>{
   // console.log("============",req.body,"===========");
   const id= req.body.id; 
    let update = `update employee set employeeStatus='deactive' where id = ${id} `;
    db.query(update,
      
        (err, result)=>{
           if(err){

              console.log(err);
           }
           else{
            //   console.log(result.affectedRows," rows inserted");
              
            //   console.log(update," rows inserted");
            //   res.send("values inserted");
           }
          }
  );
  });
  app.post('/updateToUnreturnedLaptop', type, (req, res)=>{
   console.log("============",req.body,"===========");
   const serialNumber= req.body.serialNumber; 
   const laptopStatus= req.body.laptopStatus; 
   // const laptopStatus=req.body.laptopStatus;
   // update laptop set laptopStatus='assigned' where serialNumber = '${serialNumber}'
    let update = `update laptop set laptopStatus='${laptopStatus}' where serialNumber = '${serialNumber}' `;
   
  
    db.query(update,
      
        (err, result)=>{
           if(err){

              console.log(err);
           }
           else{
            //   console.log(result.affectedRows," rows inserted");
              
            //   console.log(update,employeeStatus," rows inserted");
            //   res.send("values inserted");
           }
          }
  );
  });
  app.post('/updateToAssignedLaptop', type, (req, res)=>{
   const serialNumber= req.body.serialNumber; 
  
   //   `update laptop set laptopStatus='${laptopStatus}' returnDate=${current_timestamp()} where serialNumber = '${serialNumber}' returnDate = ${"is null"}`
   let update = `update laptop set laptopStatus='assigned' where serialNumber = '${serialNumber}'`;
   
  
    db.query(update,
      
        (err, result)=>{
           if(err){

              console.log(err);
           }
           else{
            //   console.log(result.affectedRows," rows inserted");
              
              //console.log(update,laptopStatus," Laptop");
              res.send("values inserted");
           }
          }
  );
  });
  app.put('/activeEmployeeInfo', type, (req, res)=>{
   const id= req.body.id; 
   const employeeStatus=req.file.employeeStatus;
    let update = "update employee set employeeStatus='active' where id = ?";
   
  
    db.query(update,
       [id, employeeStatus],
        (err, result)=>{
           if(err){
              console.log(err);
           }
           else{
              console.log(result.affectedRows," rows inserted");
              res.send("values inserted");
           }
          }
  );
  });
  app.get('/displayLogin', (req,res)=>{
   const empl="select * from username order by statuss ";
   db.query(empl, (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
         res.send(result);
        
        }
   });
})
app.get('/displayEmployee', (req,res)=>{
   const empl="SELECT * FROM employee ORDER BY firstName asc";
   db.query(empl, (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
         res.send(result);
        }
   });
})
app.get('/displayActiveEmployee', (req,res)=>{
   const empl="SELECT * FROM employee  where employeestatus='active' ";
   db.query(empl, (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
         res.send(result);
        }
   });
})
app.get('/displayDeactiveEmployee', (req,res)=>{
   const empl="SELECT * FROM employee  where employeestatus='deactive'";
   db.query(empl, (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
         res.send(result);
        }
   });
})
app.get('/displayEmployeelaptop', (req,res)=>{
   const empl="select e.imagePath, e.id, e.firstName, e.lastName, e.department, e.employeeStatus, el.serialNumber, e.phoneNumber, l.productName, l.laptopStatus, l.totalMemory, l.processorName, l.RAM, l.systemType from employeelaptop el join employee e on e.id=el.id join laptop l on l.serialNumber=el.serialnumber where returnDate =0 and laptopStatus='assigned' ";
   db.query(empl, (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
         res.send(result);
        }
   });

})

app.post('/displayToCheckBox', (req,res)=>{
   // console.log("serial numbetr"+req.body.serialNumber);
   const serialNumber= req.body.serialNumber; 
   const scan=`select e.*, el.serialNumber, l.* from employeelaptop el join employee e on e.id=el.id join laptop l on l.serialNumber=el.serialnumber where returnDate =0 and laptopStatus='assigned' and el.serialNumber='${serialNumber}'`;
   db.query(scan,[serialNumber], (err,result)=>{
      console.log("scanQuery : ",scan);
        if(err){
         console.log(err);
        }
        else{
         console.log();
         //scan,serialNumber," Laptop serial number");
         res.send(result);
        }
   });

})
app.post('/displayInOrOut', (req,res)=>{  
   console.log("========",req.body,"===========")
   
   const id= req.body.id; 
   const serialNumber=req.body.serialNumber;
   const scan=`select inOrOut from inorout where id=${id} and serialNumber='${serialNumber}' order by dayTime desc `;
   console.log(scan);
   db.query(scan,[id,serialNumber], (err,result)=>{
        if(err){
         
         console.log(err);
        
        }
        else{
        
         console.log("dispaly inorout ")
        res.send(result);
        }
   });
})
app.post('/displayUnreturnLaptop', (req,res)=>{  
   
   
   const id= req.body.id; 
   const scan=`select id, returnDate, serialNumber from employeelaptop where id=${id} and returnDate=0`;
   db.query(scan,[id], (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
        res.send(result);
        }
   });
})
app.post('/countEmpLap', (req,res)=>{  
   
   const id= req.body.id; 
   const scan=`select count(*) AS Num from employeelaptop where id=${id} and returnDate=0;
   `;
   db.query(scan,[id], (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
        
        res.send(result);
        }
   });
})
app.get('/displayAssignedLaptop', (req,res)=>{
   db.query("SELECT * FROM laptop where laptopstatus='assigned'", (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
         res.send(result);
        }
   });
})

app.get('/displayFreeLaptop', (req,res)=>{
   db.query("SELECT * FROM laptop where laptopstatus='free'", (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
         res.send(result);
        }
   });
})
app.get('/login',(req, res)=>{
   if(req.session.user){
      res.send({loggedIn: true, user: req.session.user});
   } else{
      res.send({loggedIn: false});
   }
});
 app.listen(3001,()=>{
    console.log("running on 3001");
 });