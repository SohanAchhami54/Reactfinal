import { useEffect, useState } from "react";
import { Axios } from "../api/axios";

function useFetch(city){
    const [data,setData]=useState('')
    const apikey=import.meta.env.VITE_OPENWEATHER_API_KEY

    useEffect(()=>{
        const fetchData=async()=>{
             try {
                const response=await Axios.get(`?q=${city}&appid=${apikey}`)
                setData(response.data) 

             } catch (error) {
                 console.log('error occur while fetching data')
             }
        }
        fetchData()
    },[city])

    return [data]
}

export {useFetch}