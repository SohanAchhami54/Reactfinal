import React, {useEffect} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
const Success = () => {
    const navigate=useNavigate()
    const location=useLocation()

    const name=location?.state?.name

    useEffect(()=>{
        if(!name){
            navigate('/') 
        }
    },[name,location])
    
  return (
    <div className='flex flex-col items-center justify-center '>
         <h1 className='text-2xl '>Success</h1> 
          <span> {name} </span>
    </div>
  )
}

export default Success
