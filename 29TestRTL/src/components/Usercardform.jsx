import React, { useState } from 'react'
import { useCard } from '../context/CardContext'
import {nanoid} from 'nanoid'

const Usercardform = () => { 
    const [name,setName]=useState('') 
    const [phone,setPhone]=useState('') 
    const [location,setLocation]=useState('')
    const {card,setCard}=useCard()

   const handleSubmit=(e)=>{
      e.preventDefault() 
      if(!name || !phone) return 
      setCard([...card,{id:nanoid(),name:name,phone:phone,location:location}])
      setName('')
      setPhone('')
      setLocation('')
   }

    return (
    <div className='p-2'>
       <form onSubmit={handleSubmit}
       className='flex flex-col items-start gap-2'
       >
        <label htmlFor="name">Name:</label>
        <input type="text" 
         id='name'
         value={name}
         onChange={(e)=>setName(e.target.value)} 
         placeholder='Enter the name' 
         aria-label='Enter the name'
         className='outline-none border px-1 py-1 focus:ring-2'
        />

         <label htmlFor="phone">Phone:</label>
         <input type="number" 
         id='phone'
         value={phone}
         onChange={(e)=>setPhone(e.target.value)} 
         placeholder='Enter the phone' 
         aria-label='Enter the phone'
         className='outline-none border px-1 py-1 focus:ring-2'
        />

          <label htmlFor="location">Location:</label>
         <input type="text" 
         id='location'
         value={location}
         onChange={(e)=>setLocation(e.target.value)} 
         placeholder='Enter the Location' 
         aria-label='Enter the location'
         className='outline-none border px-1 py-1 focus:ring-2'
        />
        
        <button aria-label='addcard'
         className='bg-gray-800 text-white py-2 px-3 rounded-md'>
            Add
        </button>
       </form>
    </div>
  )
}
export default Usercardform
