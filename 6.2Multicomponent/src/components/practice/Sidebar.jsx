import React from 'react'
import { AiOutlineMenuFold } from "react-icons/ai"
import { IoHomeSharp } from "react-icons/io5"
import { IoAnalytics } from "react-icons/io5"
import { LuUsers } from "react-icons/lu"
import { IoSettingsSharp } from "react-icons/io5"
const Sidebar = () => {
    const side=[
        {
            id:1, 
            icon:<IoHomeSharp/>,
            title:'Dashboard'
        },
        {
            id:2, 
            icon:<IoAnalytics/>,
            title:'Analytics',
        },
        {
            id:3, 
            icon:<LuUsers/>,
            title:'Users'
        },
        {
            id:4, 
            icon:<IoSettingsSharp/>,
            title:'Settings'
        }
    ]
  return (
    <div className=' flex flex-col gap-4 pt-4 text-lg min-h-screen max-w-13 md:max-w-55 w-full  bg-gray-800 p-2'>



       <AiOutlineMenuFold />
       <ul className='flex flex-col gap-2'>
        {
            side.map((data)=>(
                <li  key={data.id}>
                     <div className='flex justify-items-start items-center md:border md:rounded-md gap-3'>
                        <span className='ml-0 md:ml-3'>{data.icon} </span>
                        <span className='hidden md:flex'>{data.title} </span>
                     </div>
                    
                </li>
            ))
        }
       </ul>
    </div>
  )
}

export default Sidebar
