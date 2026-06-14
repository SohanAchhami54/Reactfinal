import React from 'react'

const WeatherData = ({d}) => {
  return (
       <li  className='bg-gray-800 p-4 rounded-lg'>
                <div className='flex flex-col gap-3 p-3 bg-gradient-to-r from-gray-700 via-25% to-gray-800 rounded-lg'>
                 <p className='bg-gray-800 py-1 flex items-center gap-2'>
                  <span className='w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center'>Date:</span> {d.dt_txt}
                  </p>
                 <p>Temperature: {d.main.temp} </p>
                 <p>Temperature Maximal : {(( d.main.temp_max)-273.15).toFixed(2)} </p>
                 <p>Temperature Minimal: {((d.main.temp_min)-273.15).toFixed(2)} </p>
                 <p className='bg-gray-800 py-1'>At.Pressure on Sea level: {(d.main.pressure)*100} pa </p>
                 <p className='bg-gray-800 py-1'>At.Pressure on Ground level: {(d.main.sea_level)*100} pa </p>
                  <div className='flex gap-3'> 
                 <p className='bg-gray-800 py-1'>Humidity: {d.main.humidity} </p>
                 <p className='bg-gray-800 py-1'>WeatherMain: {d.weather[0].main} </p>
                 </div>
                 <p className='bg-gray-800 py-1'>WeatherDescription: {d.weather[0].description}</p>
                 <p className='bg-gray-800 py-1'>Cloud Coverage: {d.clouds.all}% </p>
                   <div className='flex gap-3'>
                   <p>WindDegree: {d.wind.deg} </p>
                   <p>WindGust: {d.wind.gust} </p>
                   </div>
                   <p>WindSpeed: {d.wind.speed} </p>
                   </div>
              </li>
  )
}

export default WeatherData
