import React, { useEffect, useState } from 'react'
import { nanoid } from "nanoid"
import Task from '../components/Task'
const Crud = () => { 
    const [input,setInput]=useState('') 
    const [task,setTask]=useState([]) 
    const handleSubmit=(e)=>{
        e.preventDefault()
         if(!input) {
            alert('Please Enter the task')
            return 
         } 
         setTask((prev)=>[...prev,{id:nanoid(),duty:input}])
         setInput('')
    }


 
    useEffect(()=>{
       const task=JSON.parse(localStorage.getItem('tasks'))
       if(task && task.length>0){
         setTask(task)
       }    
    },[])

       useEffect(()=>{
           localStorage.setItem('tasks', JSON.stringify(task)) 
    },[task])
    

    console.log('the task is:',task)
  return (
    // Crud.jsx
<div className="min-h-screen  p-6">
  <div className="max-w-md mx-auto">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">My Tasks</h1>

    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <button className="bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg">
        Add
      </button>
    </form>

    <ul className="flex flex-col gap-2">
      {task?.map((t) => (
        <li key={t.id}>
          <Task  task={t} setTask={setTask} input={input} setInput={setInput} />
        </li>
      ))}
    </ul>
  </div>
</div>
  )
}

export default Crud
