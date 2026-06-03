import React from 'react'

const TaskList = ({task,setTask,filter,search}) => { 


   const filtered=task.filter(t=>{
       const matchSearch=t.task.toLowerCase().includes(search.toLowerCase())    
       const matchfilter=filter==='all'?true:filter==='completed'?t.completed:!t.completed
       return matchSearch && matchfilter
   })
 
   const handleToggle=(id)=>{
       setTask(prev=>
        prev.map(t=>
            t.id===id?{...t,completed:!t.completed}:t
        )
       )
   }    

    const handleDelete=(id)=>{
       setTask(prev=> 
        prev.filter(t=> t.id!==id )
       )
    }
  return (
    <div>
       
       <ul className='flex flex-col  gap-3 max-w-5xl mt-5 bg-gray-600 mx-auto'>
          {
            filtered?.map((t)=>(
                <li
               key={t.id}
                 className={`flex justify-around items-center bg-gray-500 gap-4 p-2 ${
                t.completed ? 'line-through' : ''
               }`}
                 >
                     <input type="checkbox" 
                     checked={t.completed}
                     onChange={()=>handleToggle(t.id)} />
                    <span>Task: {t.task}</span> 
                    <span>Duedate:{t.duedate} </span>

                     <div className='flex gap-2'>
                        <button
                         className='px-2 py-1 bg-blue-600 rounded-md'>Edit</button>
                        <button onClick={()=>handleDelete(t.id)}
                        className='px-2 py-1 bg-red-600 rounded-md'>Delete</button>
                     </div>
                </li>
            ))
          }
       </ul>
    </div>
  )
}

export default TaskList
