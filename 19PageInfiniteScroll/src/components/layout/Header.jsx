import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const isActive=({isActive})=>{
        return isActive?'text-red-500':''
    }
  return (
    <div>
        <nav className='flex justify-around items-center bg-gray-700 py-3'>
            <h1 className='text-3xl'>InfiniteScroll</h1>
             <div className='flex gap-3'>
               <NavLink to='/' className={isActive} >Home</NavLink>
               <NavLink to='/about' className={isActive} >About</NavLink>
               
             </div>
        </nav>
    </div>
  )
}

export default Header
