



import React, {useEffect, useState} from 'react';
import Axios from 'axios';


const red={
  accent: "red",
  color: "red"
}
const EditMainMenu=(props)=>{
  const [selected,setSelected] = useState([]);
  const [display,setDisplay]=useState([]);
  const [employeeStatus,setEmployeeStatus]=useState("active");
  const [laptopStatus,setLaptopStatus]=useState("assigned");
   const [firstName,setFirstName]=useState("firstname"); 
   const [lastName,setLastName]=useState("lastname");  
   const [id,setId]=useState(props.selected.id); 
   const [productName,setProductName]=useState("");  
   const [totalMemory,setTotalMemory]=useState(""); 
  
    const [processorName,setprocessorName]=useState("");
   const [ram,setRam]=useState("");  
   const [systemType,setsystemType]=useState("");   
    const [serialNumber,setSerialNumber]=useState("");
   const [phoneNumber,setPhoneNumber]=useState(0);  
   const [department,setDepartment]=useState("");  
    const [img,setImg]=useState();
    const [checkedE, setCheckedE]=useState(true);
    const [checkedL, setCheckedL]=useState(true);
  const [file,setFile]=useState(null);
  const [imgName,setImgName] = useState("")
  const [profileImg, setProfileImg]=useState("https://th.bing.com/th/id/OIP.S171c9HYsokHyCPs9brbPwHaGP?pid=ImgDet&rs=1");
  const employeeOptions = display.map((emp)=>(
    <option value={emp.id} >{emp.firstName} {emp.lastName} - {emp.department} </option>
  ))
    //  const imageHandlerUI = (e) =>{
    //      setProfileImg(URL.createObjectURL(e.target.files[0]));
    //      setFile(e.target.files[0]);
    //      setImgName(e.target.files[0].name)
    //   }
    const displayActiveEmployee=()=>{
      Axios.get("http://localhost:3001/displayActiveEmployee").then(response=>{
        setDisplay(response.data);
      });
    }
    const displayFreeLaptop=(selected)=>{
        Axios.get("http://localhost:3001/displayFreeLaptop").then(response=>{
          setSelected(response.data);
        });
      }
   
  const save=()=>{
    updateToDeactiveEmployee();
    updateToFreeLaptop();
    alert(id+"-"+serialNumber); 
  }
  const updateToFreeLaptop=()=>{
    if(laptopStatus=="free"){
    Axios.post("http://localhost:3001/updateToFreeLaptop",{
      serialNumber: props.selected.serialNumber,
    laptopStatus: laptopStatus
  }).then((response)=>{
    
    //console.log("id:",event.target.value),
  }).catch((err)=>{
    console.log('err----',err);
  });
    }
  }
 const updateToDeactiveEmployee=()=>{
 
   if (employeeStatus=="deactive"){
    Axios.post("http://localhost:3001/updateToDeactiveEmployee",{
        id: props.selected.id,
      employeeStatus: employeeStatus
    }).then((response)=>{
      
      //console.log("id:",event.target.value),
    }).catch((err)=>{
      console.log('err----',err);
    });
  }
  // }
  // else if(act.checked==true){
  //   Axios.post("http://localhost:3001/activeEmployeeInfo",{
  //     employeeStatus: employeeStatus
  //   }).then((response)=>{
  //     alert('image is sucessful...'); 
  //   }).catch((err)=>{
  //     console.log('err',err);
  //   });
  // }
 }
//  const deOrActive=()=>{
//   const act=document.getElementById('act');
 
//   if(act.checked==false&&save==true){
//     console.log("deactive employee")
//   }
//  }
  
   useEffect(()=>{
    if(props.taskType=="Edit"){
      setSerialNumber(props.selected.serialNumber);
      setprocessorName(props.selected.processorName);
      setProductName(props.selected.productName);
      setsystemType(props.selected.systemType);
      setRam(props.selected.RAM);
      setTotalMemory(props.selected.totalMemory);
      setLaptopStatus(props.selected.laptopStatus);
      setFirstName(props.selected.firstName);
      setLastName(props.selected.lastName);
      setPhoneNumber(props.selected.phoneNumber);
      setDepartment(props.selected.department);
      setId(props.selected.id);
      setProfileImg("http://localhost:3001/Image/"+props.selected.imagePath);
      
    }
    else if(props.taskType=="New"){
      
      
    }
   },[])
   
   
        return(props.trigger)?(
   <>
   <div className="pop" >
    <div className='pop-inner'>
     <h1 >Update Employee Information</h1>
     {
    
   <>
   <div className='lapEmp'>
   <label className="lbl">Employee: </label>
   <select onChange={(event)=>{setId(event.target.value); console.log('Selected id : ',event.target.value)}}>
                {/* onChange={(sEvent)=>{console.log("Selected Id : ",selectedId); setSelectedId(sEvent.target.value)}}> */}
                <option value={id}> Employee name </option>
                {employeeOptions}
            </select><br></br>
            </div>
            <div className="empLap">
              <label className="lbl">Laptop: </label>
            <select onChange={(event)=>{setSerialNumber(event.target.value); console.log('Selected serial: ',event.target.value)}}>
              <option value={serialNumber}>Laptop</option>
            {selected.map((laptop)=>(
             <option value={laptop.serialNumber} >
              {laptop.productName} - {laptop.RAM}</option>
             ))}
            </select><br></br>
     
   </div>
  
     
      
   
     
         </>    
     }
      <label><input style={red} id="act" type="checkbox" defaultChecked={checkedE} onChange={()=>{setCheckedE(!checkedE);
        if(checkedE==true){setEmployeeStatus("deactive");} else{setEmployeeStatus("active");}  
    }}
      />Active</label>
      <label><input id="act" type="checkbox" defaultChecked={checkedL} onChange={()=>{setCheckedL(!checkedL); 
      if(checkedL==true){setLaptopStatus("free");} else{setLaptopStatus("assigned");}
    }}/>Assigned</label>
      <button className='close btn' onClick={()=>props.setTrigger(false)}>Cancel</button>
       {props.children}
       <button className="btn" id="save" onClick={save}> Save</button><br></br>
      
       
     
        </div>
        {displayActiveEmployee()}
            {displayFreeLaptop()}
      </div>
     
     
    
   </>
     ):"";
   
   }
   export default EditMainMenu;