import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <nav className='flex justify-around items-center bg-gray-600 py-3'>
          <h1>PWA</h1>
            <div className='flex gap-2 '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about' >About</NavLink>
                <NavLink to='/movie'>Movie</NavLink>
            </div>
       </nav>
    </div>
  )
}

export default Header
