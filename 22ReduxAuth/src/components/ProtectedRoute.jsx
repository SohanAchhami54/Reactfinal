import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const auth=useSelector(state=>state.auth)
    return auth.isLogged? children: <Navigate to='/login'  replace/> 
 
}

export default ProtectedRoute
