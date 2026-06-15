import React, { useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from '../../../context/ThemeContext'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"

const Header = () => {
    const isActive=({isActive,ispending,isTransitioning})=>{
        return isActive?'text-red-500':''
    }
   const {thememode,toggleDark,togglelight}=useTheme()
   const [open,setOpen]=useState(false)

  return (
    <div>
       <nav className=' flex justify-between md:justify-around px-2    items-center bg-gray-800 text-white  rounded-md py-3'>
          <h1 className='text-2xl'>TaskManager</h1>
           <div className='hidden md:flex gap-4 items-center'>
              <NavLink className={isActive} to='/'>Home</NavLink>
              <NavLink className={isActive} to='/about'>About</NavLink>
              <NavLink className={isActive} to='/task'>Task</NavLink>
              <NavLink className={isActive} to='/me'>Me</NavLink>
            {
               thememode==='light'?(
                <MdDarkMode onClick={toggleDark} />
               ):(
                <MdLightMode onClick={togglelight} />
               )
            }
           </div>
           


           <div className='flex md:hidden'>
             {  !open && (
               <GiHamburgerMenu onClick={()=>setOpen(prev=>!prev)} />
             )}
           </div>



         
             {
               open && (
                  <div className='fixed top-0 right-0 w-15 flex flex-col px-2  z-50 bg-gray-600 min-h-screen gap-2'>
                     <button className='self-end text-lg py-1'>
                           <RxCross1 onClick={()=>setOpen(prev=>!prev)} />
                     </button>
                 
                    <NavLink onClick={()=>setOpen(prev=>!prev)} className={isActive} to='/'>Home</NavLink>
                    <NavLink onClick={()=>setOpen(prev=>!prev)} className={isActive} to='/about'>About</NavLink>
                    <NavLink onClick={()=>setOpen(prev=>!prev)} className={isActive} to='/task'>Task</NavLink>
                    <NavLink onClick={()=>setOpen(prev=>!prev)} className={isActive} to='/me'>Me</NavLink>
             {
               thememode==='light'?(
                <MdDarkMode onClick={toggleDark} />
               ):(
                <MdLightMode onClick={togglelight} />
               )
             } 
            </div>
               )}
     
       </nav>
    </div>
  )
}

export default Header
