import axios from    'axios'

const Axios=axios.create({
    baseURL:import.meta.env.VITE_TMDB_URL,
})

export {Axios}