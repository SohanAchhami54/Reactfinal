import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

const About = () => {
    const {data,loading,error}=useFetch(`https://jsonplaceholder.typicode.com/posts/${1}`)


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
    <div className='flex flex-col h-screen gap-2 justify-center items-center text-xl p-1'>
       <p>{data.title}</p>
       <p>{data.body}</p>
    </div>
  )
}

export default About
