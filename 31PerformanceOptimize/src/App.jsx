import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'
import Home from './pages/Home'
import About from './pages/About'
import Todo from './pages/Todo'

const App = () => { 
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
         <Route index element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/todo' element={<Todo/>}/>
      </Route>
    )
  )
  return (
     <RouterProvider router={router}/>
  )
}

export default App
