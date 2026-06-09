import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Axios } from './api/axios'
import { useFetch } from './hooks/useFetch'

const App = () => { 
  const [city,setCity]=useState(localStorage.getItem('cityname')||'kathmandu')
  const [inputcity,setInputCity]=useState('')
  const [data]=useFetch(city)


  useEffect(()=>{
     localStorage.setItem('cityname',city)
  },[city])

  const handleSubmit=(e)=>{
    e.preventDefault() 
    setCity(inputcity)
    setInputCity('')
  }
  // console.log('the data is:',data)
  return (
    <div className='p-10 min-h-screen bg-gray-700 text-neutral-100'>
      <div className='flex flex-col content-center gap-6'>
        <h1 className='text-center text-6xl font-medium'>This is Example of Axios.</h1>
        <h1 className='text-center text-6xl font-medium'>City: {city.toUpperCase()} </h1>
        <form onSubmit={handleSubmit} className='flex justify-center gap-3 items-center'>
          <label htmlFor="city">City:</label>
          <input type="text" 
          id='city' 
          value={inputcity} 
          onChange={(e)=>setInputCity(e.target.value)}
           className='border outline-none focus:ring-2 focus:ring-gray-500 py-2 px-3 w-full max-w-sm'
          placeholder='Enter the name of the city' />
        </form>
        <div className='flex flex-wrap justify-center items-center gap-5 py-3'>
       <p className=' bg-amber-700 py-3  px-1 grow text-center'>Coordinates: {data?.coord?.lon}  {data?.coord?.lat} </p>
       <p className=' bg-amber-700 py-3 px-1'>Humidity: {data?.main?.humidity} </p>
       <p className='bg-amber-600 py-3  px-1'> Pressure: {data?.main?.pressure}  </p>
        <p className='bg-amber-600 py-3  px-1 grow text-center' >Temperature: {((data?.main?.temp)-273.5)} Celsius </p>
       <p className='bg-amber-600 py-3  px-1'>Sea level: {data?.main?.sea_level}  </p>
       </div>
       
      <div className='flex flex-wrap gap-3 items-center '>
           <p className='py-4 px-2 bg-gray-500 font-bold'>City: {data?.name} </p> 
       <p className='py-4 px-2 bg-gray-500' >Country: {data?.sys?.country} </p>
       <p className='py-4 px-2 bg-gray-500 grow-2 text-center'> Sunrise: {data?.sys?.sunrise} </p>
       <p className='py-4 px-2 bg-gray-500 grow text-center'>Sunset: {data?.sys?.sunset} </p>
       <p className='py-4 px-2 bg-gray-500  text-center'>Windspeed: {data?.wind?.speed} </p>
      </div>
       
       <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-3xl font-semibold'>Weather Description</p>
       <ul> {data?.weather?.map((w)=>(
         <li key={w.id}>
             <p><span className='font-semibold'>Description:</span>  {w.description} </p>
         </li>
       ))} </ul>
       </div>
    </div>
     </div>
  )
}

export default App
