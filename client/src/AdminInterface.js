





import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios';
import { propTypes } from 'react-qr-scanner';
import Login from './Login';
import App from './App';
import EditEmployee from './EditEmployee';
const AdminInterface=(props)=>{
  const inputPassword=useRef();
  const [isAdmin,setIsAdmin]=useState(false);
  const [statuss,setStatuss] =useState("admin");
  const [loginn,setLogin]=useState("")
  const [active,setActive]=useState(""); 
  const [passwordd,setPasswordd]=useState("");  
  const [userName,setUserName]=useState("");
  {/* from login component(child) when login clicked to pass the data in parent component(app) from this admin component*/}
  const pass=()=>{
    if(loginn=="login"){
      userr();
      activeToParent();
    }
  }
  {/*change admin password */}
  const insertIntoUserNameTable=()=>{
    Axios.post("http://localhost:3001/login",{
       userName: props.aUserName,
       passwordd: passwordd,
       statuss: statuss
     }).then((response)=>{
     }).catch((err)=>{
     console.log('err',err);
    });     
    alert("password is changed");
  }
  {/* to send the username and password value to parent component*/}
  const userr=()=>{
   props.login(userName,passwordd) 
  }
  {/* to receive the active value from child component*/}
  const activeFromChild=(active)=>{
    setActive(active);
  }
  const onClickEmp=()=>{
    setActive("Employee Interface");
  }
  {/* to send the active value to parent component*/}
  const activeToParent=()=>{
    props.correctActive(active)
  }
  {/* to receive the username and password value from child component*/}
  const login=(userName,passwordd)=>{
    setUserName(userName);
    setPasswordd(passwordd);
  }
  {/* to receive the login value if log in button is clicked from child component*/} 
  const theLog=(login)=>{
  setLogin(login);
  }
  useEffect(()=>{
    pass()
  },[])
  return(
   <>
   {/* <br></br><br></br>
   <div style={{ backgroundColor: "yellow"}} hidden={false}><p>admin===============ipun= {passwordd}===={props.ePassword} dbun========================dbun= {props.eUserName}====== {userName} ipun</p>
   <p>active   {active}==========================={props.active} ipun</p>
   </div> */}
      <div className="adminMainDiv" 
        hidden={active=="Employee Interface"||active=="Laptop Interface"||active=="Employee Laptop Interface"||active=="Scan Interface"
        ?true:false}>
        <div className='adminMenuDiv' 
         onClick={()=>setIsAdmin(!isAdmin)}>
         <img alt="adminimg" src="admin.jpg" id="adminMenuImg"></img>
        </div>
        <div className='adminMenuListDiv' hidden={isAdmin==true?false:true}>
          <label className='adminListLbl'    
            onClick={()=>{setActive("Employee Interface"); setStatuss("employee") ;setIsAdmin(!isAdmin)}}> 
            <div className='adminLblDivL' > 
             <img alt="adminimg" src="employe.jpg" id="adminLblImg"></img>
            </div>
            employee
          </label><br></br>
          <label className='adminListLbl' 
           onClick={()=>{setActive("Laptop Interface"); setStatuss("laptop") ;} }> 
            <div className='adminLblDivL'  >  
              <img alt="adminimg" src="laptopp.png" id="adminLblImg"></img>
            </div>laptop
          </label><br></br>
          <label className='adminListLbl'  
            onClick={()=>{setActive("Employee Laptop Interface"); setStatuss("employeelaptop") ;}}> 
            <div  className='adminLblDivL'  >  
              <img alt="adminimg" src="el.png" id="adminLblImg"></img>
            </div>employee laptop
          </label><br></br>
          <label className='adminListLbl'  
            onClick={()=>{setActive("Scan Interface"); setStatuss("scan") ;}}> 
            <div  className='adminLblDivL' >  
              <img alt="adminimg" src="scanner.jpg" id="adminLblImg"></img>
            </div>scan
          </label><br></br>
        </div>
        <div  className='adminDiv'>
          <img alt="adminimg" src="admin.jpg" id="adminImg"></img>
        </div>
        <input 
         placeholder='change admin password' 
         ref={inputPassword} 
         onChange={(e)=>setPasswordd(e.target.value)}>
        </input> 
        <label onClick={()=>{ insertIntoUserNameTable()}}>change password</label>
      </div>
      <div>
     
     
          {  active=="Employee Interface"  && props.eUserName!=userName&&props. ePassword!=passwordd &&
           <Login taskType="Emp"
           login={login}  
           eUserName={props.eUserName} 
           ePassword={props.ePassword} 
          
           correctActive={activeFromChild} active={active}  statuss={statuss} theLog={theLog}/>
          } 
        {active=="Laptop Interface"  && props.lUserName!=userName&&props. lPassword!=passwordd &&
         <Login login={login} taskType="Lap"
              lUserName={props.lUserName} 
              lPassword={props.lPassword} 
             correctActive={activeFromChild} active={active}  statuss={statuss} theLog={theLog}/>} 
        {active=="Employee Laptop Interface" && props.elUserName!=userName&&props. elPassword!=passwordd && <Login  taskType="EmpLap" eUserName={props.eUserName} 
              ePassword={props.ePassword} 
              lUserName={props.lUserName} 
              lPassword={props.lPassword} 
              elUserName={props.elUserName} 
              elPassword={props.elPassword} 
              sUserName={props.sUserName} 
              sPassword={props.sPassword} 
              aUserName={props.aUserName} 
               login={login} correctActive={activeFromChild} active={active}  statuss={statuss} theLog={theLog}/>} 
        {active=="Scan Interface" && props.sUserName!=userName&&props. sPassword!=passwordd && 
        <Login   taskType="Scan"
              sUserName={props.sUserName} 
              sPassword={props.sPassword} 
              login={login} 
              correctActive={activeFromChild} 
              active={active} 
              statuss={statuss} 
              theLog={theLog}/>} 
      </div>
      <div>
       {pass()}
      </div>
      
   </>
  );  
}
   //   const [adminLogin,setAdminLogin]=useState("");
