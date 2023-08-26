






import QRCode from 'qrcode';
import React, {useState, useEffect} from 'react';
function QRImg({text}) {
  const [imgqr,setImgqr]=useState();
  useEffect(()=>{
    QRCode.toDataURL(text).then((data)=>{
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
