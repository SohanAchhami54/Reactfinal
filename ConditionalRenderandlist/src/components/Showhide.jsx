import React, { useState } from 'react'

const Showhide = () => { 
    const [password,setPassword]=useState('')
    const [showpassword,setShowpassword]=useState(false)
  return (
    <div className=' max-w-md mx-auto mt-6'>
        <h1>This is Show/hide password field</h1> 
        <div className='flex flex-col'>
             { 
                showpassword ? (
                    <>
                      <label htmlFor="showpass">ShowPassword:</label>
                      <input type="text" id='showpass' value={password}
                      className='border outline-none rounded-lg py-2 focus:ring-2' />
                    </>
                ):(
                    <>
                         <label htmlFor="hidepass">HidePassword:</label>
                         <input type="password" id='hidepass' value={password} 
                          onChange={(e)=>setPassword(e.target.value)}
                          className='border outline-none rounded-lg py-2 focus:ring-2 no-eye'
                          autoComplete='new-password'
                          /> 
              
                    </>
                )
             }
             <button onClick={()=>setShowpassword(prev=>!prev)}
                className='font-medium text-xl'
                >{showpassword?'HidePassword':'ShowPassword'} </button>
        </div>
   
    </div>
  )
}

export default Showhide
