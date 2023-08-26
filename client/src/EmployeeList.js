





import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import EditEmployee from './EditEmployee';

//import BootstrapTable from "react-bootstrap-table-next";
const EmployeeList=(props)=>{
  const [display,setDisplay]=useState([]);
  const [selected,setSelected] = useState({});
  const [openModal,setOpenModal] = useState(false);
 const showHideModal = ()=>{
   setOpenModal(!openModal);
 }
 const displayDeactiveEmployee=()=>{
   Axios.get("http://localhost:3001/displayDeactiveEmployee").then(response=>{
     setDisplay(response.data);
      response.data.map(res=>{
       {console.log("Img path : ",res.imagePath)}
      })
   });
 }
 const displayActiveEmployee=()=>{
   Axios.get("http://localhost:3001/displayActiveEmployee").then(response=>{
     setDisplay(response.data);
      response.data.map(res=>{ 
       {console.log("Img path : ",res.imagePath)}
      })
    });
 }
 useEffect(()=>{
   if(props.taskType=="activee"){
    displayActiveEmployee()
  }
   else if(props.taskType =="deactive"){
     displayDeactiveEmployee();
   }
 else{

 }
 },[]);
 return(
 <>
   <div  >
   <h1   id="MainM" hidden={props.taskType=="activee"?false:true}>Active Employee Lists</h1>
   <h1   id="MainM" hidden={props.taskType=="deactive"?false:true}>Not Active Employee Lists</h1>
   <table >
     <thead>
       <tr>
          <th className='tdImg'>Image</th>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Department</th>
          <th>Phone Number</th>
          <th></th>
          
       </tr>
     </thead>
     <tbody>
       {display.map((emp)=>(
         <tr>
            <td className='tdImg'><img width="100%" height="100%" src={"http://localhost:3001/Image/"+emp.imagePath}/></td>
            <td>{emp.id}</td>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.department}</td>
            <td>{emp.phoneNumber}</td>
            <td hidden>{emp.employeeStatus}</td>
            <td>
             <button onClick={()=>{setSelected(emp); setOpenModal(true)}}>
                Edit
             </button>
             {/* <EditDeactivePopup selected = {selected} trigger={editActive} setTrigger={setEditActive}>
       
             </EditDeactivePopup> */}
            </td>
          </tr>
        ))}
         
     </tbody>
   </table>
   </div>
   {openModal&&(
     <Modal size="lg" show = {openModal} onHide = {showHideModal}>
       <Modal.Header style={{backgroundColor:"Green",color:"whitesmoke",fontsize:"12px",padding:"10px"}}>
          < Modal.Title >Edit Employee</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <EditEmployee  empInfo = {selected} taskType="Edit" />
       </Modal.Body>
     </Modal>
   )}    
 </>
 );
}
export default EmployeeList;