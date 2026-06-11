import React from 'react'
import { useCart } from '../../context/CardContext'
import { Link } from 'react-router-dom'


const Header = () => {
    const {totalPrice,totalQuantity,clear}=useCart()
  return (
    <div className='flex justify-around items-center  py-3 bg-gray-700 '>
      <Link to='/' className='text-4xl'> ContextReducer</Link>
      <div className='flex items-center gap-8 text-lg'>
          <p>Total Price: {totalPrice()} </p>
         <Link to='/cart' className="text-2xl">🛒{totalQuantity()}</Link>
        
         <button onClick={clear}
          className='py-1 bg-gray-500 px-2 rounded-md'         
         >ClearAllCart</button>
      </div>
      
    </div>
  )
}

export default Header
