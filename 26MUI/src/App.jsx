import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Main from './layout/Main'
import Dashboard from './pages/Dashboard'
import Customer from './pages/Customer'
import Order from './pages/Order'
import Product from './pages/Product'
import Transaction from './pages/Transaction'
import GoalTarget from './pages/GoalTarget'
import SalesPerformance from './pages/SalesPerformance'
import Marketing from './pages/Marketing'
import HelpCenter from './pages/HelpCenter'
import Setting from './pages/Setting'
const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>} >
          <Route index element={<Dashboard/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
          <Route path='/goaltarget' element={<GoalTarget/>}/>
          <Route path='/salesperformance' element={<SalesPerformance/>}/>
          <Route path='/marketing' element={<Marketing/>}/>
          <Route path='/helpcenter' element={<HelpCenter/>}/>
          <Route path='/setting' element={<Setting/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App
