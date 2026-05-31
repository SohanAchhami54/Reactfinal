import React from 'react'

const messages = [
  { id: 1, name: 'Sarah Chen', time: '2h ago', text: 'Can we schedule a meeting for tomorrow?', avatar: 'SC', color: 'bg-blue-500', unread: true },
  { id: 2, name: 'Michael Ross', time: 'Yesterday', text: 'The new design looks great!', avatar: 'MR', color: 'bg-green-500', unread: false },
  { id: 3, name: 'Prabhat K.C', time: 'Yesterday', text: 'I pushed the latest changes to main branch.', avatar: 'PK', color: 'bg-indigo-500', unread: true },
  { id: 4, name: 'Bibek Bashyal', time: '2 days ago', text: 'Can you review my pull request?', avatar: 'BB', color: 'bg-orange-400', unread: false },
]

const Message = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">

      <h1 className="text-2xl font-bold text-gray-800 mb-1">Messages</h1>
      <p className="text-sm text-gray-400 mb-6">{messages.length} conversations</p>

      <div className="flex flex-col gap-3">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">

            {/* Avatar */}
            <div className={`w-10 h-10 rounded-full ${msg.color} text-white text-xs font-semibold flex items-center justify-center flex-shrink-0`}>
              {msg.avatar}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm font-semibold ${msg.unread ? 'text-gray-800' : 'text-gray-500'}`}>
                  {msg.name}
                </p>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{msg.text}</p>
            </div>

            {/* Unread dot */}
            {msg.unread && (
              <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
            )}

          </div>
        ))}
      </div>
    </div>
  )
}

export default Message