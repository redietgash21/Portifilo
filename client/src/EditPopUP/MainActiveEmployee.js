





import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import EditActivePopup from './EditActivePopup';
import Modal from 'react-bootstrap/Modal'
import NewEmployeeTab from '../NewEmployeeTab';
//import BootstrapTable from "react-bootstrap-table-next";
const MainActiveEmployee=(props)=>{
    const [display,setDisplay]=useState([]);
    const [editActive,setEditActive]=useState(false);
    const [selected,setSelected] = useState({});
    const [openModal,setOpenModal] = useState(false);

    const showHideModal = ()=>{
      setOpenModal(!openModal);
    }
    const displayActiveEmployee=()=>{
      Axios.get("http://localhost:3001/displayActiveEmployee").then(response=>{
        setDisplay(response.data);
        response.data.map(res=>{
          
          {console.log("Img path : ",res.imagePath)}
        })
      });
    }
    const displayDeactiveEmployee=()=>{
      Axios.get("http://localhost:3001/displayDeactiveEmployee").then(response=>{
        setDisplay(response.data);
        response.data.map(res=>{
          
          {console.log("Img path : ",res.imagePath)}
        })
      });
    }
  
    useEffect(()=>{
      if(props.taskType =="active"){
      displayDeactiveEmployee()
    }
      else{
      //displayActiveEmployee()
    }

     },[]);


    return(
      <>
      <h1   id="MainM">Active Employee List</h1>
       <table>
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
             <td>
              <button onClick={()=>{setEditActive(true); setSelected(emp); setOpenModal(true)}}>Edit</button>
             {/* <EditActivePopup selected = {selected} trigger={editActive} setTrigger={setEditActive}>
       
             </EditActivePopup> */}
             </td>
            
             </tr>
          ))}


        </tbody>
       </table>
      

       <Modal size="lg" show = {openModal} onHide = {showHideModal}>
        <Modal.Header style={{backgroundColor:"Green",color:"whitesmoke",fontsize:"12px",padding:"10px"}}>
         < Modal.Title >Edit Employee</Modal.Title>
        </Modal.Header>
             <Modal.Body><NewEmployeeTab empInfo = {selected} taskType="Edit"/></Modal.Body>
      </Modal>
      </>
    );
  }
  export default MainActiveEmployee;