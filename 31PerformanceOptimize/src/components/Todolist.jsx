import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../feature/todoSlice'
import TodoItem from './TodoItem'
import CounterButton from './CounterButton'

const Todolist = () => { 
    const dispatch=useDispatch() 
    const todos=useSelector(state=>state.todo.todos)  
    const [editingId,setEditingId]=useState(null) 
    const [editedTitle,setEditedTitle]=useState('') 
    
    const [count,setCount]=useState(0)


    const handleToggle=useCallback((id)=>{
        dispatch(toggleTodo({id}))
    },[dispatch])


    const handleDelete=useCallback((id)=>{
        dispatch(deleteTodo({id}))
    },[dispatch])


    const handleEditClick=useCallback((todo)=>{
      if(editingId){
          dispatch(updateTodo({id:todo.id,title:editedTitle}))
          setEditingId(null)
          setEditedTitle('')
      }else{
        setEditingId(todo.id) 
        setEditedTitle(todo.title)
      }
    },[dispatch,editingId,editedTitle])


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
               editedTitle={editedTitle} 
               onToggle={handleToggle}
               onDelete={handleDelete}
               onEditChange={setEditedTitle}
               onEditClick={handleEditClick}
              />
            ))
   },[todos, editingId, editedTitle, handleToggle, handleDelete, handleEditClick])

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
