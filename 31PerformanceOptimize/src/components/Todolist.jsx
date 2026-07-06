import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../feature/todoSlice'
import TodoItem from './TodoItem'
import CounterButton from './CounterButton'

const Todolist = () => { 
    const dispatch=useDispatch() 
    const todos=useSelector(state=>state.todo.todos)  
    const [editingId,setEditingId]=useState(null) 
    // const [editedTitle,setEditedTitle]=useState('') 
    
    const [count,setCount]=useState(0)


    const handleToggle=useCallback((id)=>{
        dispatch(toggleTodo({id}))
    },[dispatch])


    const handleDelete=useCallback((id)=>{
        dispatch(deleteTodo({id}))
    },[dispatch])


    const handleEditClick=useCallback((id,newTitle)=>{
      if(editingId===id){
          dispatch(updateTodo({id,title:newTitle}))
          setEditingId(null)
         
      }else{
        setEditingId(id) 

      }
    },[dispatch,editingId])


    const handleIncrement=useCallback(()=>{
         setCount(prev=>prev+1)
    },[])

   console.log('Todolist')

   const todoListItems=useMemo(()=>{
        return   todos?.map((t)=>(   
              <TodoItem
               key={t.id}
               todo={t}
               isEditing={editingId===t.id} 
               onToggle={handleToggle}
               onDelete={handleDelete}
               onEditClick={handleEditClick}
              />
            ))
   },[todos, editingId, handleToggle, handleDelete, handleEditClick])

   return (
    <div className='flex flex-col gap-2  items-center mt-6'>
      <h1>This is Todolist.</h1>
      <CounterButton count={count} handleIncrement={handleIncrement} />
      <ul className='w-full  flex flex-col items-center gap-3 '>
        {todoListItems}
      </ul>
    </div>
  )
}

export default Todolist
