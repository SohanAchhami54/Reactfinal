import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice'
import { nanoid } from '@reduxjs/toolkit'

const Login = () => {
    const dispatch=useDispatch()
    const [data,setData]=useState({
        name:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        const {id,value}=e.target 
        setData({...data,[id]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(login({user:{...data},token:nanoid()}))
        setData({
            name:'',
            email:'',
            password:''
        })
    }
  return (
    <div className='flex min-h-screen'>

        <div className='flex-1 hidden md:flex justify-center items-center bg-gray-900'>
            <h1 className='text-5xl'>Welcome Back </h1>
        </div>


        <div className='flex-1 flex justify-center items-center bg-gray-700 '>
        <form onSubmit={handleSubmit}
         className='w-full max-w-md bg-gray-800 px-8 py-15 rounded-lg flex flex-col gap-3'>

         <div className='flex flex-col gap-1'>
        <label htmlFor="name">Name:</label>
        <input type="text"
         id='name'
         value={data.name} 
         onChange={handleChange}
         placeholder='enter your name'
         className='px-3 py-2 outline-none focus:ring-2 border rounded-md'
         
         />
         </div>
         
         <div className='flex flex-col gap-1'>
        <label htmlFor="email">Email:</label>
        <input type="email"
         id='email'
         value={data.email} 
         onChange={handleChange}
         placeholder='enter your email'
           className='px-3 py-2 outline-none focus:ring-2 border rounded-md px-2 py-1' />
         </div>

         <div className='flex flex-col gap-1'>
         <label htmlFor="password">Password:</label>
         <input type="password"
         id='password'
         value={data.password} 
         onChange={handleChange}
         placeholder='enter your password'
         className='px-3 py-2 outline-none focus:ring-2 border rounded-md px-2 py-1' />
         </div>
         
         <button className='bg-gray-900 rounded-md  py-2'>Login</button>
  
       </form>
       </div>
    </div>
  )
}

export default Login
