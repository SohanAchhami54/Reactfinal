import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Main from './components/layout/Main'
import Login from './pages/Login'
import Profile from './pages/Profile'
import PublicRoute from './components/PublicRoute'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import ErrorPage from './components/ErrorPage'
const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>} >
        <Route index element={<Home/>} />

        <Route path='/login' element={
          <PublicRoute>
              <Login/>
          </PublicRoute>
         }/>
        <Route path='/profile' element={
          <ProtectedRoute>
                   <Profile/>
          </ProtectedRoute>

          }/>
          <Route path='*' element={<ErrorPage/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
