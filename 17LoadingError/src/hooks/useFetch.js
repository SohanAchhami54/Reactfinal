import {useState,useEffect} from 'react'

  const useFetch=(searchcity)=>{

  const [data, setdata] = useState(null)
  const [status, setStatus] = useState('idle') 
  const [error,setError]=useState(null)

 
    const fetchWeather=()=>{ 
      //remove the old state.
       setStatus('loading')
       setdata(null)
       setError(null)
       setTimeout(()=>{
            fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${searchcity}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`)
       .then(res=>res.json())
       .then(res=>{
        const cod=String(res.cod)
         if(cod==='404' || cod==='400'){
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

  return {data,status,setStatus,error}

}
  

export {useFetch}