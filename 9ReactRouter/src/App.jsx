import React from 'react'
import { Routes, Route } from "react-router";
import Home from './components/Home/Home';
import About from './components/About/About';
import Notfound from './components/NotFound/Notfound';

const App = () => {
  return (
    <div className='bg-[#52796f] min-h-screen p-3'>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path='/*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App
