import React, { useState } from 'react'

const StateLifting = ({title,children,isActive,onShow}) => { 
  return (
      <>
      <div className='flex flex-col justify-center items-center '>
        <span>
        {
            isActive?(
                <>
                  {children}
                </>
            ):(
                <>
                   {title}
                </>
            )
        }
        </span>
          <button onClick={onShow}
            className='text-lg font-semibold'
            > Show </button>
            </div>
      </>
      
  )
}

export default StateLifting
