import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Form = () => { 

    const navigate=useNavigate()
    const [data,setData]=useState({
        name:'',
        password:''
    }) 

    const handleChange=(e)=>{
        const {id,value}=e.target 
        setData({...data,[id]:value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault() 
      if(!data.name || !data.password){
        alert('Please select value') 
        return 
      }
        setData({
            name:'', 
            password:''
        })
        navigate('/success',{replace:true,state:{name:data.name}})
    }

  return (
    <div>
      <form onSubmit={handleSubmit}
       className='flex flex-col gap-1  max-w-xl p-3 mx-auto mt-6'>
         <label htmlFor="name">Name:</label> 
          <input type="text" 
          id='name'
          value={data.name} 
          onChange={handleChange}
          placeholder='Enter username' 
          className='outline-none border focus:ring-2 py-1'
         />

         <label htmlFor="password">Password:</label> 
          <input type="text" 
          id='password'
          value={data.password} 
          onChange={handleChange}
          placeholder='Enter username' 
          className='outline-none border focus:ring-2 py-1'
         /> 
         <button className='border rounded-md bg-blue-700 '>Submit</button>
      </form>
    </div>
  )
}

export default Form
