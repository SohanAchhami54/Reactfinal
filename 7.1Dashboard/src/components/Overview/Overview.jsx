import { BarChart } from '@mui/x-charts/BarChart';

const stats = [
  { id: 1, label: 'Total Revenue', value: '$48,290', change: '+12% this month', icon: '💰' },
  { id: 2, label: 'Active Users', value: '2,847', change: '+8% this month', icon: '👥' },
  { id: 3, label: 'Projects', value: '142', change: '+3 this week', icon: '📁' },
  { id: 4, label: 'Tasks Completed', value: '89%', change: '↑ On track', icon: '✅' },
];

const activities = [
  { id: 1, user: 'Sohan A.', action: 'completed', target: 'API Integration', time: '2 min ago' },
  { id: 2, user: 'Prabhat K.', action: 'pushed to', target: 'main branch', time: '15 min ago' },
  { id: 3, user: 'Bibek B.', action: 'closed issue', target: '#204 Bug Fix', time: '1 hr ago' },
  { id: 4, user: 'Rupak P.', action: 'reviewed', target: 'Dashboard UI', time: '3 hr ago' },
];

export default function Overview() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">

      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-500">{stat.label}</span>
              <span className="text-xl">{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-xs text-green-500 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Monthly Revenue</h2>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }]}
            series={[{ data: [32000, 38000, 29000, 43000, 41000, 48290], color: '#6366f1' }]}
            width={420}
            height={220}
          />
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <ul className="flex flex-col gap-3">
            {activities.map((item) => (
              <li key={item.id} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-none">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  {item.user.slice(0, 2)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">{item.user}</span> {item.action}{' '}
                    <span className="text-indigo-500">{item.target}</span>
                  </p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}