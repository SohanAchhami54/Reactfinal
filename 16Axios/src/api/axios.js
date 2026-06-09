import axios,{isCancel,AxiosError} from 'axios' 
// console.log(axios.isCancel('something'))
const Axios=axios.create({
    baseURL:`${import.meta.env.VITE_BASE_URL}`,
    timeout:10000,
})

export {Axios}
