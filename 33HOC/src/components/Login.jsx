import React from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

const loginSchema=z.object({
    email:z.string() 
    .min(1,'Email is required') 
    .email('Please enter valid email'), 

    password:z.string() 
    .min(1,'Password is required') 
    .min(6,'Password must be of 8 Character long')
})

const Login = () => { 
 const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm({
    resolver:zodResolver(loginSchema),
    mode:'onChange'
 })
 
 const dispatch=useDispatch() 
 const navigate=useNavigate()

 const onsubmit=async(data)=>{
    try{
        await new Promise(resolve=>setTimeout(resolve,1500)) 
       dispatch(login({user:{...data},token:nanoid()}))
        reset()
       navigate('/') 
      
    }catch(error){ 
        console.error(error)
        alert('login failed. Please try again later.')
    }
 }
  return (
    <div className='flex gap-2 min-h-screen'>
      <div className='flex-1  hidden md:flex justify-center items-center bg-gray-900  '>
        <h1 className='text-2xl'>Welcome back!</h1>
      </div>

      <div className='flex-1 flex justify-center items-center w-full'>
        <form onSubmit={handleSubmit(onsubmit)}
         className='flex flex-col  gap-2 bg-gray-800 p-6 rounded-md w-full max-w-sm'>
           <label htmlFor="email">Email:</label>
           <input type="email" 
            id='email'
            placeholder='Enter your email' 
            {...register('email')}
             className='outline-none focus:ring-2 border py-1 rounded-md px-2'
           />
           {errors.email && (
                <p className='text-red-500'>{errors.email.message} </p>
            )}

           <label htmlFor="password">Password:</label>
           <input type="password" 
           id='password'
            placeholder='Enter your password' 
            {...register('password')}
             className='outline-none focus:ring-2 border py-1 rounded-md px-2'
           />
           {errors.password && (
            <p className='text-red-500'>{errors.password.message} </p>
           )}
           <button disabled={isSubmitting}
            className='bg-gray-500 rounded-md py-1'>
             {isSubmitting?'logging in...':'login'}
           </button>
        </form>
      </div>
    </div>
  )
}

export default Login
