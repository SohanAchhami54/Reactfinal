import axios from 'axios' 
const Axios=axios.create({
    baseURL:import.meta.env.VITE_DEV_PUBLIC_API
})
export {Axios}