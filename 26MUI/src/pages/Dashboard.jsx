import React from 'react'
import PrimarySearchAppBar from '../ui/DashHeader'
import DashRevenue from '../ui/DashRevenue';
import RevenueChart from '../ui/RevenueChart';
import DashHeader from '../ui/DashHeader';
import TopSales from '../ui/TopSales';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-2'>
       <DashHeader/>
         <div className=' flex flex-col gap-1 mx-3 my-2'>
           <h1 className='text-lg font-medium'>Your Store at a Glance</h1>
           <p className='text-neutral-500'>Real-time snapshot of revenue, orders, and Customers </p>
            <DashRevenue/>
         </div>

         <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
             <RevenueChart/>
             <TopSales/>
         </div>
        
       
    </div>
  )
}

export default Dashboard
