import React from 'react'

const TaskUser = () => {
const users = [
  {
    id: 1,
    name: "Sohan",
    role: "Frontend Developer",
    projects: [
      {
        id: 101,
        title: "E-commerce Website",
        tasks: ["UI Design", "Cart Page", "Payment Integration"]
      },
      {
        id: 102,
        title: "Portfolio Website",
        tasks: ["Landing Page", "Animations", "Deploy"]
      }
    ]
  },
  {
    id: 2,
    name: "Aarav",
    role: "Backend Developer",
    projects: [
      {
        id: 201,
        title: "API Server",
        tasks: ["Auth API", "Database Design", "Deployment"]
      },
      {
        id: 202,
        title: "CRM System",
        tasks: ["User Management", "Reports Module"]
      }
    ]
  },
  {
    id: 3,
    name: "Priya",
    role: "UI Designer",
    projects: [
      {
        id: 301,
        title: "Mobile App UI",
        tasks: ["Wireframes", "Prototypes", "Figma Design"]
      }
    ]
  }
];
  return (
    <div className='m-5'>
      <h1 className='text-xl text-center font-semibold'>This is the Task for list and map</h1>
      <ul className='flex flex-wrap justify-center gap-3 mt-3'>
        {
            users.map((user)=>(
                <li key={user.id} className='flex flex-col border rounded-lg p-3 space-y-4'>
                   <span>Name: {user.name}</span>
                   <span>Role: {user.role} </span>
                     <h2 className='text-lg font-semibold tracking-tight'>This is about Project</h2>
                    <span className='mt-3'>
                        {
                            user.projects.map((project)=>(
                                <li key={project.id} className='flex flex-col gap-2'> 
                                   <span>Title: {project.title} </span>
                                    <span>Tasks: {project.tasks} </span>
                                </li>
                            ))
                        }
                    </span>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default TaskUser
