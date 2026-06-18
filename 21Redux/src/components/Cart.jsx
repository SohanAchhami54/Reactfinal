import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletion, reset } from '../features/cartSlice'

const Cart = () => {
    const dispatch=useDispatch()
    const cartValue=useSelector(state=>state.cart)
   return (
    <div className='flex flex-col gap-3 justify-center '>
          <div className='flex justify-around'>
             <h1>Cart</h1>
             <div className='flex gap-2'>
                 <button onClick={()=>dispatch(reset())}
                  className='bg-gray-500 px-3 py-1'>Reset </button>
             </div>

        </div>  
      <ul className=' p-3  gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      
        {
            cartValue.carts?.map((i)=>(
                <li key={i.id} className='flex flex-col gap-2 p-2 rounded-md bg-gray-900'>
                    <p>Cartitems length:{i.length} </p>
                    <p>Name:{i.name}</p>
                    <p>Price:{i.price} </p>
                    <p>Country:{i.country} </p>
                    <p>Quantity: {i.quantity} </p>
                    <button onClick={()=>dispatch(deletion({id:i.id}))}
                     className='bg-gray-500 rounded-md py-2'>Delete </button>

                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Cart
