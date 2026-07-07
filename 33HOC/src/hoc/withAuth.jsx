import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function withAuth (WrappedComponent) {
  return function  withAuthComponent(props){ 
     const token=useSelector(state=>state.auth.token)

     if(!token){
           return <Navigate to='/login' replace/>
     } 
     return <WrappedComponent {...props}/>
  }
}

export default withAuth
