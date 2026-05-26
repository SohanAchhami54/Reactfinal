import React, { useState } from 'react'

const Controll = () => { 
    const [name,setName]=useState('') 
  return (
    <div className='bg-amber-100 p-10'>
        <h1>This Controlled Components</h1>
        <label htmlFor="name">Name:     </label>
       <input type="text" 
        id='name' 
        value={name} 
        onChange={(e)=>setName(e.target.value)} 
        placeholder='Enter your name' 
        className='outline-none border-1 rounded-md focus:ring-2'
       />
       <h1>The name of the User is:{name} </h1>
    </div>
  )
}

export default Controll
