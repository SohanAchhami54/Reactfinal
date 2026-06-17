import React from 'react'
import Counter from './components/Counter'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-600 text-white p-3'>
      <h1 className='text-3xl'>This is redux toolkit. </h1>
      <div className='flex  flex-col gap-4'>
        <Counter/> 
       <Cart/>
      </div>
       
    </div>
  )
}

export default App
