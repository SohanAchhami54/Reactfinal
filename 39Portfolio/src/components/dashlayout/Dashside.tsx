import { NavLink, type NavLinkRenderProps } from "react-router-dom"
import { FaBloggerB } from "react-icons/fa"
import { TiWeatherStormy } from "react-icons/ti"

const Dashside = () => { 
  const isActive=({isActive}:NavLinkRenderProps)=>{
      return isActive?'text-red-500 flex items-center justify-center gap-2 ':'flex items-center justify-center gap-2'
  }
  return (
    <div className="flex flex-col items-start gap-2 min-h-screen bg-gray-800 p-2 md:p-4 rounded-md">
       
         <NavLink className={isActive} to='blog'>
          <span className="hidden md:flex">Blog</span>
          <FaBloggerB />
          </NavLink>
      
       <NavLink className={isActive} to='weather'>
        <span className="hidden md:flex"> Weather</span>
        <TiWeatherStormy/>
       </NavLink>
    </div>
  )
}

export default Dashside
