import React from 'react'
import {useNavigate} from 'react-router-dom'
const About = () => { 
    const navigate=useNavigate()
  return (
    <div>
      <h1>This is about page</h1>
       <button onClick={()=>navigate(-1)}
       className='px-2 py-1 bg-gray-600'>Go back </button>
    </div>
  )
}

export default About
