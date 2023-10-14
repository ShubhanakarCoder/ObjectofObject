import React, { useState } from 'react'

const Inputbox = () => {
  const [name, setName] = useState("");

  const formData = (e) =>{
      console.log(e.target.value);
      setName(e.target.value);
  }
  return (
    <>
    <label>Name:- </label>
      <input placeholder='Enter name' onChange={formData} />
      <h1>{name}</h1>
      <button>Submit</button>
    </>
  )
}

export default Inputbox