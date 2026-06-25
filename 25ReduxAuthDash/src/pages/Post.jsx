import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchnews } from '../features/postSlice'

const Post = () => { 
    const post=useSelector(state=>state.post)
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(fetchnews())
    },[dispatch])
    console.log('post value is:',post)

  return (
    <div>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
            post.list.articles.slice(0,15).map((p,index)=>(
                <li key={index} className='flex flex-col gap-3 shadow-xl p-4 rounded-md group'>
                     <div className='overflow-hidden rounded-md'>
                        {
                            p.urlToImage
                            ?
                             <img src={p.urlToImage} alt={p.source.name}
                              className='rounded-md h-50  object-cover w-full  group-hover:scale-105 transition-all duration-200 ease-linear delay-75 ' />
                            : 
                            <div className='bg-gray-800 rounded-md  text-center h-40'>
                             <span>No image</span>
                            </div>
                        }
                        
                     </div>
             
                    <p className='line-clamp-3 text-sm text-neutral-400 '>Content: {p.content} </p>
                    <span>Published At:  {p.publishedAt.split('T')[0]} </span>
                    <span className='text-sm text-neutral-400'>Title: {p.title} </span>
                    <span className='text-sm text-neutral-400 line-clamp-2'>Description: {p.description} </span>
                </li>
            ))
        }
      </ul>
    </div>
  )
}
export default Post
