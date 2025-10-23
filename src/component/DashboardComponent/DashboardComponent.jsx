import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// For `recharts`, you need to install it:
// npm install recharts
// or
// yarn add recharts

// --- 1. Recruitment & Employee Engagement Section ---

// Sample data for the Line Chart
const recruitmentData = [
  { name: 'Jan', value: 25 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 28 },
  { name: 'Apr', value: 45 },
  { name: 'May', value: 68 },
  { name: 'Jun', value: 68, label: 'Job Open 320' }, // Highlighted point
  { name: 'Jul', value: 60 },
  { name: 'Aug', value: 75 },
  { name: 'Sep', value: 72 },
  { name: 'Oct', value: 85 },
  { name: 'Nov', value: 80 },
  { name: 'Dec', value: 92 },
];

// Custom Tooltip for the chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200 text-sm">
        <p className="text-gray-700 font-semibold">{`Month: ${label}`}</p>
        <p className="text-purple-600">{`Value: ${dataPoint.value}%`}</p>
        {dataPoint.label && <p className="text-gray-500 mt-1">{dataPoint.label}</p>}
      </div>
    );
  }
  return null;
};

const RecruitmentEngagement = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Recruitment & Employee Engagement</h2>
        <button className="px-5 py-2 bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 transition">
          View Details
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-3 sm:space-y-0">
        {/* Job Openings Dropdown */}
        <div className="relative w-full sm:w-auto">
          <select className="appearance-none block w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 cursor-pointer font-medium">
            <option>Job Openings</option>
            <option>New Hires</option>
            <option>Applications Received</option>
            <option>Interview Stage</option>
            <option>Attendance Rate</option>
            <option>Absenteeism Rate</option>
            <option>Cash Flow Status</option>
            <option>Current Balance</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        {/* Monthly Dropdown */}
        <div className="relative w-full sm:w-auto">
          <select className="appearance-none block w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 cursor-pointer font-medium">
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-grow w-full h-80 lg:h-96"> {/* Increased height for better visibility */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={recruitmentData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              padding={{ left: 20, right: 20 }}
              interval={0} // Show all labels
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis
              tickFormatter={(value) => `${value}%`}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]} // Y-axis from 0% to 100%
              ticks={[10, 30, 50, 70, 90, 100]} // Specific ticks
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone" // For smooth curve
              dataKey="value"
              stroke="#8B5CF6" // Purple color
              strokeWidth={3}
              dot={(props) => {
                // Custom dot for 'Job Open 320'
                const { cx, cy, payload } = props;
                if (payload.label) {
                  return (
                    <g>
                      <circle cx={cx} cy={cy} r={6} fill="#8B5CF6" stroke="#fff" strokeWidth={2} />
                      <text x={cx} y={cy - 15} textAnchor="middle" fill="#333" fontSize={12} fontWeight="bold">
                        {payload.label}
                      </text>
                    </g>
                  );
                }
                // Don't render default dots for other points
                return null;
              }}
              activeDot={{ r: 8, fill: '#8B5CF6', stroke: '#fff', strokeWidth: 2 }} // Active dot style
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- 2. Financial & Sales Statistic Section ---

const FinancialSalesStatistic = () => {
  const totalSalesPercentage = 50; // Example value, could be dynamic

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Financial & Sales Statistic</h2>

      {/* Earning & Expenses Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Total Earning Card */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 font-medium mb-1">Total Earning</p>
          <p className="text-2xl font-bold text-gray-800">£8593.65</p>
        </div>
        {/* Total Expenses Card */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 font-medium mb-1">Total Expenses</p>
          <p className="text-2xl font-bold text-gray-800">£3570.50</p>
        </div>
      </div>

      {/* Total Sales Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Sales</h3>
        <p className="text-sm text-gray-500 mb-4">Improved from last month</p>

        {/* Progress Bar */}
        <div className="relative w-full bg-gray-200 rounded-full h-3 mb-3">
          <div
            className="bg-indigo-600 h-3 rounded-full"
            style={{ width: `${totalSalesPercentage}%` }}
          ></div>
          <span
            className="absolute top-1/2 -translate-y-1/2 text-white text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-600"
            style={{ left: `calc(${totalSalesPercentage}% - 15px)` }} // Adjust for badge width
          >
            {totalSalesPercentage}%
          </span>
        </div>
        
        {/* Sales Value and Change */}
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold text-gray-800">£456,780</p>
          <span className="text-green-600 bg-green-100 text-xs font-bold px-3 py-1 rounded-full">
            +15.3% this quarter
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Main Dashboard Component ---

export default function DashboardComponent() {
  return (
    <div 
      className="p-4 sm:p-6 lg:p-10 bg-gray-50 "
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side: Recruitment & Employee Engagement */}
        <div className="lg:col-span-2">
          <RecruitmentEngagement />
        </div>

        {/* Right side: Financial & Sales Statistic */}
        <div className="lg:col-span-1">
          <FinancialSalesStatistic />
        </div>
      </div>
    </div>
  );
}