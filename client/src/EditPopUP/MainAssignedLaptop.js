





import React, {useState} from 'react';
import Axios from 'axios';
import EditAssignedPopup from './EditPopUP/EditAssignedPopup';
const MainAssignedLaptop=()=>{
    const [display,setDisplay]=useState([]);
    const [editActive,setEditActive]=useState(false);
    const [selected,setSelected] = useState({});
    const displayAssignedLaptop=()=>{
      Axios.get("http://localhost:3001/displayAssignedLaptop").then(response=>{
        setDisplay(response.data);
      });
    }
    
  
   
    return(
      <>

      <div className="mainDiv">
        
       <h1   id="MainM">Assigned Laptop List</h1>
       <table>
        <thead>
          <tr>
          <th>Product Name</th>
       <th>Serial Number</th>
       <th>Total Memory</th>
       <th>Processor Name</th>
       <th>RAM</th>
       <th>System Type</th>
       <th></th>
          </tr>
        </thead>
        <tbody>
        {display.map((emp)=>(
            <tr>
           
            
            <td>{emp.productName}</td>
            <td>{emp.serialNumber}</td>
             <td>{emp.totalMemory}</td>
             <td>{emp.processorName}</td>
             <td>{emp.RAM}</td>
            <td>{emp.systemType}</td>
             <td><button onClick={()=>{setEditActive(true); setSelected(emp);}}>Edit</button>
             <EditAssignedPopup selected = {selected} trigger={editActive} setTrigger={setEditActive}>
       
             </EditAssignedPopup>
             </td>
            
             </tr>
          ))}


        </tbody>
       </table>
       {displayAssignedLaptop()}
       </div>
      </>
    );
  }
  export default MainAssignedLaptop;