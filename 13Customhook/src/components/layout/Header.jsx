import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { useToggle } from '../../hooks/useToggle';
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({isDark,toggletheme}) => {
    const isActive=({isActive})=>{
        return `${isActive?'text-red-600':''} font-semibold`
    }
    const [isSide,toggleSide]=useToggle(false)
  return (
    <div>
       <nav className={` flex justify-between  md:justify-around gap-10 px-2 py-4`}>
       
           <h1  className='text-xl font-medium'>Customhooks</h1>
            <div className='hidden md:flex gap-3'>
                 <NavLink className={isActive} to='/'>Home </NavLink>
                 <NavLink className={isActive} to='/about'>About </NavLink>
                 <NavLink className={isActive} to='/login' >Login</NavLink>
                 <NavLink className={isActive} to='/signup' >Signup</NavLink>
                 <button onClick={()=>toggletheme()}
                  className='text-lg'> {isDark?<MdLightMode />:<MdNightlight />} </button>
            </div>
             { !isSide &&
                <div className='flex md:hidden' onClick={()=>toggleSide()}>
                  <GiHamburgerMenu />
             </div>
             }
           {isSide &&
             <div className='fixed top-0 right-0 h-screen flex w-15  flex-col space-y-3 md:hidden bg-neutral-400  p-2 '>
                   <button onClick={()=>toggleSide()}
                    className='self-end'><RxCross2 /></button>
                   <NavLink className={isActive} to='/'>Home </NavLink>
                  <NavLink className={isActive} to='/about'>About </NavLink>
                    <NavLink className={isActive} to='/login' >Login</NavLink>
                 <NavLink className={isActive} to='/signup' >Signup</NavLink>
             </div>
          }
            
       </nav>
    </div>
  )
}

export default Header
