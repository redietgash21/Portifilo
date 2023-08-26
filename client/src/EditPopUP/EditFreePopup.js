





import React, {useEffect, useState} from 'react';
import Axios from 'axios';
const EditFreePopup=(props)=>{ 
  var myVar = props.selected;
    const[serialNumber,setSerialNumber]=useState();
   const[productName,setProductName]=useState();  
   const[totalMemory,setTotalMemory]=useState(); 
   const[checkedL, setCheckedL]=useState(false);
    const[processorName,setprocessorName]=useState();
   const[ram,setRam]=useState();  
   const[systemType,setSystemType]=useState();  
  
  const saveEditLaptop=()=>{
    
    console.log(totalMemory);
    Axios.post("http://localhost:3001/editLaptopInfo",{
     
    serialNumber: props.selected.serialNumber,
    productName: productName==undefined?props.selected.productName:productName,
    totalMemory: totalMemory==undefined?props.selected.totalMemory:totalMemory,
    processorName: processorName==undefined?props.selected.processorName:processorName,
    ram: ram==undefined?props.selected.RAM:ram,
    systemType: systemType==undefined?props.selected.systemType:systemType,
   
  }).then((response)=>{
    
  }).catch((err)=>{
    console.log(serialNumber,props.selected.serialNumber,'err',err);
  });
   alert(serialNumber);
  }
   useEffect(()=>{
    
   },[])
   
   
        return(props.trigger)?(
   <>
   <div className="pop" >
    <div className='pop-inner'>
     <h1 >Update Laptop Information</h1>
     {/* <input type="text" onChange={e=>setTotalMemory(e.target.defaultValue)} defaultValue = {props.selected.totalMemory} /> */}
    
   <>
  
   <div className='editActiveOth'>
      <label className="lble">Product Name: </label>
      <input className="texte" type="text"   value = {props.selected.productName} 
  //      onChange={
  //       (event)=>{if(event.target.value===""){
  //         console.log("event.target.value==''")
  //         setProductName(props.selected.productName);
  //       } else{ 
  //         console.log("event.target.value have a value")
  //         setProductName( event.target.value);}}
  // }
      /> 

      
      <label className="lble">Serial Number: </label>
      <input className="texte" type="text"  value = {props.selected.serialNumber}  />
      
      <label className="lble">Processor Name:</label>
      <input className="texte" type="text" onChange={(event)=>{setprocessorName(event.target.value);}} defaultValue={props.selected.processorName}/>
      <label className="lble">RAM: </label>
      <input className="texte" type="text" onChange={event=>{setRam(event.target.value); console.log("Ram: ",event.target.value);}} defaultValue = {myVar.RAM} />
      <label className="lble">Total Memory: </label>
      <input type="text" onChange={(event)=>{setTotalMemory(event.target.value);
      console.log("ugjbibui------", totalMemory);}} value={props.selected.totalMemory}/>
      <label className="lble">System Type: </label>
      <input className="texte" type="text" onChange={(event)=>{setSystemType(event.target.value);}} defaultValue={props.selected.systemType}/>
      
      </div>
        </>           
      
      <button className='close btn' onClick={()=>props.setTrigger(false)}>Cancel</button>
       {props.children}
       
       <label><input type="checkbox" defaultChecked={checkedL} />Assigned</label>
          <button className="btn" id="save" onClick={saveEditLaptop}> Save</button><br></br> 
     
        </div>
      </div>
     
     
    
   </>
     ):"";
   
   }
   export default EditFreePopup;