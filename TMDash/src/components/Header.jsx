import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Header = ({thememode,setThememode,search,setSearch,filter,setFilter}) => {  
  return (
    <div className='   p-3 '>
       <nav className='flex justify-around items-center'>
           <h1>TMDash</h1>
      

     

      <div className='flex flex-wrap gap-2 '>
          <input type="text" 
          value={search} 
          onChange={(e)=>setSearch(e.target.value)}
          placeholder='Search the task'

          className='border outline-none focus:ring-2'
           />

           <select value={filter}
            onChange={(e)=>setFilter(e.target.value)}
            className={`${thememode==='dark'?'bg-black':''}`}
            >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
           </select>
          <button className='text-2xl'
           onClick={()=>{
            if(thememode==='light'){
                setThememode('dark')
            }
            if(thememode==='dark'){
                setThememode('light')
            }
        }}>
            {thememode==='light'?<MdDarkMode/>:<CiLight/>}
        </button>  
        </div>   
         </nav> 
    </div>
  )
}

export default Header
