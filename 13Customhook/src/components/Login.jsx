import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

const Login = () => {

    const {values,handleChange,reset}=useForm({name:'',email:'',password:''})

    const handleSubmit=(e)=>{ 
        e.preventDefault() 
         console.log('login value is:',values) 
        //  alert(JSON.stringify(...values))
         reset()
    }  
    return (
    <div className=' flex  flex-wrap  h-screen '>
        <div className='flex-1 flex justify-center items-center   m-1 '>
             <h1 className='text-3xl font-bold'>Fill this form</h1>
            
        </div>
        <div className='flex-1 flex flex-col gap-4 justify-center items-center'>
              <h1 className='text-5xl font-semibold'>Login Form</h1>
            <form onSubmit={handleSubmit}
             className='flex flex-col gap-3 p-2 w-full max-w-md'>
                <label htmlFor="name">Name:</label>
                <input type="text" 
                id='name'
                value={values.name} 
                onChange={handleChange}
                placeholder='Enter name' 
                className=' border px-2 outline-none focus:ring-2 rounded-sm'
                />
                <label htmlFor="email">Email:</label>
                <input type="email" 
                id='email' 
                value={values.email} 
                onChange={handleChange}
                placeholder='Enter email address'  
                className='border px-2 outline-none focus:ring-2 rounded-sm'/>

                <label htmlFor="Password">Password:</label>
                <input type="password" 
                id='password' 
                value={values.password} 
                onChange={handleChange}
                placeholder='Enter password'
                className='border px-2 outline-none focus:ring-2 rounded-sm' />

                <button className='bg-blue-600 rounded-md py-1'>Submit</button>
            </form>
    </div>
    </div>
  )
}

export default Login
