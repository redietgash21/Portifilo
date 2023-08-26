/*import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";*/



import EmployeeLaptopAssociation from './EmployeeLaptopAssociation';
import MainMenu from './MainMenu';
import React , {useState, useRef} from 'react';
import './App.css';
import EmployeeList from './EmployeeList';
import ScanInfo from './ScanInfo';
import EditEmployee from './EditEmployee';
import LaptopList from './LaptopList';
import NewLaptopTab from './NewLaptopTab';
import Login from './Login';
function App() {
  const employeeRef=useRef();
  const laptopRef=useRef();
  const employeeLaptopRef=useRef();
  const scanRef=useRef();
  const [active,setActive]=useState("login");
  const [activeEmployee,setActiveEmployee]=useState("New Employee Registration");
  const [activeLaptop,setActiveLaptop]=useState("New Laptop Registration");
  const [activeEL,setActiveEL]=useState("Employee Laptop Assignment Intrface");
  //to distingush the active menu by change background color to green
  const styleBG=(backGMain,backGInternal)=>{
    if(backGMain=='Scan Interface'){
      
      scanRef.current.style.backgroundColor='#459d46';
      employeeRef.current.style.backgroundColor='white';
      laptopRef.current.style.backgroundColor='white';
      employeeLaptopRef.current.style.backgroundColor='white';
      employeeRef.current.style.height="100px";
      laptopRef.current.style.height="100px";
      employeeLaptopRef.current.style.height="100px";
      scanRef.current.style.height="100px";
    }
  
    else if(backGMain=='Employee Interface'){
    
      scanRef.current.style.backgroundColor='white';
      employeeRef.current.style.backgroundColor='#459d46';
      employeeRef.current.style.height="200px";
      laptopRef.current.style.backgroundColor='white';
      employeeLaptopRef.current.style.backgroundColor='white';
      laptopRef.current.style.height="100px";
      employeeLaptopRef.current.style.height="100px";
      scanRef.current.style.height="100px";
      if(backGInternal=="New Employee Registration"){}
      else if(backGInternal=="Active Employee Interface"){}
      else if(backGInternal=="Not Active Employee Interface"){}
     
    }
    if(backGMain=='Laptop Interface'){
    
      scanRef.current.style.backgroundColor='white';
      employeeRef.current.style.backgroundColor='white';
      laptopRef.current.style.backgroundColor='#459d46';
      employeeLaptopRef.current.style.backgroundColor='white';
      employeeRef.current.style.height="100px";
      
      laptopRef.current.style.height="200px";
      employeeLaptopRef.current.style.height="100px";
      scanRef.current.style.height="100px";
      if(backGInternal=="Free Laptop Interface"){}
      else if(backGInternal=="Assigned Laptop Interface"){}
      else if(backGInternal=="New Laptop Registration"){}
    }
    if(backGMain=='Employee Laptop Interface'){
     
      scanRef.current.style.backgroundColor='white';
      employeeRef.current.style.backgroundColor='white';
      laptopRef.current.style.backgroundColor='white';
      employeeLaptopRef.current.style.backgroundColor='#459d46';
      employeeRef.current.style.height="100px";
      laptopRef.current.style.height="100px";
      employeeLaptopRef.current.style.height="175px";
      scanRef.current.style.height="100px";
       if(backGInternal=="Main Interface"){}
      else if(backGInternal=="Employee Laptop Assignment Intrface"){}
    }
  }
  return (
    <>
    
      <div className='main100'>
        <div className='navSideBar'>
          <nav >
          <img src="IPDCimg.jpg" alt='ipdcimg' id='ipdcimg' />
            <button 
            style={active=="Employee Interface"?{  height: "200px", backgroundColor: "#459d46"}:{}}
              ref={employeeRef}
              className="btnSideBar" 
              id="first" 
              onClick={()=>{setActive("Employee Interface");styleBG("Employee Interface","hjbjh")}}>
              Employee Information
              <div hidden={ active=="Employee Interface"?false:true}>
                <nav >
                  <button  
                   style={activeEmployee=="Active Employee Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}  
                    className="btnSideBarn" onClick={()=>setActiveEmployee("Active Employee Interface")}>
                    Active Employee
                  </button>
                  <button 
                   style={activeEmployee=="Not Active Employee Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}  className="btnSideBarn"onClick={()=>setActiveEmployee("Not Active Employee Interface")}>
                    Deactive Employee
                  </button>
                  <button 
                   style={activeEmployee=="New Employee Registration"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}} className="btnSideBarn"onClick={()=>setActiveEmployee("New Employee Registration")}>
                  New
                  </button>
                </nav>
                
             </div>
            </button>
            <button 
              ref={laptopRef}
              className="btnSideBar" 
              id="second" 
              onClick={()=>{setActive("Laptop Interface");styleBG("Laptop Interface")}}>
              Laptop Information
              <div  hidden={ active=="Laptop Interface"?false:true}>
                <nav >
                 <button 
                    style={activeLaptop=="Free Laptop Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                    className="btnSideBarn"  onClick={()=>setActiveLaptop("Free Laptop Interface")}>Free Device
                  </button>
                  <button  style={activeLaptop=="Assigned Laptop Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}} className="btnSideBarn" onClick={()=>setActiveLaptop("Assigned Laptop Interface")}>Assigned Device</button>
                  
                  <button  style={activeLaptop=="New Laptop Registration"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}className="btnSideBarn" onClick={()=>setActiveLaptop("New Laptop Registration")}>New</button>
               </nav>
             </div>
            </button>
            <button 
            
              ref={employeeLaptopRef}
              className="btnSideBar" 
              onClick={()=>{setActive("Employee Laptop Interface");styleBG("Employee Laptop Interface")}}>
              Employee Laptop Association  
              <div  hidden={ active=="Employee Laptop Interface"?false:true}>
                <nav className='navMainMenu' style={{  marginTop: "-20px"}}>
                  <button style={activeEL=="Main Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}className="btnSideBarn" onClick={()=>setActiveEL("Main Interface")}>Main Menu</button>          
                  <button style={activeEL=="Employee Laptop Assignment Intrface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}} className="btnSideBarn" onClick={()=>{setActiveEL("Employee Laptop Assignment Intrface")}}>Employee Laptop Association</button> 
                </nav>
              </div>
            </button>
            <button 
              ref={scanRef}
              className="btnSideBar" 
              onClick={()=>{setActive("Scan Interface",true);styleBG("Scan Interface")}}>
              scanner
            </button>
            {/* <div className='animationMenuMain startMenuMain'></div> */}
          </nav>
        </div>
        <div className='main82'>
          <div className='menuList'>
          
            <span className='span' >{active}</span>
            <span className='span' hidden={active=="Scan Interface"?true:false}>{"<<"}</span>
            <span className='span' hidden={active=="Employee Interface"?false:true}>{activeEmployee}</span>
            <span className='span'  hidden={active=="Laptop Interface"?false:true}>{activeLaptop}</span>
            <span className='span'  hidden={active=="Employee Laptop Interface"?false:true}>{activeEL}</span>

            {/* <span className='span'>{active2}</span> */}
          </div>
          <div >
          {active=="login"&& <Login />} 
            {active=="Employee Interface"?activeEmployee==="New Employee Registration" && <EditEmployee taskType= "New"/>:null} 
            {active=="Employee Interface"?activeEmployee==="Active Employee Interface" && <EmployeeList taskType = "activee"/>:null}
            {active=="Employee Interface"?activeEmployee==="Not Active Employee Interface" && <EmployeeList taskType = "deactive"/>:null}
            {active=="Laptop Interface"?activeLaptop==="Free Laptop Interface" && <LaptopList taskType="free"/>:null}
            {active=="Laptop Interface"?activeLaptop==="Assigned Laptop Interface" && <LaptopList taskType="assigned"/>:null}
            {active=="Laptop Interface"?activeLaptop==="New Laptop Registration" && <NewLaptopTab taskType="New"/>:null}
            {active=="Employee Laptop Interface"?activeEL==="Main Interface" &&<MainMenu/>:null}      
            {active=="Employee Laptop Interface"?activeEL==="Employee Laptop Assignment Intrface" && <EmployeeLaptopAssociation taskType="New" />:null} 
            {active==="Scan Interface"&&<ScanInfo/>  } 
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
