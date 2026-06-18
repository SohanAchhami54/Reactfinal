import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const auth=useSelector(state=>state.auth)
     return auth.isLogged
      ?
       <Navigate to='/' replace />
       :
        children
}

export default PublicRoute
