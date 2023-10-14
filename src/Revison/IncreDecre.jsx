import React, { useState } from 'react'

const IncreDecre = () => {
    const [count,setCount]= useState(0);
    const [disable,setDisable] =useState(false);
    const [decdisable,setDecDisable] =useState(false);

    const incre = () =>{
        setCount(count + 1);
        console.log(count);
        if(count == 9){
            setDisable(true)
        }
        setDecDisable(false)
    }
    const decr = () =>{
        setCount(count - 1);
        if(count == 1){
            setDecDisable(true)
        }
        setDisable(false)
    }
  return (
    <>
        <h1>{count}</h1>
        <button disabled={disable} onClick={incre}>increment</button>
        <button disabled={decdisable} onClick={decr}>Decrement</button>
    </>
  )
}

export default IncreDecre