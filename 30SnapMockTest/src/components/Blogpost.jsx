import React, { useEffect, useState } from 'react'
import { Axios } from '../api/axios'
import { useQuery } from '@tanstack/react-query'

const Blogpost = () => {

    const {data,isLoading,isError}=useQuery({
        queryKey:['posts'],
        queryFn:async()=>{
           const response= await Axios.get('/posts')
           return response.data
        },
        staleTime:1000*60*5
    })
    console.log('the data is:',data)
    if(isLoading) return <p className='text-red-500'>Loading....</p>
    if(isError) return <p>Error.... </p>
    
  return (
      <>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
               data?.map((d)=>(
                    <li key={d.id} className='flex flex-col gap-2 bg-gray-800 p-2 rounded-md'>
                       <span>UserId: {d.userId} </span>
                        <span>Title: {d.title} </span>
                        <span>Body: {d.body} </span>
                    </li>
               ))
            }
        </ul>
      </>
  )
}

export default Blogpost
