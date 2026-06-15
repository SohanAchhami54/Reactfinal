import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Blogpost from './components/Blogpost'
import Main from './components/layout/Main'
import Blog from './pages/Blog'
import Home from './pages/Home'
import BlogDetail from './components/BlogDetail'

const queryClient=new QueryClient() 
const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
         <Route index element={<Home/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/blog/:id' element={<BlogDetail/>} />
      </Route>
    )
  )
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}
export default App
