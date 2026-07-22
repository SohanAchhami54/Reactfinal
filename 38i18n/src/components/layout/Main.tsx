import { Outlet } from "react-router-dom"
import Header from "./Header"

const Main = () => {
  return (
    <div className="bg-gray-800 text-white">
       <Header/>
         <main className="min-h-screen p-3">
            <Outlet/>
         </main>
    </div>
  )
}

export default Main