//   const [admin,setAdmin]=useState([]);
//   const [empLap,setEmpLap]=useState([]); 
//   const [emp,setEmp]=useState([]); 
//   const [lap,setLap]=useState([]); 
//   const [scan,setScan]=useState([]);
//   const inputUserName=useRef();
//   const inputPassword=useRef();

//    const setLoginn=()=>{

//     setLogin("login");
//     setAdminLogin("admin")
//    }
  
  //  const loginn=()=>{
   
  //   props.login(active)
     
  //  }
  //  const loginn=()=>{
  //   setLoginn();
  //   userr();
   
  //  }
//    const displayScan=()=>{
//     Axios.get("http://localhost:3001/displayLogin").then(response=>{
//       setScan(response.data[3]);
//        // response.data.map(res=>{
         
//        //   {console.log("Img path : ",res.imagePath)}
//        // })
//      });
//    }
//    const displayLap=()=>{
//     Axios.get("http://localhost:3001/displayLogin").then(response=>{
//       setLap(response.data[2]);
//        // response.data.map(res=>{
         
//        //   {console.log("Img path : ",res.imagePath)}
//        // })
//      });
//    }
//    const displayEmp=()=>{
//     Axios.get("http://localhost:3001/displayLogin").then(response=>{
//       setEmp(response.data[1]);
//        // response.data.map(res=>{
         
//        //   {console.log("Img path : ",res.imagePath)}
//        // })
//      });
//    }
//    const displayAdmin=()=>{
//     Axios.get("http://localhost:3001/displayLogin").then(response=>{
//       setAdmin(response.data[0]);
//        // response.data.map(res=>{
         
//        //   {console.log("Img path : ",res.imagePath)}
//        // })
//      });
//    }
//    const displayEmpLap=()=>{
//     Axios.get("http://localhost:3001/displayLogin").then(response=>{
//       setEmpLap(response.data[0]);
//        // response.data.map(res=>{
         
//        //   {console.log("Img path : ",res.imagePath)}
//        // })
//      });
//    }
   export default AdminInterface;