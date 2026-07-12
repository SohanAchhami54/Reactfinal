import axios from "axios"
const Axios=axios.create({
    baseURL:import.meta.env.VITE_BLOG_API
})

export {Axios}