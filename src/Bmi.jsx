import {useState} from 'react';
import './Bmi.css'

export const Bmi = () => {
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState(null);
    const [bmiStatus,setbmiStatus]=useState("");
    const [errorMessage,setErrorMessage]=useState("");
    const calculateBmi=()=>{
        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);

        if(isValidHeight && isValidWeight){
            const heightInMeters = height/100;
            const bmiValue = weight / (heightInMeters*heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if(bmiValue<18.5){
                setbmiStatus("Under Weight");
            }
            else if(bmiValue>=18.5 && bmiValue<24.9){
                setbmiStatus("Normal Weight");
            }
            else if(bmiValue>=24.9 && bmiValue<29.9){
                setbmiStatus("Over Weight");
            }
            else{
                setbmiStatus("Obese");
            }
            setErrorMessage("");
        }
        else{
            setBmi(null);
            setbmiStatus("");
            setErrorMessage("Please enter valid numeric values for height and weight!");
        }
    }
    const clear=()=>{
        setBmi(null);
        setbmiStatus("");
        setHeight("");
        setWeight("");
    }

  return (
    <>
    <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
            <h1>BMI Calculator</h1>
            {errorMessage && <p className='error'>{errorMessage}</p>}
            <div className="input-container">
                <label htmlFor="height">Height (cm):</label>
                <input type="text" name="height" id="height" value={height} onChange={(e)=>setHeight(e.target.value)} />
            </div>
            <div className="input-container">
                <label htmlFor="weight">Weight (kg):</label>
                <input type="text" name="weight" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clear}>Clear</button>
            {bmi!==null && (
                <div className="result">
                <p>Your BMI is : {bmi}</p>
                <p>Status : {bmiStatus}</p>
            </div>
            )}
        </div>
        
        
    </div>
    <p className="copyright">Designed by <span>Gopi ♥ Janani</span></p>
    </>
  )
}
