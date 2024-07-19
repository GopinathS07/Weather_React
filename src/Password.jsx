import {useState} from 'react'
import './Password.css'

export const Password = () => {
    const [length,setLength]=useState(8);
    const [includeUppercase,setIncludeUppercase] = useState(true);
    const [includeLowercase,setIncludeLowercase] = useState(true);
    const [includeNumbers,setIncludeNumbers] = useState(true);
    const [includeSymbol,setIncludeSymbol] = useState(true);
    const [password,setPassword] = useState("");

    const generatePassword = ()=>{
        let charset="";
        if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "0123456789";
        if (includeSymbol) charset += "!@#$%^&*()_+=-";
        let generatePassword="";
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()*charset.length);
            generatePassword +=charset[randomIndex];
        }
        setPassword(generatePassword);
    };

    const copyToclipboard=()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied");
    }

  return (
    <>
    <div className='password-generator'>
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length:</label>
            <input type="number" id="num" value={length} 
            onChange={(e)=>{setLength(parseInt(e.target.value))}} />
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="upper" checked={includeUppercase}
        onChange={(e)=>{setIncludeUppercase(e.target.checked)}} />
        <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="lower" checked={includeLowercase}
        onChange={(e)=>{setIncludeLowercase(e.target.checked)}} />
        <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="numbers" checked={includeNumbers}
        onChange={(e)=>{setIncludeNumbers(e.target.checked)}} />
        <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
        <input type="checkbox" id="symbol" checked={includeSymbol}
        onChange={(e)=>{setIncludeSymbol(e.target.checked)}} />
        <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
        <div className="generated-password">
            <input type="text"readOnly value={password}/>
            <button className='copy-btn' onClick={copyToclipboard} >Copy</button>
        </div>
        <p className="copyright">Designed by <span>Gopi ♥ Janani</span></p>
    </div>
    </>
  )
}
