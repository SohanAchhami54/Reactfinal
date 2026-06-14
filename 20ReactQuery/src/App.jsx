import React from 'react'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Weather from './components/Weather'
import Todos from './components/Todos'
import Main from './components/layout/Main'

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Main/>}>
           <Route index element={<Weather/>} />
           <Route path='/todos' element={<Todos/>} />
        </Route>
    )
  )
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
