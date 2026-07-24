import { useSelector } from "react-redux"
import type { RootState } from "../app/store"
import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

type PublicRoute={
    children:ReactNode
}

const PublicRoute = ({children}:PublicRoute) => {
    const {user,token}=useSelector((state:RootState)=>state.auth)
    if(user&&token) {
      return  <Navigate to='/' replace/>
    }else{
        return <>{children} </>
    }
}

export default PublicRoute
