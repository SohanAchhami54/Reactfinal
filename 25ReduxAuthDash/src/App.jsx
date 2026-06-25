import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Post from './pages/Post'
import Main from './components/layout/Main'
import { useSelector } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import Errorpage from './components/Errorpage'
const App = () => {
 
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>} >
         <Route index element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/login' element={
          <PublicRoute>
               <Login/>
          </PublicRoute>
          } />
         <Route path='/post' element={
            <ProtectedRoute>
                 <Post/>
            </ProtectedRoute>
         
          } />
          <Route path='*' element={<Errorpage/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App
