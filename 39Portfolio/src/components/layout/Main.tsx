import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Main = () => {
  return (
    <div className="text-white bg-gray-700">
       <Header/>
         <main className="min-h-screen pt-15 p-3">
            <Outlet/>
         </main>
         <Footer/>
          <ScrollRestoration/>
    </div>
  )
}

export default Main
