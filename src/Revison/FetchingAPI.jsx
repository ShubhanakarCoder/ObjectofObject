import React, { useEffect, useState } from 'react'
import ChildComp from './ChildComp';

const FetchingAPI = () => {
    const [data,setData]=useState("");

    const fetchPost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((res) => {
            console.log("Fetch data",res)
            setData(res)
          })
    }
    useEffect(()=>{
        fetchPost()
    },[]);

  return (
    <>
     <ChildComp
     />
        <div>
        {data.map((el,i)=>{
                return(
                    <>
                    <h6>{el.body}</h6>
                    </>
                )
        })}
        </div>
       
    </>
    
  )
}

export default FetchingAPI