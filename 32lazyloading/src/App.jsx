import React, { lazy } from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}  from 'react-router-dom'
import Main from './components/layout/Main' 
import LazyLoad from './components/LazyLoad'

//split code and when to fetch.
const Home=lazy(()=>import('./components/Home')) 
const About=lazy(()=>import('./components/About')) 
const Contact=lazy(()=>import('./components/Contact')) 
const Dashboard=lazy(()=>import('./components/Dashboard')) 

const App = () => { 
  const router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Main/>}>

          <Route index element={<LazyLoad><Home/></LazyLoad>}/>

          <Route path='/about' element={<LazyLoad><About/></LazyLoad>}/>

          <Route path='/contact' element={<LazyLoad><Contact/></LazyLoad>}/>

          <Route path='/dashboard' element={<LazyLoad><Dashboard/></LazyLoad>}/>
        </Route>
   )
)
  return (
    <RouterProvider router={router}/>
  )
}
export default App
