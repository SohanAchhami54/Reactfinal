import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'
import Header from './components/layout/Header'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'



  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Main/>}>
              <Route index element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
        </Route>
    )
  )
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App

