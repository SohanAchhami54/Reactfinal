import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between text-xs md:text-base py-3 px-2 bg-gray-700'>
       <p>Task Manager</p>
       <p>{new Date().getFullYear()} @ CopyRight</p>
    </div>
  )
}

export default Footer
