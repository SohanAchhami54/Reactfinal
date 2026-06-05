import { createContext, useContext, useEffect, useState } from "react";

const AuthContext=createContext({
   isLogin:'', 
   toggleLogin:()=>{}
})

const AuthProvider=({children})=>{
    const [isLogin,setIsLogin]=useState(localStorage.getItem('islog')==='true')
    
    const toggleLogin=()=>{
       setIsLogin(prev=>{
        localStorage.setItem('islog',!prev) 
        return !prev
       })
    }
     return (
        <AuthContext.Provider value={{isLogin,toggleLogin}} >
                {children}
        </AuthContext.Provider>
     )  
}
const useAuth=()=>{
    return useContext(AuthContext)
}

export {AuthProvider,useAuth}