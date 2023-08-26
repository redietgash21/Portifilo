





import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import { propTypes } from 'react-qr-scanner';
import QRImg from './QRImg';
const ScanInfo = () => {

  const [display, setDisplay] = useState(
    {
      firstName: "", lastName: "", department: "", phoneNumber: "", id: "", serialNumber: "", productName: "", imagePath: "", employeeStatus: ""
    });
  const [displayy, setDisplayy] = useState();
  const [remark, setRemark] = useState("pass");
  const [checked, setChecked] = useState(true);
  const inOrOut = "";
  const profileImg = "https://th.bing.com/th/id/OIP.S171c9HYsokHyCPs9brbPwHaGP?pid=ImgDet&rs=1";
  const inputtxt1 = useRef(null);
  const inputio = useRef(null);
  const inputSerialNumber = useRef(null);
  const insertInOrOut = () => {
    if (display != undefined && inputtxt1.current.value != '') {
      Axios.post("http://localhost:3001/insertInOrOut", {
        id: display.id,
        remark: remark,
        inOrOut: displayy,
        serialNumber: display.serialNumber
      }).then((response) => {

      }).catch((err) => {
        console.log('err', err);
      });
      alert("it is passed" + inputtxt1.current.value);

    }
    else if (inputtxt1.current.value == '') {
      alert("its id is null" + inputtxt1.current.value)
    }
    else {
      alert("it is incorrect" + inputtxt1.current.value)
    }
  };
  const displayInOrOut = (id, sn) => {
    Axios.post("http://localhost:3001/displayInOrOut", {
      id: id,
      serialNumber: sn
    }).then(response => {
      setDisplayy(response.data[0].inOrOut == "out" ? "in" : "out");
      console.log(response.data);
    });

  }
  const displayToCheckBox = (sn) => {
    Axios.post("http://localhost:3001/displayToCheckBox", {
      serialNumber: sn
    }).then(response => {
      if (response.data.length > 0) {
        setDisplay(response.data[0]);
        displayInOrOut(response.data[0].id, response.data[0].serialNumber);
      }
      else {
        setDisplay(undefined);
        setDisplayy(undefined);
      }
      console.log(response.data);
    });
  }
  useEffect(() => {
  }, [])
  return (
    <>
      <div className="navMainMenu" >
        <form >
          <input 
              autoFocus={true}
              className='inputscan'
              ref={inputSerialNumber}

              type="text"
              onChange={(event) => { displayToCheckBox(event.target.value); }}
            ></input><br></br>
          {/* <div>
           <QRImg/>
          </div> */}
          <div className="div50">
            {/* <label id="lblimg"> </label> */}
            
          </div>
          <div className="cont">

            <div className="img-holderscan">

              <img src={display != undefined ? "http://localhost:3001/Image/" + display.imagePath : profileImg} alt="" className="imgScan" />
            </div>

          </div><br></br>
          <label className="lbl">ID: </label>
          <input type="text" ref={inputtxt1} value={display != undefined ? display.id : "not found"}>
          </input><br></br>

          <label className="lbl">First Name: </label>
          <input type="text" id="firstName" value={display != undefined ? display.firstName : "not found"}></input><br></br>
          <label className="lbl">Last Name: </label>
          <input type="text" value={display != undefined ? display.lastName : "not found"}></input ><br></br>
          <label className="lbl">Department: </label>
          <input type="text" value={display != undefined ? display.department : "not found"}></input><br></br>
          <label className="lbl">Phone Number: </label>
          <input type="text" value={display != undefined ? display.phoneNumber : "not found"}></input><br></br>
          <label className="lbl">Employee status: </label>
          <input type="text" value={display != undefined ? display.employeeStatus : "not found"}></input><br></br>
          <label className="lbl">serial num</label>
          <input type="text" value={display != undefined ? display.serialNumber : "not found"}></input><br></br>
          <label className="lbl">inorout </label>
          <input type="text" ref={inputio} value={displayy ? displayy : ""} ></input><br></br>
          <label id="actlbl"><input id="act" type="checkbox"
            defaultChecked={inOrOut != "out" ? checked : () => setChecked(!checked)}
            onChange={() => {
              setChecked(!checked);
              //  if(checked==false)
              //  {setInOrOut("in");
              //  alert("the bool valu === "+checked+" inorout === "+inOrOut);
              //  } else if(checked==true&&inOrOut=="in")
              //   {setInOrOut("out");
              //   alert("the bool valu === "+checked+" inorout === "+inOrOut);
              //   } 
              //alert("ckeackede=== "+checkedE); 
            }
            }
          />
            <label id="inneractlbl">
              Remark
            </label>
          </label>
          <br></br>
          <textarea hidden={checked == true ? true : false} className='textArea' onChange={(event) => { setRemark(event.target.value); }}>
          </textarea>
          <button hidden={checked == true ? true : false} className="btnscan"  > cheacked</button>
          <button className="btns" onClick={insertInOrOut}> cheacked</button>

        </form>
      </div>
    </>
  );
}
export default ScanInfo;