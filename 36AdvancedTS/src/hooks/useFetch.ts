import { useEffect, useState } from "react";

function useFetch<T>(url:string){
    const [data,setData]=useState<T|null>(null) 
    const [loading,setLoading]=useState(false) 
    const [error,setError]=useState('')

    useEffect(()=>{
       setLoading(true) 
       fetch(url)
       .then(res=>res.json())
       .then(res=>{
         setData(res)
         setLoading(false)
       })
       .catch(err=>{
        setError(err.message) 
        setLoading(false)
       })

    },[url])
    return {loading,data,error}
}

export {useFetch}