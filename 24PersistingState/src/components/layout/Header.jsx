import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md"
import { MdLightMode } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { darkmode, lightmode } from '../../features/themeSlice'
import { logout } from '../../features/authSlice'

const Header = () => {
    const {thememode}=useSelector(state=>state.theme) 
    const {user,token}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const isActive=({isActive})=>{
        return isActive?'text-red-500':''
    }
  return (
    <div>
       <nav className='flex justify-between items-center px-3 py-3 '>
          <h1 className='text-2xl'>Reduxpersist</h1> 
           <div className='flex items-center gap-2'>
              <NavLink className={isActive} to='/'>Home</NavLink>
              <NavLink className={isActive} to='/about'>About</NavLink>
              <NavLink className={isActive} to='/login'>login</NavLink>
              { thememode==='light'
                 ?
                <MdDarkMode onClick={()=>dispatch(darkmode())} />
                :
                <MdLightMode onClick={()=>dispatch(lightmode())} />
              }
              {
                user?
                <button onClick={()=>{
                    dispatch(logout()) 
                    navigate('/login')
                }}>Logout</button>
                :''
              }
           </div>
       </nav>
    </div>
  )
}

export default Header
