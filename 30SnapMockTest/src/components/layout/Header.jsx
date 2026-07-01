import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => { 
    const isActive=({isActive})=>{
        return isActive?'text-red-500':''
    }
  return (
    <div>
       <nav className='flex justify-around items-center py-3 bg-gray-800'>
          <h1 className='text-xl'>SnapShot Testing</h1>
             <div className='flex gap-2'>
                <NavLink className={isActive}  to='/'>Home</NavLink>
                <NavLink className={isActive}  to='/about'>About</NavLink>
                <NavLink className={isActive}  to='/blogpost'>Blog</NavLink>
             </div>
       </nav>
    </div>
  )
}

export default Header
