import React, { useRef } from 'react'

const Formcu = () => { 
    const nameRef=useRef(null) 
    const emailRef=useRef(null) 
    const passwordRef=useRef(null) 
     
    const handleSubmit=(e)=>{ 
        e.preventDefault()
        const name=nameRef.current.value 
        const email=emailRef.current.value 
        const password=passwordRef.current.value 
       
        if(!name || !email || !password) return 
         console.log('name:',name)
         console.log('email:',email)
         console.log('password:',password) 
        
         nameRef.current.value='' 
         emailRef.current.value='' 
         passwordRef.current.value='' 
    } 
    
    const handleClear=()=>{
       nameRef.current.value='' 
       emailRef.current.value='' 
       passwordRef.current.value=''
    } 

    const handleFill=()=>{
        nameRef.current.value='John doe' 
        nameRef.current.focus()
        emailRef.current.value='example@gmail.com' 
    }

  return (
    <div>
        <h1 className='text-xl font-semibold'>Form using uncontrolled components.</h1>
       <form  onSubmit={handleSubmit}
        className='flex flex-col gap-2'> 
        <label htmlFor="name">Name: </label>
         <input type="text" 
         id='name' 
         ref={nameRef}
         placeholder='Enter your name' 
           className='outline-none border  rounded-md focus:ring-2'
          />

            <label htmlFor="email">Email: </label>
            <input type="email" 
            id='email'  
            ref={emailRef}
            placeholder='Enter your email' 
            className='outline-none border  rounded-md focus:ring-2'
          />

          <label htmlFor="password">Password: </label>
            <input type="password" 
            id='password' 
            ref={passwordRef}
            placeholder='Enter your password' 
            className='outline-none border rounded-md focus:ring-2'
          />

          <button className='bg-blue-300 py-2 rounded-lg'>
            Submit
          </button>

          <button onClick={handleClear}
           className='bg-red-300 py-2 rounded-lg'>
            Clear
          </button>

           <button onClick={handleFill}
           className='bg-green-300 py-2 rounded-lg'>
            Fill
          </button>

       </form>
    </div>
  )
}

export default Formcu
