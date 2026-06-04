import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const About = () => {
    const [number,setNumber]=useState(1)
    const {data,loading,error}=useFetch(`https://jsonplaceholder.typicode.com/posts/${number}`)

    useEffect(()=>{
      const interval= setInterval(()=>{
           
            setNumber(prev=>prev+1)
        },1000)
      return ()=>  clearInterval(interval)
    },[number])

    if(loading) {
        return (
            <p>Loading....</p>
        )
    }
    if(error){
        return (
            <p>Error:{error} </p>
        )
    }
  return (
    <div className='flex flex-col h-screen  gap-4 justify-center items-center text-xl p-1'>
        <h1 className='text-5xl font-semibold'>This is About page.</h1>
       <p>Title: {data.title}</p>
       <p>Body: {data.body}</p>
    </div>
  )
}

export default About
