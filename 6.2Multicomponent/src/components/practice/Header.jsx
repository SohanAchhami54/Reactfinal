import React from 'react'
import { BsFillMenuButtonWideFill } from "react-icons/bs"
import { CgArrowTopRight } from "react-icons/cg"
import { FaUserCircle } from "react-icons/fa"
const Header = () => {
  return (
    <div>
       <nav className='flex flex-wrap justify-between px-5'>
          <section className='flex flex-wrap gap-1 justify-center items-center'>
              <BsFillMenuButtonWideFill />
             <h2>AppShell</h2>
          </section>
          

           <section className='flex flex-wrap gap-3 justify-center items-center'>
            <div className='flex justify-center items-centern border rounded-md px-3 py-1'>
                 <span className='text-sm'>View Code</span>
                 <CgArrowTopRight />
            </div>
                 
                 <FaUserCircle className='text-2xl'/>
           </section>
       </nav>
       <hr className='mt-6' />
    </div>
  )
}

export default Header
 