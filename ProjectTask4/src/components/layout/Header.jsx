import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
    const isActive=({isActive})=>{
       return isActive?'text-red-600':''
    }
  return (
    <div>
      <nav className='flex justify-around py-3 bg-gray-800 text-white'>
        <h1>Blog Post.</h1>
          <div className='flex gap-3'>
             <NavLink className={isActive} to='/'>Home</NavLink>
            <NavLink  className={isActive} to='/blog'>Blog</NavLink>
          </div>
          
      </nav>
    </div>
  )
}

export default Header
