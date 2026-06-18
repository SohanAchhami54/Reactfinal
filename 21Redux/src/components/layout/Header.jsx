import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
const Header = () => {
    const isActive=({isActive})=>{
        return isActive?'text-red-500':''
    }
    const value=useSelector(state=>state.cart.carts)
  return (
    <div>
       <nav className='flex justify-around items-center py-3 '>
          <h1 className='text-2xl'>Reduxtoolkit</h1>
            <div className='flex gap-2'>
                <NavLink className={isActive} to={'/'}>Counter</NavLink>
                <NavLink className={isActive}  to={'/cart'} >Cart {value.length} </NavLink>
                <NavLink className={isActive}  to={'/items'} >Items</NavLink>
            </div>
       </nav>
    </div>
  )
}

export default Header
