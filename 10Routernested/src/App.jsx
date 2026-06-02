import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProfileLayout from './components/ProfileLayout';
import Profile from './components/Profile';
import Home from './components/Home';
import Detail from './components/Detail';
import Post from './components/Post';
import Layout from './components/layout/Layout';
import About from './components/About';
import NotFound from './components/NotFound';
const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='/about' element={<About/>}/> 
          <Route path='/user/:id' element={<ProfileLayout/>}>
               <Route index element={<Detail/>} />
               <Route path='detail' element={<Detail/>} />
               <Route path='post' element={<Post/>} />
          </Route>
              
          </Route>
         <Route path='*' element={<NotFound/>} />
      </Routes>

  )
}

export default App
