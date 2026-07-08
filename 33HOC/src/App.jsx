import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './components/Login'
import ProtectedDashboard from './components/Dashboard'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => { 
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
          <Route index  element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/contact'  element={<Contact/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/dashboard' element={
             <ErrorBoundary fallback={<h2 className='text-red-500 text-3xl'>Dashboard failed to load.</h2>}>
                  <ProtectedDashboard/>
             </ErrorBoundary>
            }/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}
export default App

