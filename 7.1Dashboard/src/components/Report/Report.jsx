import React from 'react'

const Report = () => {
  return (
   <div className="p-6">
  <h1 className="text-3xl font-bold mb-6">Reports</h1>
  <div className="bg-white p-6 rounded-xl shadow">
    <h3>Monthly Performance Report</h3>
    <p className="mt-4">Revenue increased by 18% compared to last month.</p>
    <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
      Download PDF
    </button>
  </div>
</div>
  )
}

export default Report
