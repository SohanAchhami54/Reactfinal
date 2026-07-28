import { Outlet } from "react-router-dom"
import Dashside from "./Dashside"
import LazyLoad from "../LazyLoad"

const Dashmain = () => {
  return (
    <div className="flex flex-row gap-2 pt-1">
     <Dashside/>
       <div className="flex-1">
           <LazyLoad>
               <Outlet/>
           </LazyLoad>
           
       </div>
       
    </div>
  )
}

export default Dashmain
