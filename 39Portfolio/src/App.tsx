import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import Main from "./components/layout/Main"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Error from "./components/Error"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"
import Weather from "./pages/Weather"
import BlogDetail from "./components/BlogDetail"
import Blog from "./pages/Blog"

const queryclient=new QueryClient()
const App = () => { 
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
          <Route index  element={<Blog/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='blog/:id' element={<BlogDetail/>}/>
          <Route path='weather' element={<Weather/>}/>
          <Route path='*' element={<Navigate to='/dashboard' replace/>} />
         </Route>
        <Route path="/contact" element={<Contact/>} />
        
        <Route path="/login" element={<PublicRoute> <Login/></PublicRoute>}/>

        <Route path="*" element={<Error/>} />
      </Route>
    )
  )
  return (
    <QueryClientProvider client={queryclient}>
         <RouterProvider router={router}/>
    </QueryClientProvider>
   
  )
}
export default App
