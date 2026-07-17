import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./Header"

const Main = () => {
  return (
    <div className="text-white bg-gray-800">
      <Header/>
        <main className=" min-h-screen p-2">
            <Outlet/>
        </main>
        <ScrollRestoration/>
    </div>
  )
}

export default Main
