import React, { useState } from 'react'

const CounterButton =React.memo(({count,handleIncrement}) => {  
    console.log('this is button components.')
    return (
    <div>
       <button onClick={handleIncrement}
        className='px-2 py-1 bg-gray-600 rounded-md'>Counter: {count} </button>
    </div>
  )
})

export default CounterButton
