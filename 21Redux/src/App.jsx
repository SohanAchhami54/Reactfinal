import React from 'react'
import Counter from './components/Counter'
import Cart from './components/Cart'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Items from './components/Items'
import Main from './components/layout/Main'

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>} >
        <Route  index element={<Counter/>} />
        <Route  path='/cart' element={<Cart/>} />
        <Route  path='/items' element={<Items/>} />
      </Route>
    )
  )
  return (
     <RouterProvider router={router} />
  )
}

export default App
