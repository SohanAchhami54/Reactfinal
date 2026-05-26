import React, { useRef, useState } from 'react'

const Form = () => { 
    const [data,setData]=useState({
        name:'', 
        email:'', 
        password:''
    }) 

   const [submittedData,setSubmittedData]=useState(null)  
   const nameRef=useRef(null)

    
    const handleChange=(e)=>{
        // console.log('The value of e is:',e)
        // console.log('The value of e.target is:',e.target) 
        // console.log('The value of e.target.id is:',e.target.id)   
        
        const {id,value}=e.target 
        setData({...data,[id]:value})
    }

 const handleSubmit=(e)=>{
     e.preventDefault()
    if(!data.name && !data.email && !data.password) {
        alert('All field are required')
    }
    if(data.name && data.email && data.password){
        setSubmittedData({...data})
        setData({name:'',email:'',password:''})
    }
   
 }

 const focusInput=()=>{
    nameRef.current.focus()
 }
  
  return (
    <div className=''>
      <h1 className='text-center text-2xl p-5 font-semibold'>This is User form.</h1>
      <form onSubmit={handleSubmit} 
       className='flex flex-col gap-4 items-center justify-center'>
        {/* username  */}
        <div className='flex flex-col gap-1'>
        <label htmlFor="name">Name: </label>
        <input type="text"
        id='name' 
        ref={nameRef}
        value={data.name} 
        onChange={handleChange}
        required
        className='outline-none border-2 focus:ring-2 rounded-md w-60'
        />
        </div>

        {/* email  */}
        <div className='flex flex-col gap-1'>
        <label htmlFor="email">Email:</label> 
        <input type="email"
        id='email' 
        value={data.email} 
        onChange={handleChange} 
        required
       
        className='outline-none border-2 focus:ring-2 rounded-md w-60'
        />
        </div>

        {/* password  */}
        <div className='flex flex-col gap-1'>
        <label htmlFor="password">Password:</label> 
        <input type="password"
        id='password' 
        value={data.password} 
        onChange={handleChange}
        minLength={6}
        maxLength={20}
        required
        className='outline-none border-2 focus:ring-2 rounded-md w-60'
        />
        </div>

        <button className='px-6 py-1 bg-blue-500 rounded-md text-white' 
         onClick={focusInput}
        >Submit</button>
        {
            submittedData && 
            <>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Password: {submittedData.password}</p>
            </>
        } 
      
      </form>
    </div>
  )
}

export default Form
