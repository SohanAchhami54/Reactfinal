import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset } from '../features/counterSlice'


const Counter = () => {
    const dispatch=useDispatch()
    const counter=useSelector(state=>state.counter)
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <h1>This is Counter: {counter.value} </h1>
      <div className='flex items-start   gap-3'>
        <button className='bg-gray-800 px-2 py-1 rounded-md'
         onClick={()=>dispatch(increment())}> Increment</button>
        <button   className='bg-gray-800 px-2 py-1 rounded-md'
         onClick={()=>dispatch(decrement())}>Decrement</button>
        <button  className='bg-gray-800 px-2 py-1 rounded-md'
         onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    </div>
  )
}

export default Counter
