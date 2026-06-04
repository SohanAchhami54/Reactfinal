import React from 'react'
import { useForm } from '../hooks/useForm'

const Signup = () => {

  const { values, handleChange, reset } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.password !== values.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('signup values are:', values)
    reset()
  }

  return (
    <div className='flex flex-wrap h-screen'>
      <div className='flex-1 flex justify-center items-center m-1'>
        <h1 className='text-3xl font-bold'>Fill this form </h1>
      </div>

      <div className='flex-1 flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-5xl font-semibold'>Signup Form</h1>

        <form onSubmit={handleSubmit}
          className='flex flex-col gap-3 p-2 w-full max-w-md'>

          <label htmlFor='name'>Name:</label>
          <input type='text'
           id='name'
            value={values.name} 
            onChange={handleChange}
            placeholder='Enter name'
            className='border px-2 outline-none focus:ring-2 rounded-sm' />

          <label htmlFor='email'>Email:</label>
          <input type='email' 
          id='email'
            value={values.email} 
            onChange={handleChange}
            placeholder='Enter email address'
            className='border px-2 outline-none focus:ring-2 rounded-sm' />

          <label htmlFor='phone'>Phone:</label>
          <input type='tel' 
          id='phone'
            value={values.phone} 
            onChange={handleChange}
            placeholder='Enter phone number'
            className='border px-2 outline-none focus:ring-2 rounded-sm' />

          <label htmlFor='password'>Password:</label>
          <input type='password' 
          id='password'
            value={values.password}
             onChange={handleChange}
            placeholder='Enter password'
            className='border px-2 outline-none focus:ring-2 rounded-sm' />

          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input type='password' 
          id='confirmPassword'
            value={values.confirmPassword} 
            onChange={handleChange}
            placeholder='Re-enter password'
            className='border px-2 outline-none focus:ring-2 rounded-sm' />

          <button className='bg-blue-600 rounded-md py-1'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup