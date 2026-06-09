import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const isActive=({isActive,ispending,isTransitioning})=>{
        return isActive?'text-red-500':''
    }
  return (
    <div>
       <nav className=' flex justify-around items-center bg-gray-700 rounded-md py-3'>
          <h1 className='text-2xl'>TaskManager</h1>
           <div className='flex gap-4'>
              <NavLink className={isActive} to='/'>Home</NavLink>
              <NavLink className={isActive} to='/about'>About</NavLink>
              <NavLink className={isActive} to='/task'>Task</NavLink>
              <NavLink className={isActive} to='/me'>Me</NavLink>
           </div>
       </nav>
    </div>
  )
}

export default Header
