import React, { useRef } from 'react'

const Uncontroll = () => { 
    const emailRef=useRef() 
    const handleClick=()=>{
        if(!emailRef.current.value) return 
        emailRef.current.focus()
    }

    const handleCopy=()=>{
        if(!emailRef.current.value) return 
       emailRef.current.select()
       window.navigator.clipboard.writeText(emailRef.current.value)
    } 

    const handleClear=()=>{
        emailRef.current.value='' 
        emailRef.current.focus()
    } 

    const handleFill=()=>{
        emailRef.current.value='example@gmail.com' 
        emailRef.current.focus()
    }

  return (
    <div className='flex flex-col gap-2 items-start p-10 bg-green-100'>
        <h1>This is Uncontrolled Components.</h1>
        <label htmlFor="email">Email: </label>
      <input type="email" 
      ref={emailRef}
      id='email' 
      placeholder='Enter your email' 
      className='w-70 outline-none border-1 rounded-md focus:ring-2'
      />
      <button onClick={handleCopy} 
      >Copied</button>
      <button onClick={handleClick}>
         Submit
      </button>
      <button onClick={handleClear}>
        Clear
      </button>
      <button onClick={handleFill}>
        Fill
      </button>
    </div>
  )
}

export default Uncontroll
