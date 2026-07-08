import React from 'react'
import { useSelector } from 'react-redux'
import withAuth from '../hoc/withAuth'


const Dashboard = () => { 
    const auth=useSelector(state=>state.auth)   
    // throw new Error('Testing Environment')
   return (
    <div>
      <h1>This is dashboard</h1> 
       <span>{auth.user.email} </span>
    </div>
  )
}

const ProtectedDashboard=withAuth(Dashboard) 
export default ProtectedDashboard
