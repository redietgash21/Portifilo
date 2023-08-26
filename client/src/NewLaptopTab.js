





import React, {useState,useEffect, useRef} from 'react';
import Axios from 'axios';
//import QRImg from './QRImg';
const NewLaptopTab=(props)=>{
  const [serialNumber, setSerialNumber]=useState("");
  const [productName, setProductName]=useState("");
  const [totalMemory, setTotalMemory]=useState("");
  const [processorName, setprocessorName]=useState("");
  const [ram, setRam]=useState("");
  
  const [systemType, setsystemType]=useState("");
  const [laptopStatus,setLaptopStatus]=useState("");
  const [openModal,setOpenModal] = useState(false);
  const inputtxt1=useRef(null);
  const inputtxt2=useRef(null);
  const inputtxt3=useRef();
  const inputtxt4=useRef();
  const inputtxt5=useRef();
  const inputtxt6=useRef();
 
 
 const saveEditLaptop=()=>{
   console.log(totalMemory);
   Axios.post("http://localhost:3001/editLaptopInfo",{
      serialNumber: props.empInfo.serialNumber,
      productName: productName==undefined?props.empInfo.productName:productName,
      totalMemory: totalMemory==undefined?props.empInfo.totalMemory:totalMemory,
      processorName: processorName==undefined?props.empInfo.processorName:processorName,
      ram: ram==undefined?props.empInfo.RAM:ram,
      systemType: systemType==undefined?props.empInfo.systemType:systemType,
    }).then((response)=>{  
    }).catch((err)=>{
    console.log(serialNumber,props.selected.serialNumber,'err',err);
    });
 
  }

 const saveNewLaptop=()=>{
   Axios.post("http://localhost:3001/insertLaptopInfo",{
      serialNumber: serialNumber,
      productName: productName,
      totalMemory: totalMemory,
      processorName: processorName,
      ram: ram,
      systemType: systemType,
      laptopStatus: laptopStatus
    }).then((response)=>{
    
    }).catch((err)=>{
    console.log('err',err);
   });     
 };
 
 const save=()=>{
  
     if(props.taskType=="Edit"){
        saveEditLaptop();
       
        alert("The information is saved");
     }
     else if (props.taskType=="New"){
      if(inputtxt1.current.value.length==0||inputtxt2.current.value.length==0||inputtxt3.current.value.length==0||inputtxt4.current.value.length==0||inputtxt5.current.value.length==0||inputtxt6.current.value.length==0) {
        alert("please enter full information");
      }
     else{
       saveNewLaptop();
       alert("The information is saved");
     }
     }
     
   
   
 }

 useEffect(()=>{
  
 
   if(props.taskType=="Edit"){
     setSerialNumber(props.empInfo.serialNumber);
     setprocessorName(props.empInfo.processorName);
     setProductName(props.empInfo.productName);
     setsystemType(props.empInfo.systemType);
     setRam(props.empInfo.RAM);
     setTotalMemory(props.empInfo.totalMemory);
     setLaptopStatus(props.empInfo.laptopStatus);
   }
   else if(props.taskType=="New"){
   }
   if(props.taskType=="Detail"){
     setSerialNumber(props.empInfo.serialNumber);
     setprocessorName(props.empInfo.processorName);
     setProductName(props.empInfo.productName);
     setsystemType(props.empInfo.systemType);
     setRam(props.empInfo.RAM);
     setTotalMemory(props.empInfo.totalMemory);
     setLaptopStatus(props.empInfo.laptopStatus);
   }
 },[])
 return(
   <>
     <div className="mainDiv"  id="LInfoo">
       <form >
       <h1   id="MainM"  hidden={props.taskType=="New"?false:true}>Laptop registration interface</h1>
          <label className="lbl">Product Name: </label>
          <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt1} onChange={(event)=>{setProductName(event.target.value.replace(/\s+/g,''));}} value={productName}  readOnly={props.taskType=="Detail"?true:false}></input><br></br>
          <label className="lbl">Serial Number: </label>
          <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt2} onChange={(event)=>{setSerialNumber(event.target.value.replace(/\s+/g,''));}} className="inputtxt" value={serialNumber} readOnly={props.taskType=="New"?false:true} id="serial"></input><br></br>
          <label className="lbl">Total Memory: </label>
          <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt3} className="inputtxt" onChange={(event)=>{setTotalMemory(event.target.value.replace(/\s+/g,''));}}  readOnly={props.taskType=="Detail"?true:false} value={totalMemory} ></input><br></br>
          <label className="lbl">processor Name: </label>
          <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt4} className="inputtxt" onChange={(event)=>{setprocessorName(event.target.value.replace(/\s+/g,''));}}  readOnly={props.taskType=="Detail"?true:false} value={processorName} ></input><br></br>
          <label className="lbl">Installed Memory(RAM): </label>
          <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt5} className="inputtxt" readOnly={props.taskType=="Detail"?true:false} onChange={(event)=>{setRam(event.target.value.replace(/\s+/g,''));}} value={ram} ></input><br></br>
          <label className="lbl">system Type: </label>
          <input type="text" required={props.taskType=="New"?true:false} ref={inputtxt6} className="inputtxt" readOnly={props.taskType=="Detail"?true:false} onChange={(event)=>{setsystemType(event.target.value.replace(/\s+/g,''));}} value={systemType} ></input><br></br>
        
      
          <br></br>
          <button className="btns" hidden={props.taskType=="Detail"?true:false} onClick={save} > Save</button>
          <button className="btnc" onClick={()=>{ setOpenModal(false)}}> Cancel</button><br></br>
       </form>
     </div>    
   </>
  );
  }
  export default NewLaptopTab;