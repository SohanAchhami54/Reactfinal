import React from 'react'
import { NavLink} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const Blog = () => { 
  const {blog}=useAuth()

  return (
    <div>
       <ul className='flex flex-wrap gap-4 bg-amber-300 p-3'>
        {
            blog?.map((b)=>(
                <NavLink  to={`/blog/${b.id}`} 
                  key={b.id}
                    className='flex justify-center items-center flex-col gap-1 h-80 w-90 bg-gray-300'>
                    <span>{b.source} </span>
                    <span>{b.tag.slice(0,2)} </span>
                </NavLink>
            ))
        }
       </ul>
    </div>
  )
}
export default Blog
