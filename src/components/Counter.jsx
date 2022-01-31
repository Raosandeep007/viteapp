import { useState } from "react"
import "./userdetails.css"


export const Counter = ()=>{
    const [counter,setCounter] = useState(0)

    // const [Age,setAge] = useState(0)
    // const [email,setemail] = useState("")
    const clickfun = (val)=>{
        if(counter >= 0 ){
            setCounter(counter + val)
        }       
    }
    if(counter < 10){
        return(
            <div>
            <h3 >Counter:{counter}</h3>
            <p className={counter & 2 === 0 ? "red":"green"}>Counter is:{counter % 2 === 0?"Even":"Odd"}</p>
            <button  onClick={()=>{clickfun(1)}}>Add 1</button>
            <button onClick={()=>{clickfun(-1)}}>Dec 1</button>
        </div>
        )
    }else{
        return <h1>You Have reached max counter values</h1>
    }
}