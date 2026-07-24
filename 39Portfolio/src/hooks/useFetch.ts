import { useQuery } from "@tanstack/react-query"
import { Axios } from "../api/weatherservice"
import type { WeatherType } from "../types.ts"

function useFetch(city:string){
     const apikey=import.meta.env.VITE_OPENWEATHER_API_KEY 

     const {data}=useQuery<WeatherType>({
        queryKey:['weather',city],
        queryFn:async ()=>{
            const response=await Axios.get(`?q=${city}&appid=${apikey}`) 
            return response.data
        }
     })
     return [data]
}

export {useFetch}