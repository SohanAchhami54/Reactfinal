import { useSelector } from "react-redux"
import type { RootState } from "../app/store"
import { Navigate,  } from "react-router-dom"
import type { ReactNode } from "react"

type ProtectedRouteProps={
    children:ReactNode
}

const ProtectedRoute = ({children}:ProtectedRouteProps) => { 
    const {user,token}=useSelector((state:RootState)=>state.auth)
    if(user&&token){
        return <>{children} </>
    } else {
      return  <Navigate to='/' replace/>
    }
}

export default ProtectedRoute
