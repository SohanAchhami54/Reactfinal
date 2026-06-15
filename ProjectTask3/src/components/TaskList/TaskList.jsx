import React, { useState } from 'react'
import { useTask } from '../../context/TaskContext'
import TaskCard from '../TaskCard/TaskCard'

const TaskList = () => {
    const {task}=useTask()

    const [search,setSearch]=useState('')
    const [filter,setFilter]=useState('all')

    const filtered=task.filter(t=>{
      const matchsearch=t.title.toLowerCase().includes(search.toLowerCase())
      const matchfiler=filter==='all'?true:filter==='completed'?t.completed:!t.completed
      return matchsearch&&matchfiler
    })

   
 return (
    <div className='p-4 space-y-4'>
        {/* for search and toggle  */}  

        <div className='flex gap-2 '>
          <input type="text" 
          value={search} 
          onChange={(e)=>setSearch(e.target.value)}
          placeholder='Search the task'

          className='border outline-none focus:ring-2 w-full max-w-md py-2 rounded-md'
           />

           <select value={filter}
            onChange={(e)=>setFilter(e.target.value)}
            className='bg-black text-white'
            >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
           </select>
            </div>

      <ul className='flex flex-wrap gap-4 '>

         {
          filtered?.map((t)=>(
             <TaskCard key={t.id} t={t}/>
          ))
         }
      </ul>
    </div>
  )
}

export default TaskList
