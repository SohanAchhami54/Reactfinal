import React from 'react'

import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Main from './components/layout/Main'
import Form from './pages/Form'
import Counter from './pages/Counterpage'
import Usercard from './pages/Usercard'
import Home from './pages/Home'

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Main/>}>
            <Route index element={<Home/>}/> 
             <Route path='/usercard' element={<Usercard/>}/>
             <Route path='/counter' element={<Counter/>} /> 
             <Route path='/form' element={<Form/>} />
        </Route>
    )
  )
  return (
   <RouterProvider router={router}/>
  )
}

export default App
