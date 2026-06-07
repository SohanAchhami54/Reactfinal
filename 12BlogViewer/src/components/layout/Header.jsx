import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
const Header = () => {
  const isActive=({isActive})=>{
      return isActive?'text-red-500':''
  }
  const {isLogin,logout}=useAuth() 
  return (
    <div>
      <nav className='flex justify-around font-medium p-3'>
         <h1 className='text-xl'>Router</h1> 
          <div className='flex items-center gap-3'>
             <NavLink className={isActive} to='/'>Home</NavLink>
             <NavLink className={isActive}  to='/about'>About</NavLink>
             <NavLink className={isActive}  to='/blog'>Blog</NavLink>
             <NavLink className={isActive}  to='/contact'>Contact</NavLink>
             {
              isLogin  ? <button onClick={logout}>Logout </button>
              :
              <NavLink className={isActive}  to='/login'>Login</NavLink>
             }
             
          </div>
      </nav>
    </div>
  )
}

export default Header
