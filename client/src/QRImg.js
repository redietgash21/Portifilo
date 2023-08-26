






import QRCode from 'qrcode';
import React, {useState, useEffect} from 'react';
function QRImg() {
  const [imgqr,setImgqr]=useState();
  useEffect(()=>{
    QRCode.toDataURL("cdr45").then((data)=>{
      setImgqr(data);
    });
  },[]);

  return (
    <div>
      <img src={imgqr}/>
    </div>
  );
}

export default QRImg;
