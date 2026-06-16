import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Axios } from '../api/todoapi'

const Todos = () => {
    const queryClient=useQueryClient()
    const query=useQuery({
        queryKey:['todos'],
        queryFn:async ()=>{
            const response=await Axios.get('/') 
            return response.data
        },
        staleTime:5*60*1000
    })
     
    const mutation=useMutation({
         mutationFn:async (newTodo)=>{
            const response= await Axios.post('/', newTodo)
            return response.data
         },
         onSuccess:(returnTodo)=>{
          queryClient.setQueryData(['todos'], (oldTodos = []) => {
          return [...oldTodos, returnTodo];
    });
         }
    })
    const {data,isLoading,isError}=query 
    const {isPending,mutate}=mutation


    if(isLoading) return <p>Loading please wait </p>
    if(isError) return <p className='text-4xl text-red-500'>Error occur please try again later. </p>
     console.log('the value of the todo data is:',data)

  return (
    <div className='bg-gray-700 min-h-screen'>
       <ul className='p-5 grid gap-5  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
            data?.map((d)=>(
                <li key={d.id} className='p-3 bg-gray-900 rounded-md'>
                    <div className='flex flex-col gap-3 bg-gray-800 rounded-md'>
                         <p>Title:{d.title} </p>
                         <p>userId:{d.userId} </p>
                    </div>
                  
                </li>
            ))
        }
       </ul>
       <button onClick={()=>{
           mutation.mutate({
            userId:new Date(),
            title:'Buy new Laptop',
           })
       }}
         className='ml-5 px-2 py-1 rounded-md bg-gray-900'>
            {isPending?'Adding Todo':'Add Todo'}
       </button>
    </div>
  )
}

export default Todos
