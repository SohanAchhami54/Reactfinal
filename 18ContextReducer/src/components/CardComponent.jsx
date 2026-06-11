import React, { useState } from 'react'
import { useCart } from '../context/CardContext'

const CardComponent = () => {
    const [data,setData]=useState({
        name:'',
        price:''
    }) 
    const handleChange=(e)=>{
        const {id,value}=e.target 
        setData({...data,[id]:value})
    }
     const {items,totalPrice,totalQuantity,add}=useCart()

     const handleSubmit=(e)=>{
        e.preventDefault() 
        if(!data.name|| !data.price) return 
        add(data)
        setData({
            name:'',
            price:''
        })
     }
    return (
    <div className='   bg-gray-500 p-3 rounded-md'>
      <form onSubmit={handleSubmit}
       className='flex flex-col gap-4 max-w-sm mx-auto bg-gray-600 p-4 rounded-md'>

         <div className='flex flex-col'>
         <label htmlFor="name">Name:</label>
          <input type="text" 
          id='name' 
          value={data.name} 
          onChange={handleChange}
          placeholder='Enter product name'
          className='outline-none border focus:ring-2 py-2 rounded-md' />
          </div>
           
          <div className='flex flex-col gap-1'>
          <label htmlFor="price">Price:</label>
          <input type="number" 
          id='price'
          value={data.price} 
          onChange={handleChange}
          placeholder='Enter price' 
          className='outline-none border focus:ring-2 py-2 rounded-md'/>
          </div>
          <button className='bg-gray-700 py-2 rounded-md text-md'>
              Add Product
          </button>
      </form>
    </div>
  )
}

export default CardComponent
