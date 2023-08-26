import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';




// const empOptions = empList.map(emp => {
//     return <option value={emp.Id}>{emp.firstName} - {emp.department}</option>
// });

const EmployeeLaptopAssociation=(props)=>{
 const inputId=useRef();
 const inputSerialNumber=useRef();
 const [cheak,setCheak]=useState([]);
 const [display,setDisplay]=useState([]);
 const [laptopStatus,setLaptopStatus]=useState("assigned");
 const [checkedL,setCheckedL]=useState(true);
 const [id,setId]=useState();
 const [serialNumber,setSerialNumber]=useState();
 const [selected,setSelected] = useState([]);
 const [openModal,setOpenModal]=useState(false);
 const displayActiveEmployee=()=>{
   Axios.get("http://localhost:3001/displayActiveEmployee").then(response=>{
     setDisplay(response.data);
   });
 }
 const displayFreeLaptop=()=>{
   Axios.get("http://localhost:3001/displayFreeLaptop").then(response=>{
      setSelected(response.data);
      countEmpLap();
    });

  }

 
  const updateToFreeLaptop=()=>{
     
    Axios.post("http://localhost:3001/updateToFreeLaptop",{
       serialNumber: inputSerialNumber.current.value,
       id: props.empInfo.id
       
     }).then((response)=>{
     //console.log("id:",event.target.value),
     }).catch((err)=>{
     console.log('err----',err);
     });
     alert("upadte to free"+serialNumber+"   "+" employee ");
  
}

 const updateToAssignedLaptop=()=>{
   
     Axios.post("http://localhost:3001/updateToAssignedLaptop",{
       serialNumber: inputSerialNumber.current.value,
       
      }).then((response)=>{
      //console.log("id:",event.target.value),
      }).catch((err)=>{
     console.log('err----',err);
      });
   
  }
  const countEmpLap=()=>{ 
    Axios.post("http://localhost:3001/countEmpLap",{
      id: props.taskType=="Edit"?props.empInfo.id:null
    }).then(response=>{
    setCheak(response.data[0].Num);
    console.log(response.data);  
    });
  }
 const insertInOrOut=()=>{
 
  Axios.post("http://localhost:3001/insertInOrOut",{
     id: inputId.current.value,
     remark: "pass",
     inOrOut: "in",
     serialNumber: inputSerialNumber.current.value
    
   }).then((response)=>{
   
   }).catch((err)=>{
   console.log('err',err);
  }); 
  //  alert("it is passed"+inputtxt1.current.value);
   

};
 const insertLaptopInfoEL=()=>{
   Axios.post("http://localhost:3001/insertLaptopInfoEL",{
     serialNumber: inputSerialNumber.current.value,
     id: inputId.current.value
    }).then((response)=>{
    }).catch((err)=>{
   console.log('err',err);
   });
 };
 
 const save=()=>{
 if(props.taskType=="Edit"){
  if(props.empInfo.id!=inputId.current.value&&props.empInfo.serialNumber==inputSerialNumber.current.value&&checkedL==true){
      updateToFreeLaptop();
      insertLaptopInfoEL();
      updateToAssignedLaptop();
      insertInOrOut();
  alert("employee "+props.empInfo.id+" return and a assign to employee"+inputId.current.value);
  
 }
 else if(props.empInfo.id==inputId.current.value&&props.empInfo.serialNumber!=inputSerialNumber.current.value&&checkedL==true){
 insertLaptopInfoEL();
 updateToAssignedLaptop();
 insertInOrOut();
  alert("employee "+props.empInfo.id+" have laptop "+inputSerialNumber.current.value+" and "+props.empInfo.serialNumber);
  
 }
 else if(props.empInfo.id==inputId.current.value&&props.empInfo.serialNumber==inputSerialNumber.current.value&&checkedL==false&&laptopStatus=="free"){
 updateToFreeLaptop();
  alert("return laptop");
 }

else{
  alert("it is illegall way not permitted to acess like this ");
}}
else if(props.taskType=="New"){
  if(serialNumber && id){
     updateToAssignedLaptop();
     insertLaptopInfoEL();
     insertInOrOut();
    //  updateToActiveEmployee();
    //  updateToDeactiveEmployee();
    //  updateToFreeLaptop();
     alert('laptop '+"-"+serialNumber +" assigned to "+id); 
   }
   else{
     alert("Employee/Laptop is NOT selected");
    
    }
}
else{
  
}
}

 // const d=new Date();
 // const weekDays=['Sun','Mon','Tues','Wed','Thru','Fri','Sat'];
 // const months=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec']
 useEffect(()=>{
   if(props.taskType=="Edit"){
  
     
   }
   else if(props.taskType=="New"){
    }
    else{
   } 
  },[])
 return(
   <>
     <div>
       <form>
         <div className="selectdiv">
           <label className="selectlbl">Employee: </label>
         
            <select ref={inputId}
             onChange={(event)=>{
               setId(event.target.value); console.log('id: ',event. target.value)
              }}>
             <option   hidden={props.taskType=="New"?true:false} value={props.taskType=="Edit"?props.empInfo.id:""}>
               {props.taskType=="Edit"?props.empInfo.firstName:"select"}-{props.taskType=="Edit"?props.empInfo.lastName:"Employee"} {props.taskType=="Edit"?props.empInfo.department:""}                 {props.taskType=="Edit"?cheak:""}
             </option>
             {display.map((emp)=>(
             <option value={emp.id} >
              {emp.firstName} - {emp.lastName} {emp.department}       
              </option>
             ))}
           </select><br></br>
         </div>
         <div className="selectdivl">
           <label className="selectlbl">Laptop: </label>
           <select ref={inputSerialNumber}
             onChange={(event)=>{
               setSerialNumber(event.target.value); console.log('Selected serial: ',event. target.value)
              }}>
             <option   hidden={props.taskType=="New"?true:false} value={props.taskType=="Edit"?props.empInfo.serialNumber:""}>
               {props.taskType=="Edit"?props.empInfo.productName:"select"}-{props.taskType=="Edit"?props.empInfo.RAM:"laptop"}
             </option>
             {selected.map((laptop)=>(
             <option value={laptop.serialNumber} >
              {laptop.productName} - {laptop.RAM}</option>
             ))}
           </select><br></br>
            {/* <label value="">{weekDays[d.getDay()]}-{months[d.getMonth()]}/{d.getDate()}/{d.getFullYear()}</label><br></br> */}
         </div>
         <label hidden={props.taskType=="New"?true:false} id="actlbl"><input id="act"  type="checkbox" 
              defaultChecked=
             {props.taskType=="New"?checkedL:props.empInfo.laptopStatus=="assigned"?checkedL:()=>setCheckedL(!checkedL)} onChange={props.taskType=="Edit"?
             ()=>{setCheckedL(!checkedL); 
              if(checkedL==true&&props.empInfo.laptopStatus=="assigned")
             {setLaptopStatus("free");}
             else{
              setLaptopStatus("assigned");}
              alert("laptop status "+laptopStatus+" bools "+checkedL);
              }
              : null }
              />
              <label id="inneractlbl">
                Assigned
              </label>
            </label>
            <br></br>
         <button className="btns " id="btns" onClick={save}> Save</button>
         <button className="btnc" onClick={()=>{ setOpenModal(false)}}> Cancel</button><br></br>
         {displayActiveEmployee()}
         {displayFreeLaptop()}
       </form>
     </div>
    </>
 )
}
export default EmployeeLaptopAssociation;
 