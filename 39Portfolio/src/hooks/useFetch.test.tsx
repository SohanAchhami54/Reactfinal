import { beforeEach, describe, expect, it, vi } from "vitest";
import { Axios } from "../api/weatherservice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import {renderHook, waitFor} from "@testing-library/react";
import { useFetch } from "./useFetch";


vi.mock('../api/weatherservice',()=>({
    Axios:{
        get:vi.fn() //factory function.
    }
}))


//createWrapper is just a helper that creates the real wrapper component.
const createWrapper=()=>{ 
    const queryClient=new QueryClient({
        defaultOptions:{
            queries:{
                retry:false
            }
        }
})
    return ({children}:{children:ReactNode})=>(
        <QueryClientProvider client={queryClient}>
            {children}  
        </QueryClientProvider>
    )
}

describe('useFetch',()=>{
    beforeEach(()=>{
         vi.clearAllMocks()
    })
  
 it('should fetch weather data successfully',async()=>{
     const mockData = {
      coord: {
        lon: 85.32,lat: 27.71,
      },
      weather: [{id: 800,description: "clear sky",},],
      main: { temp: 302,humidity: 55,pressure: 1012,},
      wind: { speed: 3.5,},
      sys: {country: "NP", sunrise: 111111,sunset: 222222,},
      name: "Kathmandu",
    };


    //it is typescript helper.
    vi.mocked(Axios.get).mockResolvedValue({
        data: mockData
    })
    
    //renderhook does not give place to put jsx, it only give wrapper option to us.
    //render our custom hook in testing environment and give us access what hook return 
    const { result } = renderHook(() => useFetch("Kathmandu"), {wrapper: createWrapper(),   // ← now correct
    })                                  


    await waitFor(()=>{
        expect(result.current[0]).toEqual(mockData)
    })

    expect(Axios.get).toHaveBeenCalledTimes(1) 
    
    expect(Axios.get).toHaveBeenCalledWith(
        expect.stringContaining("?q=Kathmandu")
    )
 })
})


// createWrapper()                    // 1. We call this
//   ↓
// returns a component                // 2. This component accepts children
//   ↓
// renderHook uses that component     // 3. It puts the hook inside as children