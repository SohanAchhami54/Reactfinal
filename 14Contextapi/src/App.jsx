import React from 'react'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";
import Main from './components/layout/Main';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Dashboard from './components/dashboard/Dashboard';
import Customer from './components/dashboard/Customer';
import Inventory from './components/dashboard/Inventory';
import Sales from './components/dashboard/Sales';
import Market from './components/dashboard/Market';
import ProtectedRoute from './components/ProtectedRoute';
import Errorpage from './pages/Errorpage';
const App = () => {

   const router=createBrowserRouter(
     createRoutesFromChildren(
        <Route path='/' element={<Main/>} >
             <Route index element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>

             <Route element={<ProtectedRoute/>}>
             <Route path='/dashboard' element={<Dashboard/>}>
                 <Route index  element={<Customer/>}/>
                  <Route path='inventory'  element={<Inventory/>}/>
                  <Route path='market'  element={<Market/>}/>
                  <Route path='sales'  element={<Sales/>}/>
             </Route>
              
             </Route>
             <Route path='*' element={<Errorpage/>} />
        </Route>
     )

   )
  return (
     <RouterProvider router={router} />
  )
}

export default App
