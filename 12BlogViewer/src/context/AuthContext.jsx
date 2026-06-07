import { useContext,useEffect,useState,createContext } from "react"
import { blogreview } from "../data/blogreview"

const AuthContext=createContext({
    isLogin:false,
    login:()=>{},
    logout:()=>{}
}) 

const AuthProvider=({children})=>{
    const [isLogin,setIsLogin]=useState(localStorage.getItem('loginstate')==='true') 

    const [blog,setBlogs]=useState(blogreview)

    const updateBlog=(id,updateData)=>{
      setBlogs(prev=>
         prev.map(b=>
            b.id===Number(id)?{...b,...updateData}:b
         )
      )
    }

     const login=()=>{
        setIsLogin(true)
     }
     const logout=()=>{
        setIsLogin(false)
     }

     useEffect(()=>{
        localStorage.setItem('loginstate', isLogin)
     },[isLogin])



     return (
        <AuthContext.Provider value={{isLogin,login,logout,updateBlog,blog}}>
              {children}
        </AuthContext.Provider>
     )
}


const useAuth=()=>{
    return useContext(AuthContext)
}

export {AuthProvider,useAuth}