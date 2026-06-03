import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Main from './components/layout/Main';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogDetail from './components/BlogDetail';

const router = createBrowserRouter( //it acts as a blueprint and read entire structure first.
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route index element={<Home />} />  
      <Route path='/about' element={<About />} />  
      <Route path='/blog' element={<Blog />} />  
      <Route path='/blog/:id' element={<BlogDetail />}/>  
      <Route path='/contact' element={<Contact />} />   
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App