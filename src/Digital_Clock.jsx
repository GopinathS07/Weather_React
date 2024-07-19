import {useEffect, useState} from 'react'
import "./Digital_Clock.css";

export const Digital_Clock = () => {
    const[currentTime,setCurrentTime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setCurrentTime(new Date());
        },1000);

        return()=>clearInterval(timer);
    },[]);

    const formatHour=(hour)=>{
        return hour===0?12:hour>12?hour-12:hour;
    }
    const formatTimeWithLeadingZero =(num)=>{
        return num<10?`0${num}`:num;
    }
    const formatDate = (date)=>{
        const options={weekday:"long",year:"numeric",day:"numeric",month:"long"};
        return date.toLocaleDateString(undefined,options);
    };

  return (
   <>
   <div className="digital-clock">
    <h1>Digital Clock</h1>
    <div className="time">{formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} : {formatTimeWithLeadingZero(currentTime.getMinutes())} : {formatTimeWithLeadingZero(currentTime.getSeconds())}
        {currentTime.getHours()>=12?" PM":" AM"}
    </div>
    <div className="date">{formatDate(currentTime)}</div>
    <p className="copyright">Designed by <span>Gopi ♥ Janani</span></p>
   </div>
   </>
  )
}
