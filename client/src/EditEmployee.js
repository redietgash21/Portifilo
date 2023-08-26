




import Modal from 'react-bootstrap/Modal';
import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios';
import { propTypes } from 'react-qr-scanner';

const EditEmployee=(props)=>{
  const [unreturnedL,setUnreturnedL]=useState([]);
 
  const [count,setCount]=useState(0);
  const [isRetrn,setIsReturn]=useState(false);
  const [firstName,setFirstName]=useState(""); 
  const [lastName,setLastName]=useState("");  
  const [id,setId]=useState(0);   
  const [phoneNumber,setPhoneNumber]=useState(0);  
  const [department,setDepartment]=useState("");
  const [employeeStatus,setEmployeeStatus]=useState(""); 
  const [checkedE,setCheckedE]=useState(true);
  const [openModal,setOpenModal]=useState(false);
  const [file,setFile]=useState();
  const [imgName,setImgName] = useState();
  const arrPhoneNumber=[phoneNumber];
  const [profileImg, setProfileImg]=useState("https://th.bing.com/th/id/OIP.S171c9HYsokHyCPs9brbPwHaGP?pid=ImgDet&rs=1");
 
  const inputtxt1=useRef(null);
  const inputtxt2=useRef(null);
  const inputtxt3=useRef();
  const inputtxt4=useRef();
  const inputtxt5=useRef();
  const inputtxt6=useRef();
 
 const imageHandlerUI = (e) =>{
   setProfileImg(URL.createObjectURL(e.target.files[0]));
   setFile(e.target.files[0]);
   console.log("img: "+file)
   setImgName(e.target.files[0].name)
  }
  const displayUnreturnLaptop=()=>{
    if(props.taskType=="Edit"){
   
    Axios.post("http://localhost:3001/displayUnreturnLaptop",{
      id: props.empInfo.id
    }).then(response=>{
      
    setUnreturnedL(response.data);
    console.log(response.data);
   
    });}
  }
  const cheackPhoneNumCorrect=()=>{
    if(arrPhoneNumber[0][0]==0&&(arrPhoneNumber[0][1]==9||arrPhoneNumber[0][1]==7)&&phoneNumber.length==10){
      
   saveNewEmployee();
   alert("The information is saved");  
    }
    else{
      alert("please enter the correct phone number")
    }
  }
  const countEmpLap=()=>{ 
    if(props.taskType=="Edit"){
    Axios.post("http://localhost:3001/countEmpLap",{
      id: props.taskType=="Edit"?props.empInfo.id:null
    }).then(response=>{
    setCount(response.data[0].Num);
    console.log(response.data);  
    });}
  }
 const updateToActiveEmployee=()=>{
   if (employeeStatus=="active"){
     Axios.post("http://localhost:3001/updateToActiveEmployee",{
       id: id,
      
     }).then((response)=>{
      //console.log("id:",event.target.value),
     }).catch((err)=>{
     console.log('err----',err);
     });
    //  alert("upadte to active"+id+"   "+employeeStatus+" employee ");
    }
 }
 const saveNewEmployee=()=>{
   const formData = new FormData();
   formData.append('image',file);
   formData.append('firstName',firstName);
   formData.append('lastName',lastName);
   formData.append('id',id);
   formData.append('department',department);
   formData.append('phoneNumber',phoneNumber);
   formData.append('imgName',imgName);
   formData.append('employeeStatus',employeeStatus);
   const url="http://localhost:3001/insertEmployeeInfo";
   console.log(" file="+ file+" firnam="+ firstName+" lastname="+  lastName+" id= "+  id+" depa= "+ department+" phonenu= "+ phoneNumber+" imgname= "+ imgName+" employees "+ employeeStatus);
   Axios.post(url, formData).then((response)=>{
      //alert('image is sucessful...'); 
   }).catch((err)=>{
   console.log('err',err);
   });
    //alert('image isfvvf drgvfdb fvg  sucessful...');   
 }
 const saveEditEmployee=()=>{       
    const url="http://localhost:3001/editEmployeeInfo";
    const formData = new FormData();
    if(!file){
     // alert("file is undefined")
     Axios.post(url, {
       imgName:props.empInfo.imagePath,
       firstName:firstName,
       lastName:lastName,
       id:id,
       department:department,
       phoneNumber:phoneNumber
      }).then((response)=>{
      // alert('image is sucessful...'); 
      }).catch((err)=>{
      console.log('err',err);
      });
    }
   else{      
     formData.append('image',file);
     formData.append('firstName',firstName);
     formData.append('lastName',lastName);
     formData.append('id',id);
     formData.append('department',department);
     formData.append('phoneNumber',phoneNumber);
     formData.append('imgName',imgName==undefined?props.empInfo.imagePath:imgName);
     formData.append('employeeStatus',employeeStatus);
     Axios.post(url, formData).then((response)=>{
        //alert('image is sucessful...'); 
     }).catch((err)=>{
     console.log('err',err);
     });     
   }
 } 
 const updateToUnreturnedLaptop=()=>{
  
      unreturnedL.map((lap)=>{
        Axios.post("http://localhost:3001/updateToUnreturnedLaptop",{
          serialNumber: lap.serialNumber,
           
           laptopStatus: "unreturn"
         }).then((response)=>{
         }).catch((err)=>{
         console.log('err----',err);
         });    
      })
    
  // alert("update to un returned 982wby7868trftv etr6")

}
 const updateToDeactiveEmployee=()=>{
  if(employeeStatus=="deactive"){
  // let res = window.confirm("upadte to deactive"+id+"   "+employeeStatus+" employee ");

  // if(res){
  //   updateToUnreturnedLaptop();
      
       
    Axios.post("http://localhost:3001/updateToDeactiveEmployee",{
      id: props.empInfo.id,
    }).then((response)=>{
    }).catch((err)=>{
    console.log('err----',err);
    });   
    // alert("employee satus"+employeeStatus); 
  
}}
const updateToFreeLaptop=()=>{
  unreturnedL.map((lap)=>{
    Axios.post("http://localhost:3001/updateToFreeLaptop",{
      serialNumber: lap.serialNumber,
      id: lap.id
   }).then((response)=>{
   //console.log("id:",event.target.value),
   }).catch((err)=>{
   console.log('err----',err);
   });
  })
   
    //alert("update to free laptop")
   
 }
 const save=()=>{
  // alert("efFDfdsfd"+cheack.returnDate)
   if(props.taskType=="Edit"){
    if(isRetrn==true){
      alert(" update to return laptop")
      updateToFreeLaptop();
    }
    if(count!=0&&employeeStatus=="active"&&props.empInfo.employeeStatus=="deactive"&&isRetrn==false){
      let res=window.confirm("it is illegally deactive employee so it first retrn laptop")
     if(res){
      let ress=window.confirm("confirm to return laptop")
      if(ress){
       setIsReturn(!isRetrn);
       updateToFreeLaptop();
       updateToActiveEmployee();
       alert("it is returned");
     }}
   
    } 
    else if(count==0&&employeeStatus=="active"&&props.empInfo.employeeStatus=="deactive"){
      updateToActiveEmployee();
      
      alert("update to active by  legal way");
    }
      // updateToActiveEmployee();
      else if(count!=0&&employeeStatus=="deactive"&&props.empInfo.employeeStatus=="active"&&isRetrn==false){
       
        let res=window.confirm("it is illegally deactive it returndate is null")
       if(res){
         updateToUnreturnedLaptop();
         updateToDeactiveEmployee();
        
         alert("deactive illegally");
       }
      } 
      else if(count==0&&employeeStatus=="deactive"&&props.empInfo.employeeStatus=="active"){
        updateToDeactiveEmployee();
        
        alert("deactive legally");
      }
     
      saveEditEmployee();
      //alert("it is saved button");
     
    }
   else if (props.taskType=="New"){
    
    if(inputtxt1.current.value.length==0||inputtxt2.current.value.length==0||inputtxt3.current.value.length==0||inputtxt4.current.value.length==0||inputtxt5.current.value.length==0||file==undefined) {
    
      alert("please enter full information");
    }
    else{
     cheackPhoneNumCorrect();
     
    }
   }
  
  
  }
 
 useEffect(()=>{
 
  displayUnreturnLaptop();
  countEmpLap();
  
   if(props.taskType=="Edit"){
   
    
      setFirstName(props.empInfo.firstName);
      setLastName(props.empInfo.lastName);
      setPhoneNumber(props.empInfo.phoneNumber);
      setDepartment(props.empInfo.department);
      setId(props.empInfo.id);
      setProfileImg("http://localhost:3001/Image/"+props.empInfo.imagePath);
      setEmployeeStatus(props.empInfo.employeeStatus);
     // alert("props.empinfo.employeestatus === *&^%$#@##$%^ $%$%$"+employeeStatus);
      // setFile("http://localhost:3001/Image/"+props.empInfo.imagePath);
      if(props.empInfo.employeeStatus=="active")
      setCheckedE(true);
      else if(props.empInfo.employeeStatus=="deactive")
      setCheckedE(false);
    }
    else if(props.taskType=="New"){
     setId("");
     setPhoneNumber("09"); 
    }
    if(props.taskType=="Detail"){
      setFirstName(props.empInfo.firstName);
      setLastName(props.empInfo.lastName);
      setPhoneNumber(props.empInfo.phoneNumber);
      setDepartment(props.empInfo.department);
      setId(props.empInfo.id);
      setProfileImg("http://localhost:3001/Image/"+props.empInfo.imagePath);
      setEmployeeStatus(props.empInfo.employeeStatus);
     // alert("props.empinfo.employeestatus === *&^%$#@##$%^ $%$%$"+employeeStatus);
      // setFile("http://localhost:3001/Image/"+props.empInfo.imagePath);
    }
    else{

    }  
 },[])
 return(
   <>
   
     <div className="mainDiv" id="EInfoo">
       <form >
       <h1   id="MainM"  hidden={props.taskType=="New"?false:true}>Employee registration interface</h1>
        <div
         style={count!=0&&employeeStatus=="deactive"||employeeStatus=="active"&&props.empInfo.employeeStatus=="deactive"&&count!=0?{border: "red 1px solid"} :{border: "white 5px solid"}}
         >
       <p style={{color: 'red',  marginLeft: 150, fontSize: 25} } hidden={count!=0&&employeeStatus=="deactive"||employeeStatus=="active"&&props.empInfo.employeeStatus=="deactive"&&count!=0?false:true} >  This employee is not return laptop</p>
         <label className="lbl">ID: </label>
         <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt1} value={id} onChange={(event)=>{setId(event.target.value);}} readOnly={props.taskType=="Edit"?true:false}></input><br></br>
         <label className="lbl">First Name: </label>
         <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt2} onChange={(event)=>{setFirstName(event.target.value.replace(/[^a-z]/gi,''));}} id="firstName" value={firstName} readOnly={props.taskType=="Detail"?true:false}></input><br></br>
         <label className="lbl">Last Name: </label>
         <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt3} onChange={(event)=>{setLastName(event.target.value.replace(/[^a-z]/gi,''));}} value={lastName} readOnly={props.taskType=="Detail"?true:false}></input ><br></br>
         <label className="lbl">Department: </label>
         <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt4} onChange={(event)=>{setDepartment(event.target.value.replace(/[^a-z]/gi,''));}} value={department} readOnly={props.taskType=="Detail"?true:false}></input><br></br>
         <label className="lbl">Phone Number: </label>
         <input type="text"  maxLength={10} required={props.taskType=="New"?true:false} ref={inputtxt5} onChange={(event)=>{setPhoneNumber(event.target.value.replace(/[^0-9]/gi,''));}}
         onClick={()=>alert(phoneNumber.length)}
         value={phoneNumber} readOnly={props.taskType=="Detail"?true:false}></input><br></br>
       
         <div className="div50">
            <label id="lblimg">Image: </label>
         </div>
         <div className="cont">
           <p className="h"> Image</p>
           <div  className="img-holder">
             <img  
               src={profileImg} 
               alt="" 
               className="img" 
               value={profileImg} 
               readOnly={props.taskType=="Detail"?true:false}
              />
           </div>
           <input required={props.taskType=="New"?true:false}
             ref={inputtxt6}
             className="image-upload" 
             name="image" 
             type="file" 
             id="input" 
             accept="image/*" 
             onChange={imageHandlerUI }
            />
           <div className="label">
             <label hidden={props.taskType=="Detail"?true:false} htmlFor="input" className="image-upload" >
               Choose File
             </label>
           </div>
         </div>
         <div>
        
           <label hidden={props.taskType=="New"?true:false} id="actlbl"><input id="act"  type="checkbox" 
              defaultChecked=
             {props.taskType=="New"?checkedE:props.empInfo.employeeStatus=="active"?checkedE:!checkedE} 
             onChange={props.taskType=="Edit"?
             ()=>{setCheckedE(!checkedE); 
              
              if(!checkedE==true){
             setEmployeeStatus("active");
          
          }
       
             else{
              setEmployeeStatus("deactive");
             }
           }
              
              : null }
              />
              <label id="inneractlbl">
                Active
              </label>
            </label>
            <br></br>
           
            <label  hidden={count!=0&&employeeStatus=="deactive"||employeeStatus=="active"&&props.empInfo.employeeStatus=="deactive"&&count!=0?false:true}  id="actlbll"><input id="act"  type="checkbox" 
              defaultChecked=
             {false} 
             onChange={
             ()=>{setIsReturn(!isRetrn); 
              }
               }
              />
              <label id="inneractlbl">
                       return              </label>
            </label>
            <br></br>
            </div>
           {/* <label>{cheack.returnDate}   -   {cheack.id}  -  {cheack.serialNumber}</label> <br></br> */}
           <label >{count}</label><br></br>
           {unreturnedL.map((emp)=>(<>
             <label >{emp.returnDate}   -   {emp.id}  -  {emp.serialNumber}</label> <br></br></>
           ))}
           {/* <label  hidden={unreturnedL!=undefined?false:true}>{unreturnedL}</label> */}

            <label className="btns "  id="btns" onClick={save} hidden={props.taskType=="Detail"?true:false}> Save</label>
           <label 
             className="btnc" 
             onClick={()=>{ setOpenModal(false)}} 
             hidden={props.taskType=="Detail"?true:false}  >
             Cancel
           </label><br></br>
         </div>
       </form>
 
     </div>
   </>
  );   
}
export default EditEmployee;
  {/* {unreturnedL.forEach(function(key,value){
            {<label>{text+=key+ '='+value+"<br>"}</label>}
           }
          
           )} */}
           {/* {unreturnedL.map((count)=>(
            <>
            <label >{count.serialNumber}</label>
            <br/>
            </>
           ))} */}  {/* <label className="lbl" >id: </label>
         <input type="text"   value={cheack!=undefined?cheack.id:"HI"} readOnly={props.taskType=="Detail"?true:false}></input ><br></br>
         
         <label className="lbl">return date: </label>
         <input type="text"  
         value={cheack!=undefined?cheack.returnDate:"HI"} 
         readOnly={props.taskType=="Detail"?true:false}
         ></input ><br></br> */}