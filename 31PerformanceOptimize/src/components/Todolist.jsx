import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../feature/todoSlice'

const Todolist = () => { 
    const dispatch=useDispatch() 
    const todos=useSelector(state=>state.todo.todos)  
    const [editingId,setEditingId]=useState(null) 
    const [editedTitle,setEditedTitle]=useState('')

   return (
    <div className='flex flex-col gap-2  items-center mt-6'>
      <h1>This is Todolist.</h1>
      <ul className='w-full  flex flex-col items-center gap-3 '>
        {
            todos?.map((t)=>(   
                 <li key={t.id} className='flex  gap-1 w-full max-w-3xl bg-gray-600 rounded-md p-2'>
                     <div className='flex flex-col sm:flex-row justify-between items-center gap-3 w-full'>
                        <div>
                        <input type="checkbox"
                        checked={t.completed}
                        onChange={()=>{
                        dispatch(toggleTodo({id:t.id}))
                        }}
                     />
                     <span className={t.completed?'line-through':''}>
                      Title: 
                      <input type="text"
                       value={editingId===t.id?editedTitle:t.title} 
                       onChange={(e)=>setEditedTitle(e.target.value)}
                       disabled={!editingId} 
                       className={`w-40 md:w-60 ${t.completed?'line-through':''}`}
                       />
                      </span> 
                     
                     </div>

                      <div className='flex gap-2'>
                      <button 
                      disabled={t.completed}
                       onClick={()=>{
                          if(editingId){
                             dispatch(updateTodo({id:t.id,title:editedTitle}))
                             setEditingId(null) 
                             setEditedTitle('')
                          }else{
                             setEditingId(t.id) 
                             setEditedTitle(t.title)
                          }
                       }}
                       className='px-2 py-1 bg-blue-700 rounded-md'>
                         {editingId?'Update':'Edit'}
                       </button>
                      <button onClick={()=>{
                        dispatch(deleteTodo({id:t.id}))
                      }}
                       className='px-2 py-1 bg-red-700 rounded-md'>Delete</button>
                      </div>

                     </div>
                     
                </li>
            
            ))
        }
      </ul>
    </div>
  )
}

export default Todolist
