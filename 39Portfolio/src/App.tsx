import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Main from "./components/layout/Main"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"
import Weather from "./pages/Weather"
import { lazy } from "react"


const Home=lazy(()=>import('./pages/Home.tsx'))  
const About=lazy(()=>import('./pages/About.tsx'))
const Dashboard=lazy(()=>import('./pages/Dashboard.tsx')) 
const Contact=lazy(()=>import('./pages/Contact.tsx')) 
const Login=lazy(()=>import('./pages/Login.tsx')) 
const Error=lazy(()=>import('./components/Error.tsx')) 
const Blog=lazy(()=>import('./pages/Blog.tsx')) 
const BlogDetail=lazy(()=>import('./components/BlogDetail.tsx'))


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
