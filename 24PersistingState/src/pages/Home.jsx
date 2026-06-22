import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => { 
    const {user}=useSelector(state=>state.auth)
   return (
    <div className='min-h-screen flex flex-col gap-3 justify-center items-center'>
      <h1 className='text-center'>This is home page.</h1>
      <p>User name: {user?user.email:''} </p>
       
    </div>
  )
}

export default Home
