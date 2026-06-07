import React from 'react'
import { useAuth } from '../context/AuthContext'
import {Navigate,Outlet} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {isLogin}=useAuth() 
    return isLogin? children : <Navigate to='/login' replace />
}

export default ProtectedRoute
