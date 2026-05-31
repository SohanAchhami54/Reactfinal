import React from 'react'

const Sidebar = ({activePage,setActivePage}) => { 
    const navItems=[
   { id: "overview",  label: "Overview",  icon: "🏠" },
   { id: "analytic", label: "Analytics", icon: "📊" },
   { id: "project",  label: "Projects",  icon: "📁" },
   { id: "message",  label: "Messages",  icon: "✉️", badge: 4 },
   { id: "calendar",  label: "Calendar",  icon: "📅"},
   { id: "report",  label: "Report",  icon: "📊" },
   { id: "setting",  label: "Settings",  icon: "⚙️"},
    ]
  return (
    <div className='sticky top-20 min-h-screen flex flex-col gap-10 max-w-13 md:max-w-45 w-full  bg-gray-400 p-3 '>
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-xs md:text-sm'>MAIN</h1> 
            <ul className='flex flex-col gap-5'>
                {
                    navItems.map((i)=>(
                        <li key={i.id} onClick={()=>setActivePage(i.id)} 
                        className={`hover:cursor-pointer font-medium ${activePage===i.id?'text-red-800 ':''}`}> 
                        <div className='flex gap-2'>
                             <span>{i.icon}</span> 
                           <span className='hidden md:flex'>{i.label} {i.badge && i.badge} </span>
                        </div>
                         
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
