import React, { useEffect, useState } from 'react'
import {useParams,useNavigate, useLocation, useSearchParams} from 'react-router-dom'
import { blogreview } from '../data/blogreview'
const BlogDetail = () => { 
  
  const {id}=useParams()
  const navigate=useNavigate() 
   const location=useLocation()

   const [searchParams, setSearchParams] = useSearchParams()

   const [matchblog,setMatchblog]=useState('') 
   const [loading,setLoading]=useState(true)

  
   const  refvalue=searchParams.get('ref')
   const  sortvalue=searchParams.get('sort')

   console.log('searchparams:',searchParams)


  
    useEffect(()=>{
           //setup function
         const timer= setTimeout(()=>{
            const blogfound = blogreview.find(b=>b.id===Number(id))
             setMatchblog(blogfound)
             setLoading(false)
          },500)
           
          //cleanup function 
           return ()=> clearTimeout(timer)
    },[id])


    if(loading){
      return (
        <div>
            <p className='text-3xl text-center text-red-700'>Loading...</p>
        </div>
      )
    }
    
    if(!matchblog){
      return (
        <div className='flex flex-col justify-center items-center mt-5 space-y-5'>
            <h1 className='text-7xl font-bold text-red-500'>404: Blog post not found. </h1>
           <p className='text-lg'>The blog is not found with this id: <span className='font-semibold'>{id}</span>  </p>
           <button className='text-2xl px-2 py-1 bg-gray-500 rounded-md'
            onClick={()=>navigate('/blog')}>Go back </button>
            
        </div>
      )
    }
  return (
    <div className='mt-3 max-w-2xl mx-auto p-10  bg-amber-500'>
      <div className='flex flex-col justify-center items-center space-y-5 p-2  bg-amber-200'>
           <h1>BlogDetails.</h1>
        <span>The id of the blog post: {id} </span>
           <span>We are currently on the {location.pathname} </span>

             <span className='font-semibold'>Source: {matchblog.source} </span>

                {refvalue && (
                  <span>
                        URL Search Params refvalue: {refvalue} ||
                        URL Search Params sortvalue: {sortvalue}
                  </span>
                )}
             <span className='text-md p-2 font-medium'>Description:  {matchblog.description} </span>
             
             <button onClick={()=>navigate(-1)} //this is navigation option 
          className='px-2 py-1 bg-gray-600 rounded-md'>Go Back</button>
      </div>
       
    </div>
  )
}

export default BlogDetail
