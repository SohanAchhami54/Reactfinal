import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

      const handleSubmit = (e) => {
       e.preventDefault()

       if(!email || !password) return

      console.log("Email:", email)
      console.log("Password:", password)
      setEmail('')
      setPassword('')
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-gray-900 p-6 rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            aria-label='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            aria-label='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          aria-label='loginbutton'
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Form
