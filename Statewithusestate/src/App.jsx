import React, { useState } from 'react'
import Child from './component/Child'
import Thememode from './component/Thememode'

const App = () => { 
  const [count,setCount]=useState(0)  
  const [isdark,setIsdark]=useState(0) //0 means light 
  console.log('the value of count is:',count) 
  console.log('the value of the isdark is:',isdark)
  return (
  
      <div className={`min-h-screen flex justify-center items-center flex-col p-2${isdark?'text-white bg-black':'text-black bg-white'}`}>

      <Child count={count} isdark={isdark} />
      
      <div className='flex gap-2'>
          <button onClick={()=>{
            if (count<20)  setCount(count+1)
          }}
           className=' p-1 bg-green-600 rounded-lg'
        >Increment</button>

          <button onClick={()=>{
            if(count>0) setCount(count-1)
          }}
           className=' p-1 bg-green-600 rounded-lg'
        >Decrement</button>
      </div>
    
      <Thememode isdark={isdark} setIsdark={setIsdark} />
    
    </div>
  )
}
export default App
