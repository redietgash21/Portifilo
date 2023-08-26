






  
   





import React, {useEffect, useState} from 'react';
import Axios from 'axios';
const ScannerUI=(props)=>{
 
  const [profileimg, setProfile]=useState("https://th.bing.com/th/id/OIP.S171c9HYsokHyCPs9brbPwHaGP?pid=ImgDet&rs=1");
     
 
   
 
  
   
        return(props.trigger)?(
   <>
   <div className="pop" >
    <div className='pop-inner'>
     <h1 >Update Employee Information</h1>
     {
    //  display.map((val,key)=>(
   <>
   <div className='editActiveImg'>
   <div className="contPop">
         <p className="h">change Employee Image</p>
         <div className="img-holderPop">
             <img  src={profileimg}  alt="" className="imgPop" />
         </div>  
      </div>
   </div>
   <div className='editActiveOth'>
      <label className="lble">First Name: </label>
      <input className="texte" type="text" /> 

      
      <label className="lble">Last Name: </label>
      <input className="texte" type="text"  />
      
      <label className="lble">ID: </label>
      <input className="texte" type="text" />
      <label className="lble">Department: </label>
      <input className="texte" type="text" />
      <label className="lble">Phone Number: </label>
      <input className="texte" type="text" />
      <label className="lble">Office: </label>
      <input className="texte" type="text" />
      <label className="lble">Serial Number: </label>
      <input className="texte" type="text" />
      </div>
      
      
      
     
        </>    
     
           
      }
      <button className='close btn' onClick={()=>props.setTrigger(false)}>Cancel</button>
       {props.children}
       <button className="btn" > Save</button><br></br>
      
         
     
        </div>
      </div>
     
     
    
   </>
     ):"";
   
   }
   export default ScannerUI;