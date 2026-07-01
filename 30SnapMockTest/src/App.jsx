import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Main from './components/layout/Main'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'

const queryClient=new QueryClient()
const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
          <Route index element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/blogpost' element={<Blog/>}/> 
      </Route>
    )
  ) 
 
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
   </QueryClientProvider>
  )
}

export default App
