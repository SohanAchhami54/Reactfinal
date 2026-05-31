import React, { useState } from 'react'

const Task = ({task,setTask}) => {  
    const [isEditable,setIsEditable]=useState(false)
    const [editValue,setEditValue]=useState(task.duty)

    const handleDelete=(id)=>{
       const confirm=window.confirm('Are u sure want to delete') 
       if(!confirm) return 
        setTask(prev=>
            prev.filter(t=>id!==t.id)
        )
    }
  return (
    // Task.jsx
<div className="flex items-center justify-between gap-3 border border-gray-100 rounded-lg px-4 py-3">
    <input type="text"
     value={editValue}
     readOnly={!isEditable}
     onChange={(e)=>setEditValue(e.target.value)}
     className={` ${isEditable?'border rounded-md outline-none':'outline-none'}  `}
     />
  {/* <span className="text-md text-white">{task.duty}</span> */}
  <div className="flex gap-2">
    <button onClick={()=>{
        setIsEditable(prev=>!prev)
        setTask(prev=>
            prev.map(t=>t.id===task.id?{...t,duty:editValue}:t)
        )

    }}
     className="text-md px-3 py-1 rounded-lg border border-indigo-200">
      {isEditable?'Add':'Edit'}
    </button>
    <button onClick={(e)=>handleDelete(task.id)}
     className="text-md text-white px-3 py-1 rounded-lg border border-red-200">
      Delete
    </button>
  </div>
</div>
  )
}

export default Task
