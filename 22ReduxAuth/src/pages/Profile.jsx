import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const auth=useSelector(state=>state.auth)
  return (
    <div className='flex flex-col gap-3 mt-3 justify-center items-center'>
      <p>Name: {auth.user.name}</p>
      <p>Email: {auth.user.email} </p>
    </div>
  )
}

export default Profile
