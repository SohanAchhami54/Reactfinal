import { useTranslation } from "react-i18next"
import { formatCurrency, formatDate, formatNumber } from "../utils/format"

const About = () => { 
    const {t}=useTranslation()
  return (
    <div>
       <h1>{t("about")} </h1>
       <p> {formatCurrency(50000,'en-US','USD')} </p>
       <p> {formatNumber(1234567,'en-US')} </p>
       <p> {formatDate(new Date(),'en-US')} </p> 
    </div>
  )
}

export default About
