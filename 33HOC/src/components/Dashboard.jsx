import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import withAuth from '../hoc/withAuth'
import Modal from './Modal'


const Dashboard = () => { 
    const auth=useSelector(state=>state.auth)   
    // throw new Error('Testing Environment') 
    const [isOpen,setIsOpen]=useState(false)
   return (
    <div>
      <h1>This is dashboard</h1> 
       <span>{auth.user.email} </span> 
        
        <br/>

        <button onClick={()=>setIsOpen(true)}
        className='py-2 px-2 bg-blue-700 rounded-md shadow-xl'>
             Open Modal
        </button>

       <Modal
       isOpen={isOpen} 
       onClose={()=>setIsOpen(false)}
       > 
        <h2 className='text-2xl font-bold'>Welcome</h2>
        <p>This modal use createPortal.</p>
       </Modal>
    </div>
  )
}

const ProtectedDashboard=withAuth(Dashboard) 
export default ProtectedDashboard
