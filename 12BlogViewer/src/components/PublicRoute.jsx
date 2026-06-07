import React from 'react'
import { useAuth } from '../context/AuthContext'
import {Navigate} from 'react-router-dom'

const PublicRoute = ({children}) => {
    const {isLogin}=useAuth()
    return  isLogin ? 
    <Navigate to='/' replace /> 
     :
      children
}

export default PublicRoute
