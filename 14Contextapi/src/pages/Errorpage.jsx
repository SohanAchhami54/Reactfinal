import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const Errorpage = () => { 
    const navigate=useNavigate()
  return (
    <div className='flex flex-col gap-5 items-center justify-center h-[100vh]'>
       <h1 className='text-5xl text-red-600'>404 this page is not found.</h1>
        <button onClick={()=>navigate('/',{replace:true})}
         className='text-3xl px-2 py-1 rounded-md bg-gray-500 '>GoBack</button>
    </div>
  )
}

export default Errorpage
