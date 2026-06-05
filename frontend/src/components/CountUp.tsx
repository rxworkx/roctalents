"use client";
import {useState, useEffect} from 'react'
interface CountUpProps{
    start:number;
    end:number;
    duration:number;
    plus:string;
}
function Countup(props:CountUpProps) {
    const [count,setCount]=useState(props.start);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(count<props.end){
                setCount(count+1);
            }else{
                clearInterval(interval);
            }
        },props.duration/(props.end-props.start));
        return ()=>clearInterval(interval);
    }, [count,props])

  return (
    <div className="-mt-5">
        <span>{count}{props.plus}</span>
    </div>
  )
}

export default Countup