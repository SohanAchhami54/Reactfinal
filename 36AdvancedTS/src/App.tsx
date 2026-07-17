import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Main from "./components/layout/Main"
import Home from "./pages/Home"
import User from "./pages/User"
import Todo from "./pages/Todo"
import Login from "./pages/Login"
import ErrorHandle from "./components/ErrorHandle"

const App = () => { 
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main/>} >
       <Route index element={<Home/>} />
       <Route path='/todo' element={<User/>}/>
       <Route path='/user' element={<Todo/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='*' element={<ErrorHandle/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
