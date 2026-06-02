import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
    const isActive=({isActive,isPending})=>{ 
          return  isPending?'text-blue-600':isActive?'text-red-500':''
    }
  return (
    <div>
       <nav className='flex justify-around item-center text-white'>
           <h1>Router</h1>
  
             <div className='flex gap-2'>
                 <NavLink className={isActive} to={'/'}> Home</NavLink>
                 <NavLink className={isActive} to={'/about'}> About</NavLink>
                 <NavLink className={isActive} to={'/form'}>Form </NavLink>
                 <NavLink className={isActive} to={'/success'}>Success</NavLink>
              </div>
          
       </nav>
    </div>
  )
}

export default Header
