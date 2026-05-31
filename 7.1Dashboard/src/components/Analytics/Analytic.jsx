import { BarChart, LineChart, PieChart } from '@mui/x-charts';

const monthlyRevenue = [32000, 38000, 29000, 43000, 41000, 48290];
const monthlyUsers = [1200, 1600, 1400, 2100, 2400, 2847];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const topStats = [
  { id: 1, label: 'Total Revenue', value: '$48,290', sub: 'June 2025', icon: '💰' },
  { id: 2, label: 'Active Users', value: '2,847', sub: 'June 2025', icon: '👥' },
  { id: 3, label: 'Projects', value: '142', sub: 'All time', icon: '📁' },
  { id: 4, label: 'Tasks Done', value: '89%', sub: 'Completion rate', icon: '✅' },
];

const projectBreakdown = [
  { id: 0, value: 58, label: 'Completed' },
  { id: 1, value: 42, label: 'In Progress' },
  { id: 2, value: 42, label: 'Pending' },
];

const recentStats = [
  { id: 1, label: 'Best Month', value: 'June', detail: '$48,290 revenue' },
  { id: 2, label: 'Most Users', value: '2,847', detail: 'Recorded in June' },
  { id: 3, label: 'Avg Revenue', value: '$38,590', detail: 'Past 6 months' },
  { id: 4, label: 'User Growth', value: '+137%', detail: 'Jan → Jun' },
];

export default function Analytics() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">

      <h1 className="text-2xl font-bold text-gray-800 mb-1">Analytics</h1>
      <p className="text-sm text-gray-400 mb-6">Based on data from Jan – Jun 2025</p>

      {/* Top stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {topStats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">{stat.label}</span>
              <span>{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

        {/* Revenue Bar Chart */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Monthly Revenue</h2>
          <p className="text-xs text-gray-400 mb-4">How much revenue each month</p>
          <BarChart
           //this is bottom level data.
            xAxis={[{ scaleType: 'band', data: months }]}
            //this is the height and info about bar when hover.
            series={[{ data: monthlyRevenue, label: 'Revenue ($)', color:'#636232' }]}
            width={380}
            height={230}
          />
        </div>

        {/* Users Line Chart */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">User Growth</h2>
          <p className="text-xs text-gray-400 mb-4">How users grew over 6 months</p>
          <LineChart
            xAxis={[{ scaleType: 'band', data: months }]}
            series={[{ data: monthlyUsers, label: 'Users', color: '#22d3ee', area:true }]}
            width={380}
            height={220}
          />
        </div>

      </div>

      {/* Pie Chart + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Project Breakdown Pie */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Project Status</h2>
          <p className="text-xs text-gray-400 mb-4">Breakdown of 142 total projects</p>
          <PieChart
            series={[{ data: projectBreakdown, innerRadius: 50, outerRadius: 90 }]}
            width={380}
            height={220}
          />
        </div>

        {/* Quick summary stats */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Quick Summary</h2>
          <p className="text-xs text-gray-400 mb-4">Key highlights from the data</p>
          <ul className="flex flex-col gap-3">
            {recentStats.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none">
                <div>
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.detail}</p>
                </div>
                <span className="text-lg font-bold text-indigo-500">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}