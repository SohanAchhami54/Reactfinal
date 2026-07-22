import { useTranslation } from "react-i18next"
import { NavLink, type NavLinkRenderProps } from "react-router-dom"

const Header:React.FC = () => { 
    const {t,i18n}=useTranslation() 
    const isActive=({isActive}:NavLinkRenderProps)=>{
        return isActive?'text-red-500':''
    }
  return (
    <div>
      <nav className="flex justify-around items-center py-3 bg-gray-900">
         <h1 className="text-xl">I18n</h1> 
         <div className="flex gap-2">
             <NavLink className={isActive} to='/'>{t("home")} </NavLink>
             <NavLink className={isActive} to='/about'>{t("about")} </NavLink>
             <NavLink className={isActive} to='/contact'>{t("contact")} </NavLink>
             <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)} 
              className="text-white bg-gray-900"
             >
            <option value="en">English</option>
            <option value="ne">Nepali</option>
            </select>
         </div>
      </nav>
    </div>
)
}

export default Header
