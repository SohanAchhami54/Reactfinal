import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../features/cartSlice'

const Items = () => {
    const items=[
        {
     id:11, 
     name:'Asus laptop',
     price:250000,
     country:'Taiwan',
   },
   {
     id:12, 
     name:'Macbook',
     price:275000,
     country:'USA',
   },
   {
     id:13, 
     name:'Lenovo laptop',
     price:100000,
     country:'Taiwan',
   },
   {
     id:14, 
     name:'HP laptop',
     price:150000,
     country:'Taiwan',
   },
    {
     id:15, 
     name:'Samsung laptop',
     price:160000,
     country:'Taiwan',
   },
   
    ]
    const dispatch=useDispatch() 
    const store=useSelector(state=>state)
    console.log('the value of store is:',store)

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
       <h1>This is items.</h1>
        <ul className='grid gap-3 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {
                items.map((i)=>(
                    <li key={i.id} className='flex flex-col gap-2 bg-gray-800 p-3 rounded-md'>
                      <p>Name: {i.name} </p>
                      <p>Price: {i.price} </p>
                      <p>Country: {i.country}</p>
                      <button onClick={()=>dispatch(add({id:i.id,name:i.name,price:i.price,country:i.country}))}
                       className='bg-gray-600 py-1 rounded-md'>Add to Cart </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Items
