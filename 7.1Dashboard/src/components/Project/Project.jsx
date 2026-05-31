import React from 'react'

const projects = [
  { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 75, color: 'bg-blue-500' },
  { id: 2, name: 'Mobile App', status: 'Review', progress: 90, color: 'bg-green-500' },
  { id: 3, name: 'Marketing Campaign', status: 'Planning', progress: 20, color: 'bg-yellow-500' },
  { id: 4, name: 'Dashboard UI', status: 'In Progress', progress: 60, color: 'bg-indigo-500' },
  { id: 5, name: 'API Integration', status: 'Completed', progress: 100, color: 'bg-gray-400' },
  { id: 6, name: 'Database Migration', status: 'Planning', progress: 10, color: 'bg-orange-400' },
]

const statusColor = {
  'Completed': 'bg-green-100 text-green-600',
  'In Progress': 'bg-blue-100 text-blue-600',
  'Review': 'bg-purple-100 text-purple-600',
  'Planning': 'bg-yellow-100 text-yellow-600',
}

const Project = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">

      <h1 className="text-2xl font-bold text-gray-800 mb-1">Projects</h1>
      <p className="text-sm text-gray-400 mb-6">Total {projects.length} projects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">

            {/* Name + Status badge */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-800">{project.name}</h3>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[project.status]}`}>
                {project.status}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${project.color}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Project