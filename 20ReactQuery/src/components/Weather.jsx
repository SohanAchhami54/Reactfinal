import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useMemo, useState } from 'react'
import { Axios } from '../api/axios'
import SkeletonC from './SkeletonCard'
import WeatherData from './WeatherData'


const Weather = ({ queryClient}) => { 
    const [city,setCity]=useState('kathmandu') 
    const [searchCity,setSearchCity]=useState('')
    
    //queries 
    const {data,isLoading,isError}=useQuery({
        queryKey:['weather',city],
        queryFn:async()=>{
          const response = await Axios.get(`?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`)
          return response.data
        },
        staleTime:5*60*1000, 
        enabled:!!city
    })

    // const mutation=useMutation({
    //     mutationFn:async()=>{},
    //     onSuccess:()=>{
    //         queryClient.invalidateQueries({queryKey:['weather',city]}) //delete old catch and refetch.
    //     }
    // })
    

    const handleSubmit=()=>{
         setCity(searchCity) 
         setSearchCity('')
    }
    

    if(isLoading) {
        return   <div className='flex flex-wrap justify-center items-center bg-gray-500 gap-5 p-3'>
            {[...Array(8)].map((_, i) => <SkeletonC key={i} />)}
          </div>
    }
    if(isError) return <p>Error Occur while fetching data.</p>

    console.log('the value of data is:',data) 
    
  return (
    <div className='min-h-screen bg-gray-600 text-white flex flex-col py-3 justify-center items-center'>
      <h1>This is Weather {city}</h1>
       <form onSubmit={handleSubmit}
        className='w-full max-w-lg'
       >
         <input
                type="text"
                placeholder="Search city "
                value={searchCity}
                 onChange={(e)=>setSearchCity(e.target.value)}
                className="w-full max-w-md outline-none border focus:ring-2 rounded-md px-2 py-1 "
            />
            </form>
         
      <ul className='flex flex-wrap justify-center items-center gap-5 p-3 '>
        {
            data?.list?.map((d)=>(
                <WeatherData key={d.dt}  d={d} />
            ))
        }
      </ul>
    </div>
  )
}

export default Weather
