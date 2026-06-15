import { useQuery } from '@tanstack/react-query'
import React from 'react'
import {useNavigate,useSearchParams} from 'react-router-dom'
import { Axios } from '../api/axios'
import Animations from './PostSkeleton'
import Button from '@mui/material/Button';
import { useState } from 'react'

const Blogpost = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const page=Number(searchParams.get('page')||1)
      const navigate=useNavigate()
       
      const handlePageChange=(newpage)=>{
         setSearchParams({page:newpage})
      }

      const query=useQuery({
        queryKey:['blog',page],
        queryFn:async ()=>{
            // const response=await Axios.get(`/?page=${page}&limit=10`,)
            // await new Promise(resolve=>setTimeout(resolve,2000))
            const response= await Axios.get('/',{params:{page:page,per_page:10}})
            return response.data
        },
        staleTime:5*60*1000
    })

    const {data,isLoading,isError,refetch}=query
    console.log('the blog data is:',data)
    console.log('the value of query is:',query)

    if(isError){
        return <div className='min-h-screen flex flex-col justify-center items-center'>
              <h1 className='text-red-500'>Error has occur please try again later</h1>
                <Button onClick={()=>refetch()} 
                variant="contained">Try again</Button>
        </div>
    }
   return (
    <div className='min-h-screen bg-gray-900 text-white p-3'>
        <div className='flex justify-between items-center px-3'>
             <h1>This is blog post.</h1>
             <div className='flex  gap-3'>
                <Button
                 disabled={page==1}
                 onClick={()=>handlePageChange(page-1)}
                 variant='outlined'>Previous</Button>
                <Button 
                disabled={data?.length<10}
                onClick={()=>handlePageChange(page+1)}
                variant='outlined'>Next</Button>
             </div>
        </div>

        {isLoading?(
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 gap-3'>
                    {[...Array(10)].map((_, i) => <Animations key={i} />)}
                </div>
        ):(
              <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2  gap-3'>

             {
                data?.map((d)=>(
                    <li key={d.id} className='flex flex-col gap-4 bg-gray-800 p-3 rounded-md group'>
                        {
                            d.cover_image? 
                            <div className='overflow-hidden'>
                            <img className='h-35 w-full group-hover:scale-105 transition-all duration-200 ease-linear delay-100 object-cover'
                            src={`${d.cover_image}` } alt='blogpost' /> 
                            </div>
                            :
                            <p className='text-center h-35 bg-gray-900'>No image found</p>
                          }
                        <div className='flex flex-col gap-3 h-35'>
                        <p>Organization: {d.organization?.name } </p>
                         <p>Created At: {d.created_at.split('T')[0]} </p>
                         <p className='text-xs md:text-sm text-neutral-400'>Title: {d.title} </p>
                       </div>
                    
                       <button onClick={()=>navigate(`/blog/${d.id}`)}
                        className='bg-gray-600 py-3 rounded-md'>Click here to see details</button>
                    </li>
                ))
            }
         </ul>
        )}
      
      {!isLoading && (!data || data.length === 0) && (
                <h1 className='text-center text-xl mt-10'>No blog posts found</h1>
      )} 
    </div>
  )
}

export default Blogpost
