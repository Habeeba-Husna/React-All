import React from 'react'
import {useState} from 'react'
function Counterr(){
    const [count,setCount]=useState(0)
    // function handleChange(){
    //     setCount(count+1)
    // }
    return(
        <>
        <button onClick={(e=>{setCount(count+1)})}>increment</button>
        <button onClick={()=>setCount(count>0 ?count-1:0)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <h2>counter:{count}</h2>
        
        </>
    );
};
export default Counterr;