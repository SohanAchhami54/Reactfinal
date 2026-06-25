import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineLightMode } from "react-icons/md"
import { MdDarkMode } from "react-icons/md"
import { darkmode, lightmode } from '../../features/themeSlice'
import Button from '@mui/material/Button'
import { logout } from '../../features/authSlice'

const Header = () => { 
    const isActive=({isActive})=>{
        return isActive?'text-red-500':''
    }

     const {thememode}=useSelector(state=>state.theme)
     const {user,isLoggedIn}=useSelector(state=>state.auth)
     const dispatch=useDispatch()
     const navigate=useNavigate()

  return (
    <div className='sticky top-0 z-50 backdrop-blur-md '>
        <nav className='flex justify-around py-4'>
            <h1 className='text-xl '>Reduxauth</h1>
             <div className='flex gap-3 items-center justify-center'>
                <NavLink className={isActive} to='/'>Home</NavLink>
                <NavLink className={isActive} to='/about'>About</NavLink>
                
                {
                    isLoggedIn && (
                         <NavLink className={isActive} to='/post'>Post</NavLink>
                )}
           


                  {
                   !user && (
                        <NavLink className={isActive} to='/login'>Login</NavLink>
                  )}
                 
                {
                  thememode==='dark' ?
                  <MdOutlineLightMode onClick={()=>dispatch(lightmode())} />
                  :<MdDarkMode onClick={()=>dispatch(darkmode())} />
                }

                {
                    user &&  (
                        <Button onClick={()=>{
                            const confirm=window.confirm('Are u sure want to logout')
                            if(confirm){
                                dispatch(logout())
                                navigate('/login')
                            }
                            return 
                          
                        }}>
                             Logout
                        </Button>
                    )}
             </div>
        </nav>
    </div>
  )
}
export default Header
