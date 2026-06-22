import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
           <Route index element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/login' element={<Login/>}/>
      </Route>
    )
  )
  return (
     <RouterProvider router={router}/>
  )
}

export default App
