import React, { useState } from 'react'

const Setting = () => {
  const [name, setName] = useState('Sohan Achhami')
  const [email, setEmail] = useState('sohan@example.com')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">

      <h1 className="text-2xl font-bold text-gray-800 mb-1">Settings</h1>
      <p className="text-sm text-gray-400 mb-6">Manage your account</p>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 max-w-md flex flex-col gap-4">

        {/* Avatar */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center">
            SA
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">{name}</p>
            <p className="text-xs text-gray-400">{email}</p>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            saved ? 'bg-green-500 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white'
          }`}
        >
          {saved ? '✓ Saved!' : 'Save Changes'}
        </button>

      </div>
    </div>
  )
}

export default Setting