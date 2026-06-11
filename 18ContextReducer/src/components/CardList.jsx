import React, { useState } from 'react'
import { useCart } from '../context/CardContext'
import useUpdateQuantity from '../hooks/useCart'

const CardList = () => {
    const {items,add,removeitem,addtocart}=useCart()
    
    return (
    <div className=' flex flex-col  gap-2 p-3 rounded-md'>
      <h1 className='text-2xl'>This is CardlistPage.</h1>
     
       <ul className='flex flex-wrap gap-4'>
          {
            items?.map((t)=>(
                <li key={t.id} className='bg-gray-900 p-4 rounded-md'>
                    <div className='flex flex-col gap-3 p-3 bg-gray-600 rounded-md'>
                   <h1>Product name: {t.name}</h1>
                    <p>Product price: {t.price} </p>
                    <p>Quantity:{t.quantity}</p>
                      <div className='flex flex-col  gap-3'>
                     <button onClick={()=>removeitem(t.id)}
                      className='text-start bg-gray-900 py-1 rounded-md'>Remove</button>
                        <button onClick={()=>{
                               alert('The items has been added')
                               addtocart(t)
                        }}
                         className='bg-gray-400 py-1 rounded-md'>Add to cart</button>
                     </div>
                     </div>
                   
                </li>
            ))
          }
       </ul>

    </div>
  )
}

export default CardList
