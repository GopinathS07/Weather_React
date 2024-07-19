import {useEffect, useState} from 'react'
import "./Advice.css"

export const Advice = () => {
    const[Advice,setAdvice]=useState("Please Click Button to Get Advice");
    const[count,setCount]=useState(0);
    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        //console.log(data);
        setCount((c) => c+1);
    }``
    useEffect(function(){
        getAdvice();
    },[]);
  return (
    <div>
        <h3>{Advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <Counter count={count}/>
        <p className="copyright">Designed by <span>Gopi ♥ Janani</span></p>
    </div>
    
  );
}
function Counter(props){
    return(
        <p>You have read <b>{props.count}</b> pieces of Advice</p>
    );
  }
