import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../features/auth/authslice"
import {nanoid} from 'nanoid'

const formSchema=z.object({
    email:z.string()
    .min(1,'Email is required')
    .email('Please enter a valid email'), 

    password:z.string() 
    .min(1,'Password is required') 
    .min(6,'Password must be at least 6 Characters')
}) 

type FormData=z.infer<typeof formSchema>

const Login = () => { 
    const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm<FormData>({
        resolver:zodResolver(formSchema), 
        mode:'onChange'
    })

    const navigate=useNavigate() 
    const dispatch=useDispatch()

    const onsubmit=async(data:FormData)=>{
      try {
        await new Promise(resolve=>setTimeout(resolve,1500))
          dispatch(login({user:{...data},token:nanoid()}))
          reset()
         navigate('/')
      } catch (error) {
        alert('login failed. Please try again')
      }
    }

  return (
    <div className="flex items-center min-h-screen">
       <div className="flex-1 hidden md:flex items-center justify-center">
            <h1 className="text-2xl font-medium">Welcome Back.</h1>
       </div>
       
       <div className="flex-1 flex justify-center items-center">
          <form onSubmit={handleSubmit(onsubmit)}
           className="flex flex-col gap-5 w-full max-w-sm bg-gray-900 px-8 py-10 rounded-md "
          >
             <div className="flex flex-col gap-1">
             <label htmlFor="email">Email:</label> 
               <input type="email" 
               {...register('email')} 
               placeholder="Enter your email" 
               aria-label="email"
               className="outline-none border py-1 focus:ring-2 rounded-md "
               />
               {errors.email && (
                <p className="text-red-600">{errors.email.message} </p>
               )}
               </div>
               
              <div className="flex flex-col gap-1">
               <label htmlFor="password">Password:</label> 
               <input type="password" 
               {...register('password')} 
               placeholder="Enter your password" 
               aria-label="password"
               className="outline-none border py-1 focus:ring-2 rounded-md"
               /> 
               {errors.password && (
                <p className="text-red-600">{errors.password.message} </p>
               )}
               </div>

               <Button type="submit" variant="outlined" color="warning" aria-label="login">
                 {isSubmitting?'Logining...':'Login'}

               </Button>
          </form>
       </div>
    </div>
  )
}

export default Login
