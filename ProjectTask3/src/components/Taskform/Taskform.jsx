import React, { useState } from 'react'
import {nanoid} from 'nanoid'
const Taskform = ({task,setTask}) => { 
  const [input,setInput]=useState('') 
  const [description,setDescription]=useState('')
  const [priority,setPriority]=useState('')
  const [completed,setCompleted]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault() 
    if(!input) return 
    setTask([...task,{id:nanoid(),title:input,description:description,completed:completed,
      priority:priority,createdAt:new Date().toLocaleString()
    }])
    setInput('')
    setDescription('')
  }
  console.log('the value of task is:',task)
   return (
    <div className='flex-none'>
          <div className='h-screen p-4 bg-gray-600 rounded-md'>
        <form onSubmit={handleSubmit} 
         className='flex  flex-col gap-6  justify-items-start px-5 py-5 bg-gray-700  rounded-md'>

           <div className='flex flex-col gap-1'>
           <label htmlFor="task">Title: </label>
           <input type="text" 
           value={input} 
           onChange={(e)=>setInput(e.target.value)}
            className='outline-none border focus:ring-2 focus:ring-blue-500 py-3 rounded-md'
           placeholder='Enter Title'/> 
           </div>

            <div className='flex flex-col gap-1'>
           <label htmlFor="task">Description: </label>
           <textarea type="text" 
           value={description} 
           onChange={(e)=>setDescription(e.target.value)}
           className='outline-none border focus:ring-2 focus:ring-blue-500 h-40 rounded-md '
           placeholder='Enter Title'/> 
           </div>
           
           <div className='flex flex-col gap-1'>
            <label htmlFor="priority">Priority:</label>
           <select
            value={priority} 
            onChange={(e)=>setPriority(e.target.value)}
            name="priority" 
            id="priority"
             className='text-white bg-gray-500 py-2 rounded-md outline-none '>
            <option  value=''>Priority</option>
             <option value="high">High</option>
             <option value="medium">Medium</option>
             <option value="low">Low</option>
           </select>
           </div>
           <button className='px-2 py-3 bg-gray-600  rounded-md hover:bg-gray-900 transition'>Add</button>
        </form>
        </div>
    </div>
  )
}

export default Taskform
