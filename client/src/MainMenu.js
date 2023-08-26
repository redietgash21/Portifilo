





import React, {useState, useEffect, useRef} from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import NewLaptopTab from './NewLaptopTab';
import EmployeeLaptopAssociation from './EmployeeLaptopAssociation'
import EditEmployee from './EditEmployee';

const MainMenu=()=>{
  const inputId=useRef();
  const inputSerialNumber=useRef();
  const [display,setDisplay]=useState([]);
  const [selected,setSelected] = useState({});
  const [openModal,setOpenModal] = useState(false);
  const [openModald,setOpenModald] = useState(false);
  
 const showHideModal = ()=>{
    setOpenModal(!openModal);
  }
 const showHideModald = ()=>{
    setOpenModald(!openModald);
  }
 const displayAEmployeeFLaptop=()=>{
   Axios.get("http://localhost:3001/displayEmployeelaptop").then(response=>{
     setDisplay(response.data);
      // response.data.map(res=>{
        
      //   {console.log("Img path : ",res.imagePath)}
      // })
    });
  }
 useEffect(()=>{
    displayAEmployeeFLaptop()
 },[]);
 return(
   <>
     <h1   id="MainM">Employee-laptop Assocation Interface</h1>
     <table>
       <thead>
         <tr>
           <th className='tdImg'>Image</th>
           <th>ID</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Product Name</th>       
           <th>Serial NUMBER</th>
           <th>laptop status</th>
           <th>employee status</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         {display.map((emp)=>(
           <tr>
             <td className='tdImg'><img width="100%" height="100%" src={"http://localhost:3001/Image/"+emp.imagePath}/></td>          
             <td ref={inputId}>{emp.id}</td>
             <td>{emp.firstName}</td>
             <td>{emp.lastName}</td>
             <td hidden>{emp.department}</td>
             <td hidden>{emp.phoneNumber}</td>
             <td>{emp.productName}</td>
             <td hidden>{emp.RAM}</td>
             <td hidden>{emp.systemType}</td>
             <td hidden>{emp.totalMemory}</td>
             <td hidden>{emp.processorName}</td>
             <td ref={inputSerialNumber}>{emp.serialNumber}</td>
             <td  >{emp.laptopStatus}</td>
             <td  >{emp.employeeStatus}</td>
             <td>
               <button onClick={()=>{setOpenModal(true); setSelected(emp);  console.log("Selected Emp: ",emp)}}>Edit</button>
               <button onClick={()=>{setOpenModald(true); setSelected(emp);  console.log("Selected Emp: ",emp)}}>Detail</button>
              
             </td>
           </tr>
         ))}
       </tbody>
     </table>
     {openModal&&(
       <Modal size="lg" show = {openModal} onHide = {showHideModal}>
         <Modal.Header style={{backgroundColor:"Green",color:"whitesmoke",fontsize:"12px",padding:"10px"}}>
            < Modal.Title >Edit Employee</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <EmployeeLaptopAssociation  empInfo = {selected} taskType="Edit" />
         </Modal.Body>
       </Modal>
     )}
     {openModald&&(
       <Modal size="lg" show = {openModald} onHide = {showHideModald}>
         <Modal.Header style={{backgroundColor:"Green",color:"whitesmoke",fontsize:"12px",padding:"10px"}}>
            < Modal.Title >detail</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <EditEmployee  empInfo = {selected} taskType="Detail" />
           <NewLaptopTab empInfo = {selected} taskType="Detail"/>
         </Modal.Body>
       </Modal>
       )}
   </>
 );
}
export default MainMenu;