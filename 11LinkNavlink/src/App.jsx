import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Main from './component/layout/Main';
import Form from './component/Form';
import Success from './component/Success';
const App = () => {
  return (
    <div>
         <Routes>
           <Route path='/' element={<Main/>}>
               <Route index element={<Home/>} />
               <Route path='/about' element={<About/>} />
               <Route path='/form' element={<Form/>} />
               <Route path='/success' element={<Success/>} />
           </Route>
         </Routes>
    </div>
  )
}

export default App
