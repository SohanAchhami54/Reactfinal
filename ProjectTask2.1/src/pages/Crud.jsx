import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Taskmanager from '../components/Taskmanager'
const Crud = () => { 

     const [task,setTask]=useState([]) 
     const [isEditable,setIsEditable]=useState(false)
     const [editId,setEditId]=useState('')
    const [input,setInput]=useState({
        task:'',  
        duedate:'', 
        status:'',
        priority:''
    }) 
   



    const handleChange=(e)=>{
        const {id,value,name,type}=e.target 

        console.log('the name is:',name) 
        console.log('the type is:',type)

        if(type==='radio'){
            setInput({...input,[name]:value})
        }else{
        setInput({...input,[id]:value})
        }
    }
    
    
        const handleSubmit=(e)=>{
          e.preventDefault() 

          if(!input.task || !input.duedate || !input.priority){
                 alert('All field are required:')
                 return 
          }
          
          if(isEditable){
               setTask(prev=> 
                 prev.map(t=>
                     t.id===editId?{...t,...input,updatedAt:new Date().toLocaleString()}:t
                 )
               )

               setEditId('')
               setIsEditable(false)

          }else{
               setTask([...task,{id:nanoid(),...input,createdAt:new Date().toLocaleString()}])
          }
             setInput({
             task:'',
             duedate:'', 
             status:'',
             priority:''
          })   
                   
          }

    useEffect(()=>{
               const duty=JSON.parse(localStorage.getItem('tasks'))
               if(duty && duty.length>0){
                   setTask(duty)
               }
    },[])  

     useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(task))
     },[task])     
        

  return (
    <div className='flex flex-col'>
      <h1>This is Task  Manager.</h1> 
      <form onSubmit={handleSubmit}
      className='flex flex-wrap justify-center items-center gap-5 bg-gray-600 max-w-5xl mx-auto p-3'>
      <div>
       
             <label htmlFor="task">Task:</label>
           <input type="text" 
          id='task'
         value={input.task} 
         onChange={handleChange}
         placeholder='Enter the task'   
         className='w-60 md:w-80 border outline-none focus:ring-2' 
      /> 
      </div>
    
       <div className='flex justify-center items-center '>
      <label htmlFor='hightask'>High:</label>
      <input type="radio"
       id='hightask'
       name='priority' 
       value='high' 
       checked={input.priority==='high'} 
       onChange={handleChange}
       />
       </div>


       <div className='flex justify-center items-center'>
      <label htmlFor='mediumtask'>Medium:</label>
      <input type="radio"
         id='mediumtask'
        name='priority'
        value='medium'
        checked={input.priority==='medium'} 
        onChange={handleChange}
        />
        </div>
        

        <div className='flex justify-center items-center'>
        <label htmlFor='lowtask'>Low:</label>
       <input type="radio"
       id='lowtask'
        name='priority'
        value='low'
        checked={input.priority==='low'}
        onChange={handleChange}
        />
        </div>


        <div>
      <label htmlFor="duedate">Duedate:</label>
      <input type="datetime-local" id='duedate' 
       value={input.duedate} 
       onChange={handleChange}
      />
      
      </div>
      <button className='px-2 bg-gray-800 rounded-lg'>Add</button>
      </form>

       <ul className='flex flex-col justify-between  items-center bg-gray-700 m-4  gap-3   '>
        {
            task?.map((t)=>(
                <li key={t.id} className='p-3'>
                   <Taskmanager  task={t} setTask={setTask} setInput={setInput} setEditId={setEditId}
                    setIsEditable={setIsEditable} />
                </li>
            ))
        }
       </ul>
    </div>
  )
}

export default Crud
