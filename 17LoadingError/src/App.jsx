import React,{useState,useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import { useFetch } from './hooks/useFetch'
import Task from './components/Task'
import SkeletonCard from './components/SkeletonCard'
const App = () => {

   const [searchcity,setSearchCity]=useState('london')
   const [inputcity,setInputCity]=useState('')

   const {data,status,setStatus}=useFetch(searchcity)

   const handleSubmit=(e)=>{
    e.preventDefault() 
    if(!inputcity) return 
      setSearchCity(inputcity)
       setInputCity('')
  }

  console.log('the weather data is:',data)



  return (
    <div className='p-2 min-h-screen flex flex-col items-center gap-4  bg-gray-900 text-yellow-50'>
      <h1 className='text-6xl text-center py-3'>This is example of loading and error.</h1>
       <p className='text-5xl text-center py-3'>City name: {data?.city?.name} </p>
         <form onSubmit={handleSubmit}
          className='w-full max-w-md'>
          <label htmlFor="city">
             <input type="text" 
             value={inputcity}
             onChange={(e)=>setInputCity(e.target.value)}
             placeholder='Enter city name'
             className=' w-full py-2 outline-none border focus:ring-2 rounded-sm' />
          </label>
          </form>
         {/* loading  */}
          {status === 'loading' && (
          <div className='flex flex-wrap justify-center items-center gap-5 p-3'>
            {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
           )}
         
        {/* error  */}
         {status === 'error' && (
          <div className='text-red-400 text-2xl text-center mt-10'>
             {error}
           </div>
         )}
      {status==='success'&& data?.list && (
        <ul className='flex flex-wrap justify-center items-center gap-5 p-3 '>
            {
            data?.list?.slice(0,8).map((d)=>(
              <Task d={d} />
            
            ))
          }  
        </ul>
        )}
    </div>
  )
}
export default App
