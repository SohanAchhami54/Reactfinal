import React from 'react'

const TaskList = ({task}) => {
  return (
    <div className='flex-auto'>
      <ul className='p-5 flex flex-wrap gap-4 justify-center items-start '>
         {
          task?.map((t)=>(
            <li key={t.id}>
                <h1>Task:{t.title} </h1>
                <h1>Description:{t.description} </h1>
                <p>Priority:{t.priority}</p> 
                <p>CreatedAt:{t.createdAt} </p>
            </li>
          ))
         }
      </ul>
    </div>
  )
}

export default TaskList
