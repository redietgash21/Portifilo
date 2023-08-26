





import React, {useEffect, useState} from 'react';
import Axios from 'axios';
const EditActivePopup=(props)=>{
  const [firstName,setFirstName]=useState(""); 
  const [lastName,setLastName]=useState("");  
  const [id,setId]=useState(0); 
  const [employeeStatus,setEmployeeStatus]=useState(""); 
  const [phoneNumber,setPhoneNumber]=useState(0);  
  const [department,setDepartment]=useState(""); 
  const [file,setFile]=useState(null);
  const [imgName,setImgName] = useState("")
  const [checkedE, setCheckedE]=useState(true);
  const [profileimg, setProfile]=useState("https://th.bing.com/th/id/OIP.S171c9HYsokHyCPs9brbPwHaGP?pid=ImgDet&rs=1");
     const imageHandlerUI = (e) =>{
         setProfile(URL.createObjectURL(e.target.files[0]));
         setFile(e.target.files[0]);
         setImgName(e.target.files[0].name)
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
    
       }
  const save=()=>{
    updateToDeactiveEmployee();
     
    const formData = new FormData();
    formData.append('image',file);
    formData.append('firstName',firstName);
    formData.append('lastName',lastName);
    formData.append('id',id);
    formData.append('department',department);
    formData.append('phoneNumber',phoneNumber);
  
   // formData.append('imgName',imgName);
    

    
    const url="http://localhost:3001/editEmployeeInfo";
    Axios.post(url, formData).then((response)=>{
      alert('image is sucessful...'); 
    }).catch((err)=>{
      console.log('err',err);
    });
   alert("update it");
  }
   useEffect(()=>{
    
   },[])
   
   
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
             <img  src={"http://localhost:3001/Image/"+props.selected.imagePath} onChange={imageHandlerUI} defaultValue={props.selected.imagePath} alt="" className="imgPop" />
         </div>
         <input className="image-upload" name="image" type="file" id="input" accept="image/*" onChange={imageHandlerUI }/>
         <div className="label">
             <label htmlFor="input" className="image-upload" >
                 
                 Choose File
             </label>
         </div>
      </div>
   </div>
   <div className='editActiveOth'>
      <label className="lble">First Name: </label>
      <input className="texte" id="edit" type="text" onChange={
          ()=>{document.getElementById("edit").contentEditable=true
        } }defaultValue={props.selected.firstName}/> 

      
      <label className="lble">Last Name: </label>
      <input className="texte" type="text" defaultValue = {props.selected.lastName} />
      
      <label className="lble">ID: </label>
      <input className="texte" type="text"  value={props.selected.id}/>
      <label className="lble">Department: </label>
      <input className="texte" type="text" onChange={(event)=>{setDepartment(event.target.value);}} defaultValue={props.selected.department}/>
      <label className="lble">Phone Number: </label>
      <input className="texte" type="text" onChange={(event)=>{setPhoneNumber(event.target.value);}} defaultValue={props.selected.phoneNumber}/>
      
      </div>
      
      
      
     
        </>    
     
           
      }
      <button className='close btn' onClick={()=>props.setTrigger(false)}>Cancel</button>
       {props.children}
       <button className="btn" onClick={save}> Save</button><br></br>
       <label><input id="act" type="checkbox" defaultChecked={checkedE} onChange={()=>{setCheckedE(!checkedE);
        if(checkedE==true){setEmployeeStatus("deactive");} else{setEmployeeStatus("active");}  
    }}
      />Active</label>
          
     
        </div>
      </div>
     
     
    
   </>
     ):"";
   
   }
   export default EditActivePopup;