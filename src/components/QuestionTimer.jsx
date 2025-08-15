import { useEffect, useState } from "react";

export default function QuestionTimer({timeOut,onTimeOut,mode}) {
   const [remainingTime,setRemainingTime] = useState(timeOut)
   useEffect(()=>{
      setRemainingTime(timeOut)
      const time = setTimeout(()=>onTimeOut,timeOut)
      const interval = setInterval(()=>
         setRemainingTime((prevRemainingTime)=>prevRemainingTime-100)
      ,100)
      return () =>{
         clearTimeout(time)
         clearInterval(interval)
      } 
   },[timeOut,onTimeOut])
   return (
         <progress id="question-time" max={timeOut} value={remainingTime} className={mode} />
   )
}