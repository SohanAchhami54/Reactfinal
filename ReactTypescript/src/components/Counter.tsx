import { useCallback, useState } from "react"

const Counter = () => { 
    const [count,setCount]=useState<number>(0) 
     
    const handleCount=useCallback(()=>{
         setCount(count+1)
    },[count])
   return (
    <div>
      <button onClick={handleCount}
      >Count: {count} </button>
    </div>
  )
}

export default Counter
