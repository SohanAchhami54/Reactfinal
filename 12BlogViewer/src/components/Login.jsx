import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const {login}=useAuth()  
    const navigate=useNavigate()
    const {values,handleChange,reset}=useForm({name:'',password:''})
    
    const handleSubmit=(e)=>{
         e.preventDefault()
         if(!values.name || !values.password){
             alert('ALl field are required')
             return 
         }

            login()
            navigate('/')
            reset()

    }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Login </h1>
      <form className='flex flex-col gap-3 justify-center'
       onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="name"
        id='name'
        value={values.name} 
        onChange={handleChange}
       placeholder='Enter your name'
        />

      <label htmlFor="password">Password:</label>
      <input type="password" 
      id='password'
      value={values.password} 
      onChange={handleChange}
      placeholder='Enter your password'
       />
      <button className='bg-blue-500 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default Login
