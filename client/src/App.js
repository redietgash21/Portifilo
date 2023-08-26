/*import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";*/



import EmployeeLaptopAssociation from './EmployeeLaptopAssociation';
import MainMenu from './MainMenu';
import React , {useState, useRef,useEffect} from 'react';
import './App.css';
import  Axios  from 'axios';
import EmployeeList from './EmployeeList';
import ScanInfo from './ScanInfo';
import EditEmployee from './EditEmployee';
import LaptopList from './LaptopList';
import NewLaptopTab from './NewLaptopTab';
import AdminInterface from './AdminInterface';
import Login from './Login';
import SideBarButtons from './SideBarButtons';
function App() {


  // check if someone already logged in

  

  // end of session
  const [isAdminFirst,setIsAdminFirst]=useState("");
  const employeeRef=useRef();
    const adminRef=useRef();
    const laptopRef=useRef();
    const employeeLaptopRef=useRef();
    const scanRef=useRef();
  const [admin,setAdmin]=useState([]);
  const [adminn,setAdminn]=useState("");
  const [empLap,setEmpLap]=useState([]); 
  const [emp,setEmp]=useState([]); 
  const [lap,setLap]=useState([]); 
  const [scan,setScan]=useState([]); 
  const [userName, setUserName]=useState("username");
  const [passwordd, setPasswordd]=useState(); 
  const [active,setActive]=useState("login");
  const [statuss,setStatuss] =useState("");
  const [activeEmployee,setActiveEmployee]=useState("New Employee Registration");
  const [activeLaptop,setActiveLaptop]=useState("New Laptop Registration");
  const [activeEL,setActiveEL]=useState("Employee Laptop Assignment Intrface");
  // Axios.defaults.withCredentials = true;
  {/* to get password and user name from database*/}
  const displayAll=()=>{
    Axios.get("http://localhost:3001/displayLogin").then(response=>{
      setAdmin(response.data[0]);
      setEmp(response.data[1]);
      setLap(response.data[3]);
      setEmpLap(response.data[2]);
      setScan(response.data[4]);
     });
  }

  // to distingush the active menu by change background color to green
  const styleBG=(backGMain,backGInternal)=>{
    if(backGMain=='Admin Interface'){
      adminRef.current.style.backgroundColor='#459d46';
      adminRef.current.style.height="75px";
    }
    if(backGMain=='Scan Interface'){
      adminRef.current.style.backgroundColor='white';
      adminRef.current.style.height="75px";
      scanRef.current.style.height="75px";
      scanRef.current.style.backgroundColor='#459d46';
    }
    if(backGMain=='Employee Interface'){
      employeeRef.current.style.backgroundColor='#459d46';
      employeeRef.current.style.height="175px";
      adminRef.current.style.backgroundColor='white';
      adminRef.current.style.height="75px";
    }
    if(backGMain=='Laptop Interface'){
      laptopRef.current.style.backgroundColor='#459d46';
      laptopRef.current.style.height="175px";
      adminRef.current.style.backgroundColor='white';
      adminRef.current.style.height="75px";
    }
    if(backGMain=='Employee Laptop Interface'){
      employeeLaptopRef.current.style.backgroundColor='#459d46';
      employeeLaptopRef.current.style.height="150px";
      adminRef.current.style.backgroundColor='white';
      adminRef.current.style.height="75px";   
    }
  }
    // {/**if admin is first set active to admin interface when the button clicked*/}
  const adminClickedFirst=()=>{
    if(isAdminFirst=="Admin Interface"){
      if(active=="Employee Interface"||active=="Laptop Interface"||active=="Employee Laptop Interface"||active=="Scan Interface"){
       setActive("Admin Interface");
      }
    }
  }
  {/* when username and password is correct to pass to the interface */}
  const correctActive=()=>{
    if(active=="login"){
      if(emp!=undefined?emp.username==userName&&emp.passwordd==passwordd:null){
        setActive("Employee Interface"); 
        setStatuss("employee");
        
      }
      else if(lap!=undefined?lap.username==userName&&lap.passwordd==passwordd:null){
        setActive("Laptop Interface");
        setStatuss("laptop");
      }
      else if(empLap!=undefined?empLap.username==userName&&empLap.passwordd==passwordd:null){
        setActive("Employee Laptop Interface");
        setStatuss("employeelaptop");
      }
      else if(scan!=undefined?scan.username==userName&&scan.passwordd==passwordd:null){
        setActive("Scan Interface");
        setStatuss("scan");
      }
      else if(admin!=undefined?admin.username==userName&&admin.passwordd==passwordd:null){
        setActive("Admin Interface");
        setStatuss("admin");
        setIsAdminFirst("Admin Interface");
      }
    }
    else if(adminn=="Admin Interface"){
      setActive("Admin Interface");
    }
  }

  const adminButtonClicked=()=>{
 
    setAdminn("Admin Interface")
  
}
  {/* to receive the username and password from child component*/}
  const userNameAndPasswordFromChild=(userName,passwordd)=>{
    setUserName(userName);
    // alert("hxbfgszh "+userName)
    setPasswordd(passwordd);
  //  activee=active;
  }
  {/* to receive the active value from child component*/}
  const activeFromChild=(active)=>{
    setActive(active);
  }
  {/* to receive the second active after it know the active value from child component*/}
  const SecondActiveFromChild=(activee)=>{
    if(active=="Employee Interface")
    setActiveEmployee(activee);
    else if(active=="Laptop Interface")
    setActiveLaptop(activee);
    else if(active=="Employee Laptop Interface")
    setActiveEL(activee);
  }
  useEffect(()=>{
   displayAll();
  //  Axios.get("http://localhost:3001/insertIntoUserName").then((response)=>{console.log(response)});
  },[])
  return (
    <>
      {/* <=====================the main div consist the side bar and the body part===========>*/}
      <div className='main100'>
       
        {active=="login"&& 
        <Login 
          login={userNameAndPasswordFromChild} 
          correctActive={activeFromChild} 
          active={active} 
          statuss={statuss}
        />} 
        {/* the side bar div */}
        <div className='navSideBar'>
          
          <div className='navSideBar'>
          <nav >
          <img src="IPDCimg.jpg" alt='ipdcimg' id='ipdcimg' />
          {active}  u  {userName}   p{passwordd}
          {/* sider bar button of the Admin */}
          <button 
           style={active=="Admin Interface"?{  height: "75px", backgroundColor: "#459d46"}:{}}
            hidden={isAdminFirst=="Admin Interface"||active=="Admin Interface"?false:true}
            ref={adminRef}
            className="btnSideBar" 
            onClick={()=>{setActive("Admin Interface");setUserName(admin.username);setPasswordd(admin.passwordd);styleBG("Admin Interface","hjbjh")}}
            >
            Admin
          </button>
          {/* sider bar button of the employee */}
          <button 
          style={active=="Employee Interface"?{  height: "175px", backgroundColor: "#459d46"}:{}}
            ref={employeeRef}
            className="btnSideBar" 
            id="first"
            hidden={active=="Employee Interface"||isAdminFirst=="Admin Interface"?false:true} 
            onClick={()=>{setActive("Employee Interface");setUserName(emp.username);setPasswordd(emp.passwordd);styleBG("Employee Interface","hjbjh")}}>
            Employee Information
            <div hidden={ active=="Employee Interface"?false:true}>
              <nav >
                <button  
                  style={activeEmployee=="Active Employee Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}  
                  className="btnSideBarn" onClick={()=>{setActiveEmployee("Active Employee Interface");styleBG("Active Employee Interface")}}>
                  Active Employee
                </button>
                <button 
                  style={activeEmployee=="Not Active Employee Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}  className="btnSideBarn"onClick={()=>{setActiveEmployee("Not Active Employee Interface");styleBG("Not Active Employee Interface")}}>
                  Deactive Employee
                </button>
                <button 
                  style={activeEmployee=="New Employee Registration"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}} className="btnSideBarn"onClick={()=>{setActiveEmployee("New Employee Registration");styleBG("New Employee Registration")}}>
                New
                </button>
              </nav>
              
            </div>
          </button>
          {/* sider bar button of the laptop */}
          <button 
           style={active=="Laptop Interface"?{  height: "175px", backgroundColor: "#459d46"}:{}}
            hidden={active=="Laptop Interface"||isAdminFirst=="Admin Interface"?false:true}
            ref={laptopRef}
            className="btnSideBar" 
            id="second" 
            onClick={()=>{setActive("Laptop Interface");setUserName(lap.username);setPasswordd(lap.passwordd);styleBG("Laptop Interface","hjbjh")}}>
            Laptop Information
            <div  hidden={ active=="Laptop Interface"?false:true}>
              <nav >
                <button 
                  style={activeLaptop=="Free Laptop Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}
                  className="btnSideBarn"  onClick={()=>{setActiveLaptop("Free Laptop Interface");styleBG("Free Laptop Interface")}}>Free Device
                </button>
                <button  style={activeLaptop=="Assigned Laptop Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}} className="btnSideBarn" onClick={()=>{setActiveLaptop("Assigned Laptop Interface");styleBG("Assigned Laptop Interface")}}>Assigned Device</button>
                
                <button  style={activeLaptop=="New Laptop Registration"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}className="btnSideBarn" onClick={()=>{setActiveLaptop("New Laptop Registration");styleBG("New Laptop Registration")}}>New</button>
              </nav>
            </div>
          </button>
          {/* sider bar button of the employee laptop */}
          <button 
           style={active=="Employee Laptop Interface"?{  height: "150px", backgroundColor: "#459d46"}:{}}
            hidden={active=="Employee Laptop Interface"||isAdminFirst=="Admin Interface"?false:true}
            ref={employeeLaptopRef}
            className="btnSideBar" 
            onClick={()=>{setActive("Employee Laptop Interface");setUserName(empLap.username);setPasswordd(empLap.passwordd);styleBG("Employee Laptop Interface")}}>
            Employee Laptop Association  
            <div  hidden={ active=="Employee Laptop Interface"?false:true}>
              <nav className='navMainMenu' style={{  marginTop: "-20px"}}>
                <button style={activeEL=="Main Interface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}}className="btnSideBarn" onClick={()=>{setActiveEL("Main Interface");styleBG("Main Interface")}}>Main Menu</button>          
                <button style={activeEL=="Employee Laptop Assignment Intrface"?{  boxShadow: "25px 35px 55px  #459d46 inset, 5px 5px 10px  #459d46" }:{}} className="btnSideBarn" onClick={()=>{setActiveEL("Employee Laptop Assignment Intrface");styleBG("Employee Laptop Assignment Intrface")}}>Employee Laptop Association</button> 
              </nav>
            </div>
          </button>
          {/* sider bar button of the scan */}
          <button 
           style={active=="Scan Interface"?{  height: "75px", backgroundColor: "#459d46"}:{}}
            hidden={active=="Scan Interface"||isAdminFirst=="Admin Interface"?false:true}
            ref={scanRef}
            className="btnSideBar" 
            onClick={()=>{setActive("Scan Interface",true);setUserName(scan.username);setPasswordd(scan.passwordd);styleBG("Scan Interface")}}>
            scanner
          </button>
          {/* <div className='animationMenuMain startMenuMain'></div> */}
          </nav>
        </div>
        </div>
     
        {/* the body part div */}
        <div 
         className='main82' 
         hidden={active=="login"?true:false}
        //  hidden={empLap!=undefined&&emp!=undefined&&lap!=undefined&&scan!=undefined&&admin!=undefined?emp.username==userName&&emp.passwordd==passwordd||lap.username==userName&&lap.passwordd==passwordd||empLap.username==userName&&empLap.passwordd==passwordd||scan.username==userName&&scan.passwordd==passwordd||admin.username==userName&&admin.passwordd==passwordd?false:true:null}
         >
         {/* the div that implies the user in which interface is  */}
          <div className='menuList'>
            <span className='span' >{isAdminFirst}</span>
            <span className='span' 
              hidden={isAdminFirst=="Admin Interface"?active=="Employee Interface"||active=="Laptop Interface"||active=="Employee Laptop Interface"||active=="Scan Interface"?false:true:true}
              >{"<<"}
            </span>
            <span className='span'  hidden={active=="Admin Interface"?true:false}>{active}</span>
            <span className='span'   hidden={active=="Admin Interface"||active=="Scan Interface"?true:false}>{"<<"}</span>
            <span className='span' hidden={active=="Employee Interface"&&emp.username==userName&&emp.passwordd==passwordd?false:true}>{activeEmployee}</span>
            <span className='span'  hidden={active=="Laptop Interface"&&lap.username==userName&&lap.passwordd==passwordd?false:true}>{activeLaptop}</span>
            <span className='span'  hidden={active=="Employee Laptop Interface"&&empLap.username==userName&&empLap.passwordd==passwordd?false:true}>{activeEL}</span>
          </div>
         {/* the body div  */}
          <div 
         
          >
            <div 
             hidden={isAdminFirst!="Admin Interface"&&(active==" Interface"&&emp.usernamee==userName&&emp.passworddd==passwordd)||(active=="Employee Interface"&&emp.username==userName&&emp.passwordd==passwordd)||(active=="Scan Interface"&&scan.username==userName&&scan.passwordd==passwordd)||(active=="Laptop Interface"&&lap.username==userName&&lap.passwordd==passwordd)||(active=="Employee Laptop Interface"&&empLap.username==userName&&empLap.passwordd==passwordd)?true:false}
            >
          { 
           <AdminInterface 
              login={userNameAndPasswordFromChild} 
              correctActive={activeFromChild} 
              active={active}
              eUserName={emp.username} 
              ePassword={emp. passwordd} 
              lUserName={lap.username} 
              lPassword={lap.passwordd} 
              elUserName={empLap.username} 
              elPassword={empLap.passwordd} 
              sUserName={scan.username} 
              sPassword={scan.passwordd} 
              aUserName={admin.username} 
              aPassword={admin.passwordd} 
            />
          }  </div>
          {/* <div>
          { active=="Employee Interface" && emp.username!=userName&&emp.passwordd!=passwordd && 
           <Login 
             login={userNameAndPasswordFromChild} 
             correctActive={activeFromChild} 
             active={active}
            />
          } </div> */}
          <div 
            hidden={(active=="Employee Interface"||isAdminFirst=="Admin Interface")&&emp.username==userName&&emp.passwordd==passwordd?    false:true}>
            
            {activeEmployee==="New Employee Registration" && <EditEmployee taskType= "New"/>} 
          {activeEmployee==="Active Employee Interface" && <EmployeeList taskType = "activee"/>}
          {activeEmployee==="Not Active Employee Interface" && <EmployeeList taskType = "deactive"/>}
          </div>
          {/* {active=="Laptop Interface" && lap.username!=userName&&lap.passwordd!=passwordd  && <Login login={userNameAndPasswordFromChild} correctActive={activeFromChild} active={active}/>}  */}
          <div hidden={(active=="Laptop Interface"||isAdminFirst=="Admin Interface")&&lap.username==userName&&lap.passwordd==passwordd?false:true}>
          {activeLaptop==="Free Laptop Interface" && <LaptopList taskType="free"/>}
          {activeLaptop==="Assigned Laptop Interface" && <LaptopList taskType="assigned"/>}
          {activeLaptop==="New Laptop Registration" && <NewLaptopTab taskType="New"/>}
          </div>
          {/* {active=="Employee Laptop Interface" && empLap.username!=userName&&empLap.passwordd!=passwordd && <Login login={userNameAndPasswordFromChild} correctActive={activeFromChild} active={active}/>}  */}
          <div hidden={(isAdminFirst=="Admin Interface"||active=="Employee Laptop Interface")&&empLap.username==userName&&empLap.passwordd==passwordd?false:true}>
          {activeEL==="Main Interface" &&<MainMenu/>}      
          {activeEL==="Employee Laptop Assignment Intrface" && <EmployeeLaptopAssociation taskType="New" />} 
          </div>
          {/* {active=="Scan Interface" && scan.username!=userName&&scan.passwordd!=passwordd && <Login login={userNameAndPasswordFromChild} correctActive={activeFromChild} active={active}/> }  */}
          <div hidden={(active=="Scan Interface"||isAdminFirst=="Admin Interface")&&scan.username==userName&&scan.passwordd==passwordd?false:true}>
            { <ScanInfo/>} 
          </div>
        
          {correctActive()}
          {styleBG(active)}
         
          </div>
        </div>
        
      </div>
    </>
  );
}
// const toEmployeeInterface=()=>{
   
//   if(emp.username==userName&&emp.passwordd==passwordd){
//  // props.employeeRef();
//         alert("employee interface")
//   }
//   if(lap.username==userName&&lap.passwordd==passwordd){
//    alert("laptop interface")
// }
// if(empLap.username==userName&&empLap.passwordd==passwordd){
// alert("employee laptop interface")
// }
// if(scan.username==userName&&scan.passwordd==passwordd){
// alert("scan interface")
// }
// }


 
  {/* */}
//  const onClicks=()=>{
//   if(active=="Employee Interface"||active=="Laptop Interface"){
//     // setUserName(emp.userName); setPasswordd(emp.passwordd)
    
//   }
//   else if(active!="Employee Interface"){
//   setUserName(""); setPasswordd("")
//   setActive("Employee Interface");
//   styleBG("Employee Interface");
// }

// alert(userName+"  "+passwordd)
//  }
export default App;
