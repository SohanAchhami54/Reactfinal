import axios from 'axios' 
const Axios=axios.create({
    baseURL:import.meta.env.VITE_OPENWEATHER_URL
})
export {Axios}