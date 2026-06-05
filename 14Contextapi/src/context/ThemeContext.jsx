import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext=createContext({
   thememode:'light', 
   toggleDark:()=>{},
   togglelight:()=>{}
})

const ThemeProvider=({children})=>{
     const [thememode,setThememode]=useState(localStorage.getItem('theme')||'light' )
     
     const toggleDark=()=>{
       setThememode('dark')
     }
     const togglelight=()=>{
       setThememode('light')
     }

     useEffect(()=>{
       if(thememode==='dark'){
        document.querySelector('html').classList.remove('light') 
        document.querySelector('html').classList.add('dark')
         }else{
         document.querySelector('html').classList.remove('dark') 
         document.querySelector('html').classList.add('light') 
       }
     },[thememode])


    useEffect(()=>{
        localStorage.setItem('theme',thememode)
    },[thememode])

    return (
        <ThemeContext.Provider value={{thememode,toggleDark,togglelight}}>
              {children}
        </ThemeContext.Provider>
    )
}

const  useTheme=()=>{
    return useContext(ThemeContext)
}


export {useTheme,ThemeProvider}

