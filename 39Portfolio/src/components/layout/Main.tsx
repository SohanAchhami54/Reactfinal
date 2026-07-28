import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import LazyLoad from "../LazyLoad"

const Main = () => {
  return (
    <div className="text-white bg-gray-700">
       <Header/>
         <main className="min-h-screen pt-15 p-3">
             <LazyLoad>
                <Outlet/>
           </LazyLoad>
         </main>
        <Footer/>
          <ScrollRestoration/>
    </div>
  )
}

export default Main
