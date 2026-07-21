import { useRef, useState } from "react"

const Login = () => { 
    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')  


    const inputRef=useRef<HTMLInputElement>(null)

    const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault() 
        console.log('the value of email and password is:',email,password)
        setEmail('') 
        setPassword('') 
        inputRef.current?.focus()
    }
  return (
    <div className="flex flex-row min-h-screen">
      <section className="flex-1 hidden  md:flex justify-center items-center bg-gray-600 ">
         <h1 className="text-xl">Welcome back</h1>
      </section>

      <section className="flex-1 flex flex-col justify-center items-center gap-3">
        <form onSubmit={handleSubmit}
         className="w-full max-w-sm flex flex-col gap-4 p-4 sm:p-6 bg-gray-400 rounded-md">
             <section className="flex flex-col gap-1">
                  <label htmlFor="email">Email:</label>
                  <input type="email"  
                   ref={inputRef} 
                   id="email"
                   value={email} 
                   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
                   placeholder="Enter your email"
                   className="border py-2 px-2 rounded-md outline-none focus:ring-2"
                  />
             </section>

             <section className="flex flex-col gap-1">
                <label htmlFor="password">Password:</label>
                  <input type="password" 
                   id="password"
                   value={password} 
                   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                   placeholder="Enter your email"
                   className="border py-2 px-2 rounded-md outline-none focus:ring-2"
                  />
             </section>
             <button className="text-lg bg-gray-800 rounded-md py-2">Login</button>
        </form>
      </section>
    </div>
  )
}

export default Login
