import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Main } from './components/layout'
import Home from './pages/Home'
import About from './pages/About'
import Task from './pages/Task'
import Notfound from './pages/Notfound'
import AboutMe from './pages/AboutMe'


const App = () => {  
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>} >
           <Route  index element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/task' element={<Task/>}/>
           <Route path='/me' element={<AboutMe/>}/>
           <Route path='*' element={<Notfound/>}/>
      </Route>
    )

  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
