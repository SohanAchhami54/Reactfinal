import axios from "axios" 
const Axios=axios.create({
    baseURL:import.meta.env.VITE_JSONPLACEHOLDER_API
})
export {Axios}