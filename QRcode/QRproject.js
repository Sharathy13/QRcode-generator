import React from 'react'
import { useState } from 'react';

export const QRproject = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [qrcode,setqrcode]=useState("");
  const [qrsize,setqrsize]=useState(150);

  async function generateQR(){
    setLoading(true)
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrcode)}`;
      setImg(url);

    }
    catch(error){
      console.error("Error generatng QR code",error);
    }

    finally{
      setLoading(false);
    }
    
  }

  return (
    <div className='app-container'>
      <h1>QR Code Generator</h1>
      {loading && <p>Please wait...</p>}
        {img && <img src={img} alt='qrcode' className='QRimage'></img>}
        <div>
            <label htmlFor="dataInput" className='input-label'>
                Data for QR code:
            </label>
            <input type='text' id='dataInput' placeholder='Enter data for QR code'value={qrcode}onChange={(e)=>setqrcode(e.target.value)}></input>
            <label htmlFor="sizeInput" className='input-label'>
                Image size(e.g., 150)
            </label>
            <input type='text' id='sizeInput'placeholder='Enter image size' value={qrsize} onChange={(e)=>setqrsize(e.target.value)}></input>
            <button className='generatebutton'disabled={loading} onClick={generateQR} >Generate QR code</button>
            
        </div>
        
        <p className='footer'>Designed by Sharathy Kabilan</p>

  

    </div>
  )
}
