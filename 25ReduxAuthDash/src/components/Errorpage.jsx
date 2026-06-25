import React, { useEffect } from 'react'

const Errorpage = () => { 
    useEffect(()=>{
        window.history.replaceState(null,'','/')
    },[])
  return (
    <div>
        <span className='text-center text-4xl text-red-500'>404 Page not found</span>
    </div>
  )
}

export default Errorpage
