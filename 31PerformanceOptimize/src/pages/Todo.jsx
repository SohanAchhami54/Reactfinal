import React from 'react'
import Todolist from '../components/Todolist'
import Todoform from '../components/Todoform'

const Todo = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1>Todo</h1>
      <Todoform/>
      <Todolist/>
    </div>
  )
}

export default Todo
