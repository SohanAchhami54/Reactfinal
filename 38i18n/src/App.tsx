import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Main from "./components/layout/Main"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
   <RouterProvider router={router}/>
  )
}

export default App
