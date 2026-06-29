import React from 'react'
import { useTask } from '../context/Taskcontext'

const Tasklist = () => { 
    const {state,dispatch}=useTask() 

    const handleDelete=(id)=>{
        dispatch({type:'DELETE_TASK',payload:{id}})
    }
    return (
    <div>
      <ul className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {
            state?.map((t)=>(
                <li key={t.id} className='flex flex-col gap-2 gap-1 bg-gray-800 p-2 rounded-md' > 
                   <span>Title: {t.title} </span>
                   <span>Task: {t.task} </span>
                   <button  aria-label='deletetask'
                    onClick={()=> handleDelete(t.id)}
                   className='bg-gray-600 py-1 rounded-md' 
                   >Delete</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Tasklist
