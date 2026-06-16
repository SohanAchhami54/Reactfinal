import { nanoid } from 'nanoid'
import React, { useReducer, useState } from 'react'
import Tasklist from './Tasklist'
import { useTaskManager } from '../hooks/useTaskManager'

const TaskManager = () => {
    const {state,dispatch,handleChange,deletion, edit,toggle}=useTaskManager()

    const handleSubmit=(e)=>{
      e.preventDefault() 
      if(!state.task || !state.priority || !state.duedate){
        alert('All field are required')
      }else if(state.editId) {
        dispatch({type:'update'})
        dispatch({type:'reset'})
      }else {
        dispatch({type:'add'}) 
        dispatch({type:'reset'})
      } 
    }

  return (
    <div>
       <form onSubmit={handleSubmit} className='flex flex-wrap justify-around items-center border max-w-6xl mx-auto py-2'>
        <div className='flex  justify-center items-center gap-2'>
        <label htmlFor="task">Task:</label>
          <input type="text"
          placeholder='Enter the task'
          id='task'
          value={state.task} 
          onChange={handleChange}
          className=' px-2 py-1  w-80 border outline-none focus:ring-2'
           />
           </div>
         
         <div>
         <label htmlFor="hightask">High:</label>
         <input type="radio"
          name='priority'
           id='hightask'
           value='high' 
           checked={state.priority==='high'}
             onChange={handleChange}
            />
           
            
          
            <label htmlFor="mediumtask">Medium:</label>
         <input type="radio"
          name='priority'
           id='mediumtask'
           value='medium' 
           checked={state.priority==='medium'}
             onChange={handleChange}
            />
          

           
            <label htmlFor="lowtask">Low:</label>
         <input type="radio"
          name='priority'
           id='lowtask'
               value='low' 
               checked={state.priority==='low'} 
                 onChange={handleChange}
            />
            </div>
             
             <div>
             <label htmlFor="duedate">Date:</label>
            <input type="datetime-local"
            id='duedate' 
             value={state.duedate} 
                onChange={handleChange}
             />
             </div>
             <button>{state.editId?'Update':'Add'} </button>
       </form>
        <Tasklist task={state.tasks} deletion={deletion} edit={edit} toggle={toggle} />
    </div>
  )
}

export default TaskManager
