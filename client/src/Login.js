





import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import { propTypes } from 'react-qr-scanner';
// import Parse from 'parse/dist/parse.min.js';

const Login = (props) => {
  const [userNamee, setUserName] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [login, setLogin] = useState("");
  const inputlog = useRef();
  const [admin, setAdmin] = useState([]);
  const [empLap, setEmpLap] = useState([]);
  const [emp, setEmp] = useState([]);
  const [lap, setLap] = useState([]);
  const [scan, setScan] = useState([]);
  const inputUserName = useRef();
  const inputPassword = useRef();
  // // Function that will return current user and also update current username
  // const getCurrentUser = async function () {
  //   const currentUser = await Parse.User.current();
  //   // Update state variable holding current user
  //   setCurrentUser(currentUser);
  //   return currentUser;
  // };
  {/** assigne or change user name and password for all UI except admin */ }
  const insertToUserName = () => {

    if (userNamee.length >= 6 && passwordd.length >= 6) {
      if (props.active == "Scan Interface" && props.sUserName != null && props.sPassword != null) {
        if (inputUserName.current.value != props.sUserName)
          alert("username can not be changed");
        else {
          insertIntoUserNameTable();
          alert("update scan password");
        }
      }
      else if (props.active == "Scan Interface" && props.sUserName == null && props.sPassword == null) {
        insertIntoUserNameTable();
        alert("assigned scan");
      }
      if (props.active == "Employee Interface" && props.eUserName != null && props.ePassword != null) {
        if (inputUserName.current.value != props.eUserName) {
          alert("username can not be changed");
        }
        else {
          insertIntoUserNameTable();
          alert("update employee password");
        }
      }
      else if (props.active == "Employee Interface" && props.eUserName == null && props.ePassword == null) {

        alert("assigned employee");

        insertIntoUserNameTable();

      }
      if (props.active == "Laptop Interface" && props.lUserName != null && props.lPassword != null) {
        if (inputUserName.current.value != props.lUserName) {
          alert("username can not be changed");
        }
        else {
          insertIntoUserNameTable();
          alert("update laptop password");
        }
      }
      else if (props.active == "Laptop Interface" && props.lUserName == null && props.lPassword == null) {
        alert("assigned lap");
        insertIntoUserNameTable();

      }
      if (props.active == "Employee Laptop Interface" && props.elUserName != null && props.elPassword != null) {
        if (inputUserName.current.value != props.elUserName) {
          alert("username can not be changed");
        }
        else {
          insertIntoUserNameTable();
          alert("update employee laptop password");
        }
      }
      else if (props.active == "Employee Laptop Interface" && props.elUserName == null && props.elPassword == null) {
        alert("assigned emp lap");
        insertIntoUserNameTable();

      }
    }
    else {
      alert("enter minimum of 6 length");
    }
  }
  const readOnlyIf = (read) => {
    if (read == false) {
      if (props.taskType == "Scan" && props.sUserName != null) {
        setIsReadOnly(true);
      }
      if (props.taskType == "Emp" && props.eUserName != null) {
        setIsReadOnly(true);
      }

      if (props.taskType == "Lap" && props.lUserName != null) {
        setIsReadOnly(true);
      }

      if (props.taskType == "EmpLap" && props.elUserName != null) {
        setIsReadOnly(true);
      }
    }
  }
  {/** inset the user name and password to databse*/ }
  const insertIntoUserNameTable = () => {
    Axios.post("http://localhost:3001/login", {
      userName: userNamee,
      passwordd: passwordd,
      statuss: props.statuss
    }).then((response) => {
    }).catch((err) => {
      console.log('err', err);
    });

  }
  const setLoginn = () => {
    setLogin("login");
  }
  const thelog = () => {
    if (props.theLog != undefined)
      props.theLog(inputlog.current.value);
  }
  const userr = () => {
    props.login(userNamee, passwordd);
  }
  const activeToParent = () => {
    props.correctActive(props.active)
  }
  const loginn = () => {
    thelog();
    setLoginn();
    activeToParent();
    userr();
  }

  const displayAll = () => {
    Axios.get("http://localhost:3001/displayLogin").then(response => {
      setAdmin(response.data[0]);
      setEmp(response.data[1]);
      setLap(response.data[3]);
      setEmpLap(response.data[2]);
      setScan(response.data[4]);
      // response.data.map(res=>{

      //   {console.log("Img path : ",res.imagePath)}
      // })
    });
  }


  useEffect(() => {

    displayAll();
    if (props.taskType == "Emp") {
      if (props.eUserName != null) {
        setUserName(props.eUserName);
      }

    }
    else if (props.taskType == "Lap") {
      if (props.lUserName != null) {
        setUserName(props.lUserName);
      }

    }
    else if (props.taskType == "EmpLap") {
      if (props.elUserName != null) {
        setUserName(props.elUserName);
      }

    }
    else if (props.taskType == "Scan") {
      if (props.sUserName != null) {
        setUserName(props.sUserName);
      }

    }
    else {
      setUserName("");
    }
  }, [])
  return (
    <>
      <div style={{ backgroundColor: "#459d46" }}>
        <div>
          <p>{props.active}</p>
          <input hidden value="login" ref={inputlog}></input>
        </div>
        <div className="loginDiv" id="EInfoo"

        >
          <form >

            <input className='login' ref={inputUserName}
              onChange={(event) => { setUserName(event.target.value.replace(/\s+/g, '')); setLogin("") }}
              type="text" readOnly={isReadOnly == true ? true : false} placeholder='user name' maxLength={6} value={userNamee}
            //  readOnly={admin!=undefined||emp!=undefined||empLap!=undefined||lap!=undefined||scan!=undefined?true:false}
            ></input><br></br>


            <input type="text" ref={inputPassword} className='login' onChange={(event) => { setPasswordd(event.target.value.replace(/\s+/g, '')); setLogin("") }} placeholder='password'></input><br></br>
            <br></br>
            <label className='login'
              //  hidden={props.active=="login"?false:true}
              onClick={() => { loginn(); }}
            >Log in</label>
            <button hidden={props.active == "login" ? true : false} className='login'
              onClick={insertToUserName}
            >Update</button><br></br>
          </form>
        </div>
        {readOnlyIf(isReadOnly)}
      </div>
    </>
  );

}
export default Login;