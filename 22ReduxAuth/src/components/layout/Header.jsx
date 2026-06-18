import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../features/authSlice'

const Header = () => {
    const auth=useSelector(state=>state.auth)
    const dispatch=useDispatch()
  return (
    <div>
      <nav className='flex justify-around items-center bg-gray-800 py-2'>
        <h1 className='text-2xl'>Redux Auth</h1>
          <div className='flex gap-3'>
            <Link to='/'> Home</Link>
            {!auth.isLogged && (
                 <Link to='/login' >Login</Link>
             )}
             
                {auth.isLogged && auth.user && (
                    <span>Welcome,{auth.user.name} </span> 
                )}

                {auth.isLogged && auth.user &&(
                    <Link to='/profile'>Profile</Link>
                )}

                {auth.isLogged && (
                     <button onClick={()=>dispatch(logout())}
                     >Logout</button>
                  )}
          </div>
      </nav>
    </div>
  )
}
export default Header
