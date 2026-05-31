import React, { useState } from 'react'

const Header = ({activePage,setActivePage}) => {  
  const [data,setData]=useState('') 
   
   const handleSubmit=(e)=>{
        e.preventDefault()
        if(data){
            setActivePage(data)
        }
        setData('')
       
   }
  return (
    <div className='flex justify-around p-3 text-white'>
       <h1>{activePage.toUpperCase()}</h1> 
        <div className='flex justify-between items-center gap-4'>
          <form onSubmit={handleSubmit}>
       <input type="text" 
       value={data} 
       onChange={(e)=>{
        // setActivePage(e.target.value)  
        setData(e.target.value)
      }}
       placeholder='Search here'
        className='border outline-none focus:ring-2 rounded-md' /> 
        </form>
        <h1>Notification</h1> 
       <p>User</p> 
        </div>
      
        
    </div>
  )
}

export default Header
