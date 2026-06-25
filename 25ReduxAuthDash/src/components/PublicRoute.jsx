import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => { 
    const {user,isLoggedIn}=useSelector(state=>state.auth)
    return isLoggedIn? <Navigate to='/' replace /> : children
}

export default PublicRoute
