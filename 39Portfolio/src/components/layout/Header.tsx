import { useDispatch, useSelector } from "react-redux"
import { NavLink, type NavLinkRenderProps } from "react-router-dom"
import type { RootState } from "../../app/store"
import { logout } from "../../features/auth/authslice"
import { GiHamburgerMenu } from "react-icons/gi" 
import { RxCross1 } from "react-icons/rx"
import { useState } from "react";
import { useTranslation } from "react-i18next"

const Header = () => {  
  const {t,i18n}=useTranslation()

    const isActive=({isActive}:NavLinkRenderProps)=>{
        return isActive?'text-red-500':''
    }
    const [open,setOpen]=useState(false)
    const {isLoggedIn}=useSelector((state:RootState)=>state.auth) 
    const dispatch=useDispatch()
     
    const handleLogout=()=>{
      const confirm=window.confirm('Are you sure want to logout') 
      if(confirm){
        dispatch(logout())
      } 
      return
    }
    const handleCross=()=>{
      setOpen(prev=>!prev)
    }

  return (
    <div>
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-900/70 px-4 py-4 backdrop-blur-md  border-white/10 md:justify-around">
        <h1 className="text-xl">{t("portfolio")} </h1>

         {/* hamburger  */}
        <button onClick={()=>setOpen(prev=>!prev)}
         className="flex md:hidden">
          <GiHamburgerMenu />
        </button>


        {/* nav when screen size is bigger  */}
         <div className="hidden md:flex items-center justify-center gap-3">
            <NavLink className={isActive} to='/'>{t("home")} </NavLink>
            <NavLink className={isActive} to='/about'>{t("about")} </NavLink>
            {
               isLoggedIn && (
                <NavLink className={isActive} to='/dashboard'> {t("dashboard")} </NavLink>
            )}
           
            <NavLink className={isActive} to='/contact'> {t("contact")} </NavLink>
            {
              !isLoggedIn && (
               <NavLink className={isActive} to='/login'>{t("login")} </NavLink>
            )}
           
           {
            isLoggedIn && (
              <button onClick={handleLogout}>{t("logout")} </button>
            )}

            <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
           className="bg-gray-800 text-white px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
           >
          <option value="en">English</option>
          <option value="ne">Nepali</option>
          </select>

         </div>


        {/* nav when screen size is smaller  */}
         {open && (
          <div className="absolute top-0 right-0 flex flex-col gap-2 items-start min-h-screen bg-gray-900 p-3 z-10">
             <button onClick={handleCross}><RxCross1 /></button>
            <NavLink onClick={handleCross} className={isActive} to='/'>Home</NavLink>
            <NavLink onClick={handleCross} className={isActive} to='/about'>About</NavLink>
            {
               isLoggedIn && (
                <NavLink onClick={handleCross} className={isActive} to='/dashboard'>Dash</NavLink>
            )}
           
            <NavLink onClick={handleCross} className={isActive} to='/contact'>Contact</NavLink>
            {
              !isLoggedIn && (
               <NavLink onClick={handleCross} className={isActive} to='/login'>Login</NavLink>
            )}
           
           {
            isLoggedIn && (
              <button  onClick={handleLogout}>Logout</button>
            )}
             </div>
         )}
      </nav>
    </div>
  )
}
export default Header
