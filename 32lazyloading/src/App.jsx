import React, { lazy } from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}  from 'react-router-dom'
import Main from './components/layout/Main' 

//split code and when to fetch.
const Home=lazy(()=>import('./components/Home')) 
const About=lazy(()=>import('./components/About')) 
const Contact=lazy(()=>import('./components/Contact')) 
const Dashboard=lazy(()=>import('./components/Dashboard')) 

const App = () => { 
  const router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
   )
)
  return (
    <RouterProvider router={router}/>
  )
}
export default App
