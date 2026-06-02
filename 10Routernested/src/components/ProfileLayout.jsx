import React from 'react'
import {Outlet,Link} from 'react-router-dom'
const ProfileLayout = () => {
  return (
    <div>
      <div className='flex flex-col flex-wrap justify-between items-center'> 
          <h1 className='text-4xl'>This is profile layout.</h1> 
          <div className='overflow-hidden rounded-md'>
               <img src={`https://i.pinimg.com/736x/26/82/78/2682787e9d8241a3164a67748ac505b6.jpg`}
              className='w-20 hover:scale-105 transition-all duration-300 ease-linear delay-200 rounded-md'
              alt="avatar" />
              <span>Name:Jon</span>
          </div>
           
            <div className='flex flex-wrap gap-2 text-xl font-medium'>
                   <Link to='detail'>Detail</Link>
                   <Link to='post'>Post</Link>
            </div>
        
         </div>
      
          <Outlet />
    </div>
  )
}

export default ProfileLayout
