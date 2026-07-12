import React, { useEffect, useState } from 'react'
import { Axios } from './api/axios'

const App = () => {  

  const [data,setData]=useState([])

  const getData=async()=>{ 
    try {
        const reponse=await Axios.get()
       setData(reponse.data)
    } catch (error) {
      console.log('error occur:',error)
    }
    
  }
  useEffect(()=>{
    getData()
  },[])
 
  console.log('the data is:',data)

  return (
    <div className='p-4'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 '>
        {
          data?.slice(0,20).map((d)=>(
            <li key={d.id} className='flex flex-col gap-3 bg-gray-500 text-white p-3 rounded-md group '>
               <h1>Category: {d.category}</h1>
                <div className='rounded-md overflow-hidden'>
                  <img src={d.featured_image} alt={d.subtitle}
                  className='rounded-md group-hover:scale-105 transition-all duration-200 ease-in delay-100' />
                </div>
                <span className='text-neutral-800 text-sm'>{d.subtitle}</span>
                <span className='line-clamp-3 text-neutral-800 text-sm'>{d.summary } </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default App
