import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../features/authSlice'

const Header = () => { 
    const isActive=({isActive})=>{
        return isActive?'text-red-500':''
    } 
     
    const {user,token}=useSelector(state=>state.auth) 
    const navigate=useNavigate() 
    const dispatch=useDispatch()

  return (
    <div>
       <nav className='flex justify-around bg-gray-700 py-3'>
          <h1 className='text-xl'>HOC</h1> 
           <div className='flex items-center  gap-3'>
              <NavLink className={isActive} to='/'>Home</NavLink>
              <NavLink className={isActive} to='/about'>About</NavLink>
              <NavLink className={isActive} to='/contact'>Contact</NavLink>
               
               { user && (
                 <NavLink className={isActive} to='/dashboard'>Dashboard</NavLink>
               )}
             
              {!user && (
                <NavLink className={isActive} to='/login'>Login</NavLink>
              )}

              {
                user && (
                    <button onClick={()=>{
                        const confirm=window.confirm('Are you sure want to logout') 
                        if(confirm){
                            dispatch(logout()) 
                            navigate('/')
                        }
                        return 
                    }}>
                       logout
                    </button>
              )}
              
              
           </div>
       </nav>
    </div>
  )
}
export default Header
