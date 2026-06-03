import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Task = ({input,setInput,setTask}) => { 
   
  

    const handleChange=(e)=>{
        const {id,value}=e.target

       setInput({...input,[id]:value})
    }

    const handleSubmit=(e)=>{
       e.preventDefault()
       if(!input.task || !input.duedate){
         alert('All field are required') 
         return 
       }
       setTask(prev=>[...prev,{id:nanoid(),...input}])
       setInput({
        task:'',
        duedate:''
       })
    }
  
    return (
    <div>
       <form onSubmit={handleSubmit} 
       className='flex justify-center items-center gap-4'>

          <input type="text" 
          id='task'
           placeholder='Enter the task'
           value={input.task} 
           onChange={handleChange}
           className='max-w-100 w-full py-1 border outline-none focus:ring-2'
          />
          <input type="datetime-local" 
          id='duedate'
           value={input.duedate} 
           onChange={handleChange}
          />
            <button className='px-2 py-1 bg-blue-500 rounded-md'>Add</button>
       </form>
    </div>
  )
}

export default Task
