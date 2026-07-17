import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'
const Header = () => { 
    const [open,setIsOpen]=useState<boolean>(false)
    const isActive=({isActive}:NavLinkRenderProps)=>{
       return isActive?'text-red-500':''
    }
  return (
    <div>
       <nav className='relative flex justify-around bg-gray-700 items-center gap-2 py-3'>
         <h1 className='text-lg'>Advanced TS</h1> 
           <div className='hidden md:flex gap-2'>
             <NavLink className={isActive} to='/'>Home</NavLink>
             <NavLink className={isActive} to='/todo'>Todo</NavLink>
             <NavLink className={isActive} to='/user'>User</NavLink>
             <NavLink className={isActive} to='/login'>Login</NavLink>
           </div>
           
           {!open && (
              <span onClick={()=>setIsOpen(prev=>!prev)}
               className='flex md:hidden text-2xl'>=</span>
           )}
            
           {open && (
            <div className='fixed top-0 right-0 flex flex-col gap-1 items-start bg-gray-900 min-h-screen p-2'>
                <span onClick={()=>setIsOpen(prev=>!prev)} 
                className='self-end'>X</span>
                <NavLink onClick={()=>setIsOpen(prev=>!prev)}  className={isActive} to='/'>Home</NavLink>
                <NavLink onClick={()=>setIsOpen(prev=>!prev)}  className={isActive} to='/todo'>Todo</NavLink>
                <NavLink onClick={()=>setIsOpen(prev=>!prev)}  className={isActive} to='/user'>User</NavLink>
               <NavLink onClick={()=>setIsOpen(prev=>!prev)}  className={isActive} to='/login'>Login</NavLink>
               </div>
           )}
       </nav>
    </div>
  )
}

export default Header
