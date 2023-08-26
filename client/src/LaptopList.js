




import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import NewLaptopTab from './NewLaptopTab';
const LaptopList=(props)=>{
  const [display,setDisplay]=useState([]);
  const [selected,setSelected] = useState({});
  const [openModal,setOpenModal] = useState(false);
 const showHideModal = ()=>{
   setOpenModal(!openModal);
 }
 const displayFreeLaptop=()=>{
   Axios.get("http://localhost:3001/displayFreeLaptop").then(response=>{
     setDisplay(response.data);
    });
 }
 const displayAssignedLaptop=()=>{
   Axios.get("http://localhost:3001/displayAssignedLaptop").then(response=>{
     setDisplay(response.data);
    });
  }
 useEffect(()=>{
  if(props.taskType =="assigned"){
    displayAssignedLaptop()
 }
   else if(props.taskType =="free"){
     displayFreeLaptop();
    }
  
  },[]);
 return(
   <>
     <div className="displayGrid"> 
       <h1   id="MainM"  hidden={props.taskType=="free"?false:true}>Not-assigned laptop lists</h1>
       <h1   id="MainM"  hidden={props.taskType=="assigned"?false:true}>Assigned laptop lists</h1>
       <table> 
         <thead>
           <tr>
              <th>Product Name</th>
              <th>Serial Number</th>
              <th>RAM</th>
              <th>System Type</th>
              <th>Total Memory</th>
              <th>Processor Name</th>  
              <th></th>
           </tr>
         </thead>
         <tbody>
           {display.map((emp)=>(
             <tr>
                <td>{emp.productName}</td>
                <td>{emp.serialNumber}</td>
                <td>{emp.RAM}</td>
                <td>{emp.systemType}</td>
                <td>{emp.totalMemory}</td>
                <td>{emp.processorName}</td>
                <td><button onClick={()=>{setOpenModal(true); setSelected(emp);}}>Edit</button>
                {/* <EditFreePopup  selected = {selected} trigger={editActive} setTrigger={setEditActive}>
       
                </EditFreePopup> */}
                </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
     {openModal&&(
       <Modal size="lg" show = {openModal} onHide = {showHideModal}>
       
         <Modal.Header style={{backgroundColor:"Green",color:"whitesmoke",fontsize:"12px",padding:"10px"}}>
           {/* <img src="favcon.png" style={{width: 100, height: 100, paddingleft: 40}}alt=""/> */}
           < Modal.Title >
        
           Edit laptop</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <NewLaptopTab empInfo = {selected} taskType="Edit" />
         </Modal.Body>
       </Modal>
      )}
   </>
    );
  }
  export default LaptopList;