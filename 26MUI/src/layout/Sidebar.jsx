import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdDashboard } from "react-icons/md"
import { IoIosPeople } from "react-icons/io"
import { FaBagShopping } from "react-icons/fa6"
import { IoCubeSharp } from "react-icons/io5"
import { AiOutlineTransaction } from "react-icons/ai"
import { GoGoal } from "react-icons/go"
import { FcSalesPerformance } from "react-icons/fc"
import { SiCardmarket } from "react-icons/si"
import { BiHelpCircle } from "react-icons/bi"
import { IoSettingsOutline } from "react-icons/io5"
import Avatar from '@mui/material/Avatar'
import { LuPanelLeftClose } from "react-icons/lu"
import { LuPanelRightClose } from "react-icons/lu"

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const isActive = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
      isActive
        ? 'bg-gray-500 text-white shadow-md'
        : 'text-gray-950'
    }`

  return (
    <aside
      className={`${open ? 'w-20' : 'w-64'} flex flex-col gap-6 text-gray-950 min-h-screen bg-white p-4 border-r border-neutral-300 shadow-lg rounded-md transition-all duration-300`}
    >
      {/* Main Navigation */}
      <section>
        <nav className="flex flex-col gap-1 text-sm">
          <div className='flex justify-center items-center gap-3 mb-2'>
            {!open && (
              <h1
                onClick={() => navigate('/')}
                className="hover:cursor-pointer"
              >
                Admin Dashboard
              </h1>
            )}

            {
              !open
                ? <LuPanelLeftClose onClick={() => setOpen(true)} className='cursor-pointer' />
                : <LuPanelRightClose onClick={() => setOpen(false)} className='cursor-pointer' />
            }
          </div>

          <NavLink to="/" className={isActive}>
            <MdDashboard />
            {!open && <span>Dashboard</span>}
          </NavLink>

          <NavLink to="/customer" className={isActive}>
            <IoIosPeople />
            {!open && <span>Customers</span>}
          </NavLink>

          <NavLink to="/order" className={isActive}>
            <FaBagShopping />
            {!open && <span>Orders</span>}
          </NavLink>

          <NavLink to="/product" className={isActive}>
            <IoCubeSharp />
            {!open && <span>Products</span>}
          </NavLink>

          <NavLink to="/transaction" className={isActive}>
            <AiOutlineTransaction />
            {!open && <span>Transactions</span>}
          </NavLink>
        </nav>
      </section>

      <hr />

      {/* Growth Tools */}
      <section>
        <nav className="flex flex-col gap-1 text-sm">

          {!open && (
            <h1 className="hover:cursor-pointer mb-2">
              Growth Tools
            </h1>
          )}

          <NavLink to="/goaltarget" className={isActive}>
            <GoGoal />
            {!open && <span>Goals & Target</span>}
          </NavLink>

          <NavLink to="/salesperformance" className={isActive}>
            <FcSalesPerformance />
            {!open && <span>Sales Performance</span>}
          </NavLink>

          <NavLink to="/marketing" className={isActive}>
            <SiCardmarket />
            {!open && <span>Marketing</span>}
          </NavLink>
        </nav>
      </section>

      {/* Help Center and Settings */}
      <section className='mt-auto'>
        <hr className='py-2' />

        <nav className="flex flex-col gap-3 text-sm">
          <NavLink to="/helpcenter" className={isActive}>
            <BiHelpCircle />
            {!open && <span>Help Center</span>}
          </NavLink>

          <NavLink to="/setting" className={isActive}>
            <IoSettingsOutline />
            {!open && <span>Settings</span>}
          </NavLink>

          <section className='flex gap-1'>
            <Avatar
              alt='myimage'
              src='https://i.pinimg.com/736x/8a/76/fa/8a76fa77a4f741ab07cc70269df0b11e.jpg'
            />

            {!open && (
              <div className='flex flex-col gap-1 text-xs font-medium text-neutral-400'>
                <span>Sohan Achhami</span>
                <span>sohanachm@gmail.com</span>
              </div>
            )}
          </section>
        </nav>
      </section>
    </aside>
  )
}

export default Sidebar