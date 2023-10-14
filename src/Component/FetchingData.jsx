// 


import React, { useEffect, useState } from 'react'
import ChildComp from '../Revison/ChildComp';

const FetchingData = () => {
    const [data, setData] = useState([]);
    
    const [searc,setSearc] = useState("");
    const fetchAPI = () =>{
      
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json();
        })
        .then(result => {
            setData(result);
            
             
        })
    }
    useEffect(()=>{
        fetchAPI()
    },[])

    const handleChange = (e) =>{
        setSearc(e.target.value)
    }
    console.log("data", !data);

  return (
    <div>
        <ChildComp
        sendDataToChild={data}/>
        <input type='text' placeholder='Enter name' value={searc}
        onChange={handleChange}
        
     />

        <button>search</button>
        <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            {data.map(el => (
                <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                </tr>
            ))}
        </table>
        

    
    </div>
  )
}

export default FetchingData