import React from 'react'
import { useCart } from '../context/CardContext'
import useUpdateQuantity from '../hooks/useCart'

const Cart = () => { 
    const {cartitems,totalQuantity,removecart}=useCart()  
     const {updateQuantity}=useUpdateQuantity()

     console.log('the card items is:',cartitems)
  return (
    <div>
      <h1>This is cart.</h1>
       <ul className='flex flex-wrap gap-4'>
          {
            cartitems?.map((t)=>(
                <li key={t.id} className='bg-gray-900 p-4 rounded-md'>
                    <div className='flex flex-col gap-3 p-3 bg-gray-600 rounded-md'>
                   <h1>Product name: {t.name}</h1>
                    <p>Product price: {t.price} </p>
                    <p>Quantity:{t.quantity}</p>
                      <div className='flex flex-col  gap-3'>
                     <button onClick={()=>removecart(t.id)}
                      className='text-start bg-gray-900 py-1 rounded-md'>Remove</button>
                       
                       <div className='flex flex-wrap justify-center items-center gap-2 '>
                            <span>Change Quantity: </span> 
                            <button onClick={()=>updateQuantity(t.id,t.quantity,'increase')}
                       
                            className='text-lg bg-gray-500 px-3'>+</button> 
                            <button onClick={()=>updateQuantity(t.id,t.quantity,'decrease')}
                             className='text-lg bg-gray-500 px-3'>-</button>                            
                       </div>   
                     </div>
                     </div>
                   
                </li>
            ))
          }
       </ul>
    </div>
  )
}

export default Cart
