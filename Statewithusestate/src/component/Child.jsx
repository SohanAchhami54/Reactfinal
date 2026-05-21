import React from 'react'

const Child = ({count,isdark}) => {
  return (
    <div className={`${isdark?'text-white bg-black':'text-black bg-white'} flex gap-2`}>
      <h1 className='text-2xl'>Counter:{count} </h1>
      <h1 className='text-2xl'>Counter:{count} </h1>
    </div>
  )
}

export default Child
