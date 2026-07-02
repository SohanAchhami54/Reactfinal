import React from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useDispatch} from 'react-redux'
import { addTodo } from '../feature/todoSlice'


const todoSchema=z.object({
   todoinput:z.string()
   .min(1,'Todo is required')
   .min(6,'Todo must be greater than 6 length')
   
})

const Todoform = () => {  
    const dispatch=useDispatch() 
    const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm({
          resolver:zodResolver(todoSchema),
          mode:'onChange'
    })
    
    const onsubmit=(data)=>{
        dispatch(addTodo({title:data.todoinput,completed:false}))
        reset()
    }

  return (
    <div>
       <form onSubmit={handleSubmit(onsubmit)}
        className=' mx-auto max-w-3xl bg-gray-900 py-4 px-3 rounded-md flex flex-col md:flex-row gap-3 md:items-center'>
         <label htmlFor="todoinput">Todo:</label>
         <input type="text"
         id='todoinput'
         {...register('todoinput')} 
         placeholder='Enter the todo' 
         aria-label='Enter the todo'
         className='flex-1 py-1 outline-none border-1 focus:ring-2 rounded-md'
         />
         <button className='py-1 px-2 rounded-md bg-gray-600'>
            {isSubmitting?'Adding...':'Add'}
         </button>
      </form>
    </div>
  )
}

export default Todoform
