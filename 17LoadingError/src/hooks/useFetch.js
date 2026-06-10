import {useState,useEffect} from 'react'

  const useFetch=(searchcity)=>{

  const [data, setdata] = useState('')
  const [status, setStatus] = useState('idle') 
  const [error,setError]=useState(null)

 
    const fetchWeather=()=>{ 
      //remove the old state.
       setStatus('loading')
       setdata('')
       setError('')
       setTimeout(()=>{
            fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${searchcity}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`)
       .then(res=>res.json())
       .then(res=>{
         if(res.cod==='404' || res.cod==='400'){
           setError(`City ${searchcity} not found`) 
           setStatus('error')
           return
         }
        setdata(res);
        setStatus('success')
       
      }) 
       .catch(err=>{
        setError('Error occur while fetching the weather api')
        setStatus('error')
    
      })
      },3000)
    }


  useEffect(()=>{
    fetchWeather()
  },[searchcity])

  return {data,status,setStatus}

}
  

export {useFetch}