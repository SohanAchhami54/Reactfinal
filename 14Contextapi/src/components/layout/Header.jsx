import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { MdLightMode } from "react-icons/md";

import { MdDarkMode } from "react-icons/md";

const Header = () => {

    const {isLogin,toggleLogin}=useAuth()
    const {thememode,toggleDark,togglelight}=useTheme()

    const isActive=({isActive})=>{ 
         return `${isActive?'text-red-500':''} font-semibold `
    }

  return (
    <div>
           <nav className=' flex justify-around p-2 items-center'>
               <h1 className='text-3xl font-medium'>Context Api</h1> 
                
                <div className='flex justify-center items-center text-md  gap-4'>
                     <NavLink to={'/'} className={isActive} >Home</NavLink>
                     <NavLink to={'/about'} className={isActive} >About</NavLink>
                     <NavLink to={'/contact'} className={isActive} >Contact</NavLink>
                     {isLogin && 
                        <NavLink to={'/dashboard'} className={isActive} >Dashboard</NavLink>
                     }
                     {
                        thememode==='light'?(
                             <MdDarkMode onClick={toggleDark} /> 
                        ):(
                            <MdLightMode onClick={togglelight} /> 
                        )
                     }
                       {
                         isLogin ? (
                             <button onClick={toggleLogin}>Logout</button>
                          ):(
                        <button onClick={toggleLogin}
                        >Login</button>
                     )}
                     
                      

                </div>
           </nav>
    </div>
  )
}

export default Header
