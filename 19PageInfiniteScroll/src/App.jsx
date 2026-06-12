import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import InfiniteScroll from './pages/InfiniteScroll'
import About from './pages/About'
import Main from './components/layout/Main'

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
          <Route index element={<InfiniteScroll/>} />
          <Route path='/about' element={<About/>} />
      </Route>
    )
  )
  return (
     <RouterProvider router={router} />
  )
}

export default App
