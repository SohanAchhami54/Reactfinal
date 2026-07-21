import { useRef, useState } from "react"

const Login = () => { 
      const [email, setEmail] = useState<string>("")
      const [password, setPassword] = useState<string>("")  
      const emailRef=useRef<HTMLInputElement>(null)

      const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>):void=>{
         e.preventDefault() 
         console.log('email and password is:',email,password)
         setEmail('')
         setPassword('')
         emailRef.current?.focus()
      }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <h2>Login</h2> 
           <div>
             <label htmlFor="email">Email:</label>
              <input type="email"
              id="email"
               ref={emailRef}
               required 
               autoComplete="email"
               value={email}
               onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} />
               </div>
               <br />

               <div>
                <label htmlFor="password">Password:</label> 
                 <input type="password" 
                 id="password"
                 required 
                 autoComplete="password"
                 value={password} 
                 onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}/>
               </div>

              <button type="submit">
                  Login
              </button>
      </form>
    </div>
  )
}

export default Login
