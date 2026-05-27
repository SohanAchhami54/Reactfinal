import React, { useState } from 'react'
import FahreCelsius from '../components/FahreCelsius'

const Temperature = () => { 
    const [fahren,setFahren]=useState('') 
    const [celsius,setCelsius]=useState('') 

    const handleFahrenChange=(data)=>{
          setFahren(data) 
          if(data==='') {
            setCelsius('') 
            return 
        }
          setCelsius((data-32)*(5/9))
    }

    const handleCelsiusChange=(data)=>{
        setCelsius(data)
        if(data===''){
            setFahren('') 
            return 
        }
        setFahren((data*(9/5))+32)
    }
    

    return (
    <div className='flex flex-col justify-center items-center gap-4 max-w-3xl mx-auto bg-gray-500 py-10'>
     <h1 className='text-xl font-semibold'>This is example of temperature converter. </h1>
      <FahreCelsius 
        title='Fahrenheit'
        value={fahren}
         ontemperatureChange={(data)=>handleFahrenChange(data)}
      />

       <FahreCelsius 
        title='Celsius'
         value={celsius}
         ontemperatureChange={(data)=>handleCelsiusChange(data)}
         />

       <h1>({fahren?fahren:0}-32)*(5/9)={celsius?celsius:0} </h1>
    </div>
  )
}

export default Temperature
