






import React , {useState, useRef,useEffect} from 'react';
import './App.css';
import  Axios  from 'axios';
const SideBarButtons=(props)=>{
    const employeeRef=useRef();
    const adminRef=useRef();
    const laptopRef=useRef();
    const employeeLaptopRef=useRef();
    const scanRef=useRef();
    const inputlog=useRef();
    const [userName,setUserName]=useState("");
    const [passwordd,setPassword]=useState("");
    const [active,setActive]=useState("");
    const [activeEmployee,setActiveEmployee]=useState("New Employee Registration");
    const [activeLaptop,setActiveLaptop]=useState("New Laptop Registration");
    const [activeEL,setActiveEL]=useState("Employee Laptop Assignment Intrface");
     //to distingush the active menu by change background color to green
  const styleBG=(backGMain,backGInternal)=>{
    if(backGMain=='Scan Interface'){
      employeeRef.current.style.backgroundColor='white';
      laptopRef.current.style.backgroundColor='white';
      employeeLaptopRef.current.style.backgroundColor='white';
      employeeRef.current.style.height="100px";
      laptopRef.current.style.height="100px";
      employeeLaptopRef.current.style.height="100px";
      scanRef.current.style.height="100px";
      scanRef.current.style.backgroundColor='#929497';
      if(props.sUserName==props.userName&&props.sPassword==props.passwordd){
        scanRef.current.style.backgroundColor='#459d46';
        employeeRef.current.style.backgroundColor='white';
        laptopRef.current.style.backgroundColor='white';
        employeeLaptopRef.current.style.backgroundColor='white';
        employeeRef.current.style.height="100px";
        laptopRef.current.style.height="100px";
        employeeLaptopRef.current.style.height="100px";
        scanRef.current.style.height="100px";
      }
    }
    if(backGMain=='Employee Interface'){
      scanRef.current.style.backgroundColor='white';
      employeeRef.current.style.backgroundColor='#929497';
      employeeRef.current.style.height="100px";
      laptopRef.current.style.backgroundColor='white';
      employeeLaptopRef.current.style.backgroundColor='white';
      laptopRef.current.style.height="100px";
      employeeLaptopRef.current.style.height="100px";
      scanRef.current.style.height="100px";
      if(props.eUserName==props.userName&&props.ePassword==props.passwordd){
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
    }
    if(backGMain=='Laptop Interface'){
      scanRef.current.style.backgroundColor='white';
      employeeRef.current.style.backgroundColor='white';
      laptopRef.current.style.backgroundColor='#929497';
      employeeLaptopRef.current.style.backgroundColor='white';
      employeeRef.current.style.height="100px";
      laptopRef.current.style.height="100px";
      employeeLaptopRef.current.style.height="100px";
      scanRef.current.style.height="100px";
      if(props.lUserName==props.userName&&props.lPassword==props.passwordd){
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
    }
    if(backGMain=='Employee Laptop Interface'){
      scanRef.current.style.backgroundColor='white';
      employeeRef.current.style.backgroundColor='white';
      laptopRef.current.style.backgroundColor='white';
      employeeLaptopRef.current.style.backgroundColor='#929497';
      employeeRef.current.style.height="100px";
      laptopRef.current.style.height="100px";
      employeeLaptopRef.current.style.height="100px";
      scanRef.current.style.height="100px";
      if(props.elUserName==props.userName&&props.elPassword==props.passwordd){
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
    if(backGMain=='Admin Interface'){
      scanRef.current.style.backgroundColor='white';
      employeeRef.current.style.backgroundColor='white';
      laptopRef.current.style.backgroundColor='white';
      employeeLaptopRef.current.style.backgroundColor='white';
      employeeRef.current.style.height="100px";
      laptopRef.current.style.height="100px";
      employeeLaptopRef.current.style.height="100px";
      scanRef.current.style.height="100px";
      if(props.alUserName==props.userName&&props.alPassword==props.passwordd){
        scanRef.current.style.backgroundColor='white';
        employeeRef.current.style.backgroundColor='white';
        laptopRef.current.style.backgroundColor='white';
        employeeLaptopRef.current.style.backgroundColor='white';
        employeeRef.current.style.height="100px";
        laptopRef.current.style.height="100px";
        employeeLaptopRef.current.style.height="100px";
        scanRef.current.style.height="100px";
        adminRef.current.style.backgroundColor="#459d46" 
      }
    }
  }
  const correctActiver=()=>{
    if(props.active=="Employee Interface"){
      if( props.eUserName!=undefined||props. ePassword!=undefined?props.eUserName==userName&&props. ePassword==passwordd:null){
        setActive("Employee Interface"); 
        // setStatuss("employee");
        
      }
      setActive("Employee Interface"); }
      if(props.active=="Laptop Interface"){
     if(props.lUserName!=undefined||props. lPassword!=undefined?props.lUserName==userName&&props. lPassword==passwordd:null){
        setActive("Laptop Interface");
        // setStatuss("laptop");
      }}
      
      if(props.active=="Employee Laptop Interface"){
       if(props.elUserName!=undefined||props. elPassword!=undefined?props.elUserName==userName&&props. elPassword==passwordd:null){
        setActive("Employee Laptop Interface");
        // setStatuss("employeelaptop");
      }}
      if(props.active=="Scan Interface"){
      if(props.sUserName!=undefined||props. sPassword!=undefined?props.sUserName==userName&&props. sPassword==passwordd:null){
        setActive("Scan Interface");
        // setStatuss("scan");
      }}  if(props.active=="Admin Interface"){
     if(props.aUserName!=undefined||props. aPassword!=undefined?props.aUserName==userName&&props. aPassword==passwordd:null){
        setActive("Admin Interface");
        // setStatuss("admin");
        // setIsAdminFirst("Admin Interface");
      }}
 }
 
  
  // const userr=()=>{
  //   props.login(userName,passwordd);  
  // }
  {/**send second active button to parent component */}
  const secondActiveToParent=()=>{
      if(active=="Employee Interface")
    props.secondActiveButton(activeEmployee);
    if(active=="Laptop Interface")
    props.secondActiveButton(activeLaptop)
    if(active=="Employee Laptop Interface")
    props.secondActiveButton(activeEL)
  }
  const setAdmin=()=>{
    setActive("Admin Interface");
  }
  const setEmployee=()=>{
    setActive("Employee Interface");
  }
  const setLaptop=()=>{
    setActive("Laptop Interface");
  }
  const setEmployeeLaptop=()=>{
    setActive("Employee Laptop Interface");
  }
  const setScan=()=>{
    setActive("Scan Interface");
  }
  const onClickA=()=>{
     setAdmin();
    onClickAa();
  }
  const onClickE=()=>{
    setEmployee();
   onClickAa();
   secondActiveToParent(); 
   // userr(); 
 }
  const onClickAa=()=>{
    props.onClickButton(active); 
   
  }
  useEffect(()=>{
   
  },[])
  return(
    <>
      <div className='navSideBar'>
      <div>
     <input hidden value="login" ref={inputlog}></input>
        </div>
       <nav >
          <img  hidden={props.active=="login"?true:false}src="IPDCimg.jpg" alt='ipdcimg' id='ipdcimg' />
          <p> empl - {activeEmployee} props.active - {props.active}  a- {active}</p>
      
          {/* sider bar button of the Admin */}
          <button 
            hidden={props.active=="Admin Interface"||props.isAdminFirst=="Admin Interface"?false:true}
            ref={adminRef}
            className="btnSideBar" 
            onClick={()=>{setAdmin(); onClickA() }}
            >
            Admin
          </button>
          {/* sider bar button of the employee */}
          <button 
            ref={employeeRef}
            className="btnSideBar" 
            title='Employee interface'
            id="first" 
            onClick={()=>{ onClickE();}}
            hidden={props.active=="Employee Interface"||props.isAdminFirst=="Admin Interface"||props.active=="Admin Interface"?false:true}
            >
            Employee Information ▼	
            {/* inside employee button there is other 3 buttons */}
            <div
              //  hidden={ active=="Employee Interface"&&emp.username==userName&&emp.passwordd==passwordd?false:true}
              >
              <nav hidden={props.active=="Employee Interface"&&props.eUserName==props.userName&&props.ePassword==props.passwordd?false:true}>
                <button  
                  style={activeEmployee=="Active Employee Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn"
                  onClick={()=>{setActiveEmployee("Active Employee Interface");}}
                  >
                  Active Employee
                </button>
                <button 
                  style={activeEmployee=="Not Active Employee Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn"
                  onClick={()=>{setActiveEmployee("Not Active Employee Interface");}}
                  >
                  Deactive Employee
                </button>
                <button 
                  style={activeEmployee=="New Employee Registration"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn"
                  onClick={()=>{setActiveEmployee("New Employee Registration");}}
                  >
                 New
                </button>
              </nav>
            </div>
          </button>
          {/* sider bar button of the laptop */}
          <button 
            ref={laptopRef}
            className="btnSideBar" 
            id="second" 
            onClick={()=>{ setActive("Laptop Interface");styleBG("Laptop Interface")  }}
            hidden={props.active=="Laptop Interface"||props.isAdminFirst=="Admin Interface"||props.active=="Admin Interface"?false:true}
            >
            Laptop Information ▼	
            <div
              //   hidden={ active=="Laptop Interface"&&lap.username==userName&&lap.passwordd==passwordd?false:true}
              >
              <nav  hidden={props.active=="Laptop Interface"&&props.lUserName==props.userName&&props.lPassword==props.passwordd?false:true}>
                <button 
                  style={activeLaptop=="Free Laptop Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn"  
                  onClick={()=>setActiveLaptop("Free Laptop Interface")}
                  >Free Device
                </button>
                <button  
                  style={activeLaptop=="Assigned Laptop Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn" 
                  onClick={()=>setActiveLaptop("Assigned Laptop Interface")}
                  >Assigned Device
                </button>
                <button
                  style={activeLaptop=="New Laptop Registration"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn" 
                  onClick={()=>setActiveLaptop("New Laptop Registration")}
                  >New
                </button>
              </nav>
            </div>
          </button>
          {/* sider bar button of the employee laptop */}
          <button 
            hidden={props.active=="Employee Laptop Interface"||props.isAdminFirst=="Admin Interface"||props.active=="Admin Interface"?false:true}
            ref={employeeLaptopRef}
            className="btnSideBar" 
            onClick={()=>{ setActive("Employee Laptop Interface");styleBG("Employee Laptop Interface");  }}
            >
            Employee Laptop Association▼	
            <div  
              hidden={props.active=="Employee Laptop Interface"&&props.elUserName==props.userName&&props.elPassword==props.passwordd?false:true}>
              <nav className='navMainMenu' 
                style={{  marginTop: "-20px"}}>
                <button 
                  style={activeEL=="Main Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn" 
                  onClick={()=>setActiveEL("Main Interface")}
                  >Main Menu
                </button>          
                <button
                  style={activeEL=="Employee Laptop Assignment Intrface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn" 
                  onClick={()=>{setActiveEL("Employee Laptop Assignment Intrface")}}
                  >Employee Laptop Association
                </button> 
              </nav>
            </div>
          </button>
          {/* sider bar button of the scan */}
          <button 
            hidden={props.active=="Scan Interface"||props.isAdminFirst=="Admin Interface"||props.active=="Admin Interface"?false:true}
            ref={scanRef}
            className="btnSideBar" 
            onClick={()=>{ setActive("Scan Interface");  styleBG("Scan Interface") }} >  
            scanner
          </button> 
        </nav>
        {styleBG(props.active)}
    
        
      </div>
    </>
  )
}
    {/*  when employee button click*/}
//   const onClicksEmp=()=>{
//   if(active=="Employee Interface"){
//     // setUserName(emp.userName); setPasswordd(emp.passwordd)
    
//   }
//   else if(active!="Employee Interface"){
//   setUserName(""); setPasswordd("")
//   setActive("Employee Interface");
//   styleBG("Employee Interface");
// }
//   }
   {/* when admin button click*/}
//   const onClicksAdmin=()=>{
//   if(active=="Admin Interface"){
  
//     setActive("Admin Interface");
//   }
//   else if(active!="Admin Interface"){

//   setActive("Admin Interface");
//   styleBG("Admin Interface");
// }
//   }
   {/* when laptop button click */}
//   const onClicksLap=()=>{
//   if(active=="Laptop Interface"){
//     // setUserName(emp.userName); setPasswordd(emp.passwordd)
    
//   }
//   else if(active!="Laptop Interface"){
//   setUserName(""); setPasswordd("")
//   setActive("Laptop Interface");
//   styleBG("Laptop Interface");
// }
//   }
   {/* when employee laptop button click */}
//   const onClicksEmpLap=()=>{
//   if(active=="Employee Laptop Interface"){
//     // setUserName(emp.userName); setPasswordd(emp.passwordd)
    
//   }
//   else if(active!="Employee Laptop Interface"){
//   setUserName(""); setPasswordd("")
//   setActive("Employee Laptop Interface");
//   styleBG("Employee Laptop Interface");
// }

//   }
export default SideBarButtons;