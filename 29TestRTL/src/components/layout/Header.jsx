import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const isActive=({isActive})=>{
        return isActive?'text-red-600':''
    }
  return (
    <div>
       <nav className='flex justify-around items-center bg-gray-800  py-2'>
        <h1 className='text-xl'>TestwithRTL</h1>
           <div className='flex gap-2'>
              <NavLink className={isActive}  to='/' >Home</NavLink>
              <NavLink className={isActive}  to='/usercard' >UserCard</NavLink>
              <NavLink className={isActive}  to='/counter' >Counter</NavLink>
              <NavLink className={isActive}  to='/form' >Form</NavLink>
           </div>
       </nav>
    </div>
  )
}

export default Header
