import React from 'react'
import {useForm} from 'react-hook-form' 
import {zodResolver} from '@hookform/resolvers/zod'
import Button from '@mui/material/Button'
import * as z from 'zod'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'
import {nanoid} from 'nanoid'

const loginSchema= z.object({
   email:z.string()
   .min(1,'Email is required')
   .email('Please enter a valid email'), 

   password:z.string()
   .min(1,'Password is required')
   .min(6,'Password must be at least 6 characters')
})

const Login = () => {
    const dispatch=useDispatch() 
    const navigate=useNavigate()

    const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm({
        resolver:zodResolver(loginSchema),
        mode:'onChange'
    })

    const onsubmit=async(data)=>{
       try {
          await new Promise(resolve=>setTimeout(resolve,1500)) 
          dispatch(login({user:{...data},token:nanoid()}))
          reset() 
          navigate('/')
       } catch (error) {
           alert('login failed. Please try again later')
       }
    }

  return (
    <div className='flex flex-col md:flex-row   min-h-screen'>
         <div className='flex-1 flex justify-center items-center border bg-gray-600 border-neutral-300  rounded-l-xl'>
           <h1 className='text-4xl font-medium'>Welcome back </h1>
         </div>

         <div className='flex-1 flex flex-col gap-3 justify-center  items-center border border-neutral-300 rounded-r-xl '>
                <h2 className='text-3xl font-medium'>Login</h2>
                <form onSubmit={handleSubmit(onsubmit)}
                className='w-full max-w-sm flex flex-col gap-5 border  px-8 py-12 rounded-md'
                >
                      <div className='flex flex-col gap-1'>
                         <label htmlFor="email">Email:</label>
                         <input type="email" 
                           {...register('email')}
                          placeholder='Enter your email'
                          className='outline-none border focus:ring-2 focus:ring-blue-500 py-1 rounded-md '
                           />
                           {errors.email && (
                            <p className='text-red-600'>{errors.email.message} </p>
                           )}

                       </div>   

                       <div className='flex flex-col gap-1'>
                         <label htmlFor="password">Password:</label>
                         <input type="password" 
                           {...register('password')}
                          placeholder='Enter your password' 
                          className='outline-none border focus:ring-2 focus:ring-blue-500 py-1 rounded-md '
                          />
                            {errors.password && (
                            <p className='text-red-600'>{errors.password.message} </p>
                           )}
                      </div> 

                     <Button type='submit'
                      variant="contained">
                        {isSubmitting?'Signing...':'Login'}
                     </Button>
                </form>
         </div>
    </div>
  )
}

export default Login
