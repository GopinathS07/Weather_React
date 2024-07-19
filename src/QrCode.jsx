import { useState } from "react"
import './QrCode.css'

export const QrCode = () => {
    async function generateQR(){
         setLoading(true);
         try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
         }catch(error){
            console.error("Error Generating QR Code",error);
         }finally{
            setLoading(false);
         }
    }
    function downloadQR(){
        fetch(img).then((response)=> response.blob())
        .then((blob)=>{const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="QR_Code.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    const [img,setImg] = useState("");
    const[loading,setLoading]=useState(false);
    const [qrData,setqrData] = useState("");
    const [qrSize,setqrSize] = useState("150");
  return (
    <div className="app-container">
            <h1>QR Code Generator</h1>
            {loading && <p>Please Wait...</p>}
            {img && <img src={img} alt="" srcset="" className="qr-code-image"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">Data for QR Code</label>
            <input type="text" name="" placeholder="Enter data for QR Code" id="dataInput" value={qrData} onChange={(e) => setqrData(e.target.value)}/>
            <label htmlFor="sizeInput" className="input-label">Image Size (e.g., 150):</label>
            <input type="text" name="" placeholder="Enter image size" id="sizeInput" value={qrSize} onChange={(e) => setqrSize(e.target.value)}/>
            <button className="generate-btn" disabled={loading} onClick={()=> generateQR()}>Generate QR Code</button>
            <button className="download-btn" onClick={()=>downloadQR()}>Download QR Code</button>
        </div>
        <p className="footer">Designed by <a href="http://react.dev">Gopi ♥ Janani</a></p>
    </div>
  )
}
