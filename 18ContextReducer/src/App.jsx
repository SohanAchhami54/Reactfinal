import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import CardComponent from './components/CardComponent'
import Main from './components/layout/Main'
import MainCard from './pages/MainCard'
import Cart from './pages/Cart'

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
         <Route index element={<MainCard/>} />
         <Route path='/cart' element={<Cart/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
