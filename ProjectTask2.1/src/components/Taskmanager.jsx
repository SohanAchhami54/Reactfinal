import React, { useState } from 'react'

const Taskmanager = ({task,setTask,setInput,setIsEditable,setEditId}) => {
   

    const handleDelete=(id)=>{
        const confirm=window.confirm('Are u sure want to delete') 
        if(!confirm) return 

      setTask(prev=>
        prev.filter(t=>t.id!==id)
      )
    }

    const handleEdit=(t)=>{
         setInput({
            task:t.task,
            duedate:t.duedate, 
            priority:t.priority,
         })
         setIsEditable(true)
         setEditId(t.id)
    }

    

  return (
    <div className='flex flex-wrap  gap-4'>
        <span>Task:{task.task} </span>
        <span>Priority:{task.priority} </span>
        <span>DueDate:{task.duedate.split('T')[0]} </span>
        <div className='flex flex-wrap gap-3'>
        <span className='font-semibold text-neutral-400'>Created At:{task.createdAt} </span>
        <span className='font-semibold text-neutral-400'>{task.updatedAt? `Updated at:${task.updatedAt}`:''} </span>
        {/* <span>{task.updatedAt ? task.updatedAt:''} Updated At:{task.updatedAt && task.updatedAt} </span> */}
        </div>
        <div className='flex flex-wrap gap-2'>
            <button onClick={()=>handleEdit(task)}
             className='px-2 bg-blue-700 rounded-md'>Edit</button> 
            <button onClick={()=>handleDelete(task.id)}
             className='px-2 bg-red-700 rounded-md'>Delete</button>
        </div>
        

    </div>
  )
}

export default Taskmanager
