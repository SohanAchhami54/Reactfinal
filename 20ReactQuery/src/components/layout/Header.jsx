import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const isActive=({isActive})=>{
       return isActive?'text-red-500':''
    }
  return (
    <div>
      <nav className='flex justify-around items-center bg-gray-800 py-3'>
         <h1>TanStack Query</h1>
            <div className='flex gap-3'>
                <NavLink className={isActive} to={'/'} >Weatherapi</NavLink>
                <NavLink className={isActive} to={'/todos'} >Todo</NavLink>
            </div>
      </nav>
    </div>
  )
}

export default Header
