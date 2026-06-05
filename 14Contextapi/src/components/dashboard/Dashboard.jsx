import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => { 
  const isActive=({isActive})=>{
    return `${isActive?'text-blue-700':''} font-semibold`
  }
  return (
    <div className='flex gap-10'>
         <div className=' flex flex-col gap-5 p-4 '>
            <NavLink className={isActive} to={'/dashboard'} end>Customer</NavLink>
            <NavLink  className={isActive} to={'/dashboard/inventory'}>Inventory</NavLink>
            <NavLink  className={isActive} to={'/dashboard/market'}>Market</NavLink>
            <NavLink  className={isActive} to={'/dashboard/sales'}>Salesinfo</NavLink>
          </div>

           <div className='flex-1 '>
                 <Outlet/>
           </div>
        
  
    </div>
  )
}

export default Dashboard
