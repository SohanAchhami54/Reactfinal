import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import { login } from '../features/authSlice'
import {nanoid} from 'nanoid'
import { useNavigate } from 'react-router-dom'


const loginSchema= z.object({
    email:z.string()
    .min(1,'Email is required')
    .email('Please enter valid email address'),

    password:z.string()
    .min(1,'Password is required') 
    .min(6,'Password must be at least 6 characters long')
})

const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.auth)

    const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm({
        resolver:zodResolver(loginSchema), 
        defaultValues:{
            email:'',
            password:''
        },
        mode:'onChange'
    })

    const onsubmit=async(data)=>{
        try{
           console.log('login data:',data)
            await new Promise(resolve=>setTimeout(resolve,1500))

             dispatch(login({user:{...data},token:nanoid()}))
             navigate('/')
             reset()

        }catch(error){
           console.log(error) 
           alert('login failed. Please try again later.')
        }
    }

  return (
    <div className='flex flex-col  md:flex-row min-h-screen'>
        <div className='flex-1 rounded-l-2xl hidden md:flex justify-center items-center  bg-gray-500'>
            <h1 className='text-5xl font-medium'>Welcome Back</h1>
        </div>

        <div className='flex-1 flex justify-center items-center rounded-r-2xl bg-gray-600'>
            
            <form onSubmit={handleSubmit(onsubmit)}
            className='w-full max-w-sm flex flex-col gap-4 px-8 py-10 bg-gray-800 rounded-md'> 

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email:</label>
                         <input type="email"
                           {...register('email')}
                          placeholder='Enter your email' 
                          className='px-4 py-1 outline-none border focus:ring-2 rounded-md' 
                          />
                          {errors.email && (
                            <p className='text-red-500'>{errors.email.message} </p>
                          )}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password">Password:</label>
                         <input type="password"
                          {...register('password')}
                          placeholder='Enter your email' 
                          className='px-4 py-1 outline-none border focus:ring-2 rounded-md' 
                          />
                           {errors.password && (
                            <p className='text-red-500'>{errors.password.message} </p>
                          )}
                    </div>
                     
                     <button type='submit' 
                     disabled={isSubmitting}
                     className='bg-gray-900 py-2 rounded-md'
                      >
                         {isSubmitting?'Signing....':'Signin'}
                     </button>
                    
                   
              
            </form>
            </div>
       
    </div>
  )
}

export default Login
