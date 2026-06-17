import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset } from '../features/counterSlice'


const Counter = () => {
    const dispatch=useDispatch()
    const counter=useSelector(state=>state.counter)
  return (
    <div>
      <h1>This is Counter: {counter.value} </h1>
      <div className='flex gap-3'>
        <button onClick={()=>dispatch(increment())}> Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    </div>
  )
}

export default Counter
