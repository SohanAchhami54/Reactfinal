import { useEffect, useState } from "react";

 function useFetch(url){
    const [data,setData]=useState('')
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res) 
            setLoading(false)
        }) 
         .catch((err)=>{
            setError(err.message) 
            setLoading(false)
         })
    },[url])
    return {data,setData,loading,setLoading,error,setError}   
}
export {useFetch}