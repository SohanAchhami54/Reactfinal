import React from 'react'
import Usercardform from '../components/Usercardform'
import Usercardlist from '../components/Usercardlist'

const Usercard = () => {
  return (
    <div className='flex gap-3'>
       <Usercardform/>
       <Usercardlist/>
    </div>
  )
}

export default Usercard
