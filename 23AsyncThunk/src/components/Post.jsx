import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../features/postSlice'

const Post = () => {
    const post=useSelector(state=>state.posts)
    const dispatch=useDispatch()
    
    useEffect(()=>{
      dispatch(fetchPost())
    },[dispatch])
    
    if(post.loading) return <p className='text-red-600'> Loading...</p>
    if(post.error) return <p className='text-red-600'>Error has occur.{post.error} </p>
    return (
    <div>
       <ul className='max-w-4xl mx-auto flex gap-4 flex-wrap p-3'>
          
         {
            post?.list?.map((p)=>(
                <li key={p.id} className='p-3 w-40 flex flex-col gap-3 bg-gray-700 rounded-md '>
                      <p>Id:{p.id} </p>
                     <p>Title: {p.title} </p>   
                </li>
            ))
         }
       </ul>
    </div>
  )
}

export default Post
