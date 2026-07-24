import { Outlet } from "react-router-dom"
import Dashside from "./Dashside"

const Dashmain = () => {
  return (
    <div className="flex flex-row gap-2 pt-1">
     <Dashside/>
       <div className="flex-1">
            <Outlet/>
       </div>
       
    </div>
  )
}

export default Dashmain
