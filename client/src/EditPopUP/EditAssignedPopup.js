





import React, {useEffect, useState} from 'react';
import Axios from 'axios';
const EditAssignedPopup=(props)=>{
  const x=props.selected.productName;
   const [serialNumber,setSerialNumber]=useState(""); 
   const [productName,setProductName]=useState(x);  
   const [totalMemory,setTotalMemory]=useState(""); 
   const [checkedL, setCheckedL]=useState(true);
    const [processorName,setprocessorName]=useState("");
   const [ram,setRam]=useState("");  
   const [systemType,setsystemType]=useState("");  
    const [laptopStatus,setLaptopStatus]=useState("");
    
  
   
   const save=()=>{
   
    Axios.post("http://localhost:3001/editLaptopInfo",{
     
    serialNumber: serialNumber,
    productName: productName,
    totalMemory: totalMemory,
    processorName: processorName,
    ram: ram,
    systemType: systemType,
    
  }).then((response)=>{
    
  }).catch((err)=>{
    console.log('err',err);
  });
   alert ("it is saved......")
  }
 
   useEffect(()=>{
    
   },[])
   
   
        return(props.trigger)?(
   <>
   <div className="pop" >
    <div className='pop-inner'>
     <h1 >Update Laptop Information</h1>
     {
    //  display.map((val,key)=>(
   <>
  
   <div className='editActiveOth'>
      <label className="lble">Product Name: </label>
      <input className="texte" type="text"  defaultValue = {props.selected.productName}  onChange={(event)=>{if(event.target.value==""){setProductName(props.selected.productName);}
      else{ setProductName( event.target.value);}}
       }/> 

      
      <label className="lble">Serial Number: </label>
      <input className="texte" type="text" defaultValue = {props.selected.serialNumber} onChange={(event)=>{setSerialNumber(event.target.value);}} />
      
      <label className="lble">Processor Name:</label>
      <input className="texte" type="text" onChange={(event)=>{setprocessorName(event.target.value);}} defaultValue={props.selected.processorName}/>
      <label className="lble">RAM: </label>
      <input className="texte" type="text" onChange={(event)=>{setRam(event.target.value);}} defaultValue={props.selected.RAM}/>
      <label className="lble">Total Memory: </label>
      <input className="texte" type="text" onChange={(event)=>{setTotalMemory(event.target.value);}} defaultValue={props.selected.totalMemory}/>
      <label className="lble">System Type: </label>
     
      <input className="texte" type="text" onChange={(event)=>{setsystemType(event.target.value);}} defaultValue={props.selected.systemType}/>
      
      </div>
      
      
      
     
        </>    
     
           
      }
      <button className='close btn' onClick={()=>props.setTrigger(false)}>Cancel</button>
       {props.children}
        
       <label><input  type="checkbox" id="assign" onclick="return false" defaultChecked={checkedL} onChange={()=>{document.getElementById("assign").contentEditable=false
    }}/>Assigned</label>
          <button className="btn" id="save" onClick={save}> Save</button><br></br> 
     
        </div>
      </div>
     
     
    
   </>
     ):"";
   
   }
   export default EditAssignedPopup;