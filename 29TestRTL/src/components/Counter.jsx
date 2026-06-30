import React, { useState } from 'react'

const Counterform = () => { 
  const [count,setCount]=useState(0)
  const handleCount=()=>{
     if(count<20){
        setCount(count+1)
     }
  }
  return (
    <div className='flex flex-col justify-center items-center gap-2 text-2xl'>
      <h1>Counter</h1>
      <button aria-label='incrementbutton'
       onClick={handleCount}
      className='px-2 py-1 bg-gray-800 rounded-lg '>Click  {count} </button>
    </div>
  )
}

export default Counterform
