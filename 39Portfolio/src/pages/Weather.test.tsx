import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest"
import Weather from "./Weather"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"
import { useFetch } from "../hooks/useFetch" 
import userEvent from "@testing-library/user-event"

//whenever any file imports useFetch,don't give them the real one, give them a fake one instead. //replace real module at runtime.
vi.mock('../hooks/useFetch',()=>({
    useFetch:vi.fn()
}))

const mockedUseFetch=vi.mocked(useFetch)

function renderWithClient(ui:ReactNode){
    const queryclient=new QueryClient({
        defaultOptions:{
            queries:{
                retry:false
            }
        }
    })

    return render(
        <QueryClientProvider client={queryclient}>
            {ui}
        </QueryClientProvider>
    )
}
    
const mockWeatherData = {
  coord: { lon: 85.32, lat: 27.7 },
  main: {
    humidity: 60,
    pressure: 1012,
    temp: 300.15, // Kelvin -> should render as 27.0 °C
    sea_level: 1015,
  },
  name: "Kathmandu",
  sys: {
    country: "NP",
    sunrise: 1690000000,
    sunset: 1690040000,
  },
  wind: { speed: 3.5 },
  weather: [{ id: 800, description: "clear sky" }],
}



describe('Weather',()=>{
    beforeEach(()=>{
        //reset mock state before each test.
        mockedUseFetch.mockReset() 
        mockedUseFetch.mockReturnValue([undefined])
        localStorage.clear()    
    })
  
    // search bar and button 
    it('render the search bar and button',()=>{
        renderWithClient(<Weather/>) 
        expect(screen.getByRole('textbox',{name:/enter city name/i})).toBeInTheDocument() 
        expect(screen.getByRole('button',{name:/search button/i})).toBeInTheDocument()
    })
   
    // page heading and default city 
    it('render the page heading and default city',()=>{
       renderWithClient(<Weather/>) 
       expect(screen.getByText(/this is example of axios/i)).toBeInTheDocument()
       expect(screen.getByText(/city:\s*kathmandu/i)).toBeInTheDocument()
    })

     //store city in localstorage
    it('stores city in localStorage',()=>{
        localStorage.setItem('cityname','pokhara') 
        renderWithClient(<Weather/>) 
        expect(screen.getByText(/city:\s*pokhara/i)).toBeInTheDocument() 
    })

   //loads city from localstorage 
    it('loads city from localstorage',()=>{
        renderWithClient(<Weather/>)
        expect(localStorage.getItem('cityname')).toBe('kathmandu')
    })


    //update the city after submitting and then input clears
    it('updates city and clear input after submitting the form',async()=>{
        const user=userEvent.setup()     
        renderWithClient(<Weather/>)
        const input=screen.getByRole('textbox',{name:/enter city name/i}) 
        await user.type(input,'london') 
        
        await user.click(screen.getByRole('button',{name:/search button/i})) 
        
        expect(screen.getByText(/city:\s*london/i)).toBeInTheDocument() 
        expect(input).toHaveValue('')
    })

    //does no submit when name and phone is missing 
    it('does not submit when city is missing',async()=>{
        const user=userEvent.setup() 
        renderWithClient(<Weather/>) 
         
        await user.click(screen.getByRole('button',{name:/search button/i}))  
        expect(screen.getByText(/city:\s*kathmandu/i)).toBeInTheDocument()

        expect(screen.getByRole('textbox',{name:/enter city name/i})).toHaveValue('')
    })


    //renders weather data 
    it('renders weather data when useFetch returns data',()=>{
        mockedUseFetch.mockReturnValue([mockWeatherData]) 

        renderWithClient(<Weather/>) 

        expect(screen.getByText(/humidity:\s*60/i)).toBeInTheDocument() 
        expect(screen.getByText(/country:\s*np/i)).toBeInTheDocument() 
        expect(screen.getByText(/clear sky/i)).toBeInTheDocument()
    })
})