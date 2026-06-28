import React from 'react'
import { useCart } from '../context/CartContext'

const CartApp = () => { 
    const {state, addItem,deleteItem,totalCart}=useCart() 
    return (
    <div>
        <h1>TotalCart: {totalCart} </h1>
      <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
         {
            state?.items?.map((d)=>(
                <li key={d.id} className='flex flex-col gap-3 bg-gray-800 rounded-md p-3 items-start '>
                  <span>Name: {d.name} </span>
                  <span>Price: {d.price} </span>
                   <button className='bg-gray-600 px-2 py-1 rounded-md' 
                   onClick={()=>deleteItem(d.id)} >Delete</button>
                </li>
            ))
         }
      </ul>
      <span onClick={()=>addItem()} >Add Item </span>
    </div>
  )
}

export default CartApp
