import React, { useState } from 'react'

const Input = () => {
    const [data,setData]=useState("");

    const handleChange = (e) =>{
        setData(e.target.value)
    }
    console.log("data", !data);

  return (
    <>
     <label>Name :-</label>
     <input type='text' placeholder='Enter name' value={data}
        onChange={handleChange}
        
     />
     <br/>
     <button disabled={!data}>Click me</button>
    </>
  )
}

export default Input