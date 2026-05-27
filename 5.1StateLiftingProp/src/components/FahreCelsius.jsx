import React from 'react'

const FahreCelsius = ({
    title, 
    value,
    ontemperatureChange 

}) => {
  return (
    <div>
        <h1>{title}</h1>
       <input type="number"
        value={value} 
        onChange={(e)=>ontemperatureChange && ontemperatureChange(e.target.value)}  
        className='outline-none border focus:ring-2 px-3 py-2  rounded-lg'
        />
    </div>
  )
}

export default FahreCelsius
