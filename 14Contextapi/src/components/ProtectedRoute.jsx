import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => { 
    const {isLogin}=useAuth()

   if(!isLogin){
    return (
        <Navigate to={'/'} replace />
    )
   }
    if(isLogin) {
        return (
            <Outlet/>
        )
    }
}

export default ProtectedRoute
