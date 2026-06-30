import React from 'react'
import { useCard } from '../context/CardContext'

const Usercardlist = () => { 
    const {card}=useCard()
    return (
    <div className='flex flex-col gap-3'>
      <h1>Usercartlist </h1>
      <ul className='mx-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {
            card?.map((c)=>(
                <li key={c.id} className='flex flex-col gap-2 bg-gray-700 p-2 rounded-md  '>
                  <span>Name: {c.name}</span>
                  <span>Phone: {c.phone} </span>
                  <span>Location: {c.location} </span>
                </li>
            ))
         }
      </ul>
    </div>
  )
}

export default Usercardlist
