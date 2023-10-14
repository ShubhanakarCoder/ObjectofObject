import React, { useState } from 'react'

const IncrementDecrement = () => {
    const [count , setCount] =useState(0);
    const [btn , setBtn] =useState(true);
    const [debtn , setDeBtn] =useState(false);
  

    const increment = () =>{
        setCount(count + 1);

        if(count => 1  ){
            setBtn(false)
            if(count > 3){
                setDeBtn(true)
            }
        }
        
    }
    const decrement = () =>{
        setCount(count - 1)
        if(count == 1 ){
            setBtn(true) 
        }
        setDeBtn(false)
    }
  return (
    <>
       <h1>{count}</h1>

       <button disabled ={debtn}  onClick={increment} >increment</button>
       <button disabled ={btn} onClick={decrement}>decrement</button>
    </>
  )
}

export default IncrementDecrement