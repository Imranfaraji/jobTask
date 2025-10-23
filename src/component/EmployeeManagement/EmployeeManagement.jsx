import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// ====== ICON COMPONENTS ======
const UserIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const UserPlusIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="23" y1="11" x2="17" y2="11"></line>
  </svg>
);

const DocumentIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const CapIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-6.9-6.9l-3 3a5 5 0 0 0-.54 7.54z"></path>
    <path d="M14 11V3"></path>
    <path d="M18.5 7.5L22 4"></path>
    <path d="M2 10a3 3 0 0 1 3-3h12"></path>
    <path d="M10 21v-3.5a2.5 2.5 0 0 0-5 0V21"></path>
  </svg>
);

// ====== DASHBOARD DATA ======
const dashboardData = [
  {
    title: "Current Employees",
    value: "6941",
    change: "+2.5%",
    trend: "Improved from last month",
    icon: UserIcon,
    stroke: "#22c55e",
    fill: "#bbf7d0",
    chartData: [20, 35, 10, 45, 25, 55, 30],
  },
  {
    title: "New Employees",
    value: "640",
    change: "+2.5%",
    trend: "Decreased from last month",
    icon: UserPlusIcon,
    stroke: "#8b5cf6",
    fill: "#ddd6fe",
    chartData: [55, 30, 40, 15, 50, 25, 35],
  },
  {
    title: "Present Today",
    value: "580",
    change: "+5.0%",
    trend: "Increased from last month",
    icon: UserIcon,
    stroke: "#f97316",
    fill: "#fed7aa",
    chartData: [10, 40, 25, 50, 15, 60, 45],
  },
  {
    title: "Absent Today",
    value: "-78",
    change: "-0.8%",
    trend: "Improved from last month",
    icon: UserIcon,
    stroke: "#ef4444",
    fill: "#fecaca",
    chartData: [45, 60, 30, 55, 20, 40, 50],
  },
  {
    title: "New CVs",
    value: "6941",
    change: "+2.5%",
    trend: "Improved from last month",
    icon: DocumentIcon,
    stroke: "#22c55e",
    fill: "#bbf7d0",
    chartData: [20, 35, 10, 45, 25, 55, 30],
  },
  {
    title: "Intern Requests",
    value: "106",
    change: "+2.5%",
    trend: "Decreased from last month",
    icon: CapIcon,
    stroke: "#6b7280",
    fill: "#e5e7eb",
    chartData: [50, 20, 40, 10, 35, 5, 25],
  },
  {
    title: "Running Interns",
    value: "580",
    change: "+5.0%",
    trend: "Increased from last month",
    icon: UserIcon,
    stroke: "#f97316",
    fill: "#fed7aa",
    chartData: [10, 40, 25, 50, 15, 60, 45],
  },
  {
    title: "Intern to Employee",
    value: "640",
    change: "+2.5%",
    trend: "Improved from last month",
    icon: UserIcon,
    stroke: "#8b5cf6",
    fill: "#ddd6fe",
    chartData: [55, 30, 40, 15, 50, 25, 35],
  },
];

// ====== CARD COMPONENT ======
const StatCard = ({ data }) => {
  const Icon = data.icon;
  const isPositive = data.change.includes("+") || !data.change.includes("-");
  const changeColor = isPositive
    ? "text-green-500 bg-green-100"
    : "text-red-500 bg-red-100";

  // Convert to Recharts data format
  const chartData = data.chartData.map((v, i) => ({ name: `P${i}`, value: v }));

  return (
    <div className="bg-white w-full p-5 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between  hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center text-gray-500">
            <Icon className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">{data.title}</span>
          </div>
          <div
            className={`mt-2 px-2 py-0.5 text-xs font-bold rounded-lg ${changeColor}`}
          >
            {data.change}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-4xl font-bold text-gray-800">{data.value}</p>
        <p className="text-xs text-gray-400 mt-1">{data.trend}</p>
      </div>

      {/* ====== Recharts Area Chart ====== */}
      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke={data.stroke}
              fill={data.fill}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// ====== MAIN DASHBOARD COMPONENT ======
export default function EmployeeManagement() {
  return (
    <div className="p-4 sm:p-6 lg:p-10 bg-gray-50  font-[Inter,sans-serif]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <h1 className="md:text-3xl text-xl font-extrabold text-gray-800 mb-4 md:mb-0">
          Employee Management
        </h1>

        <div className="flex space-x-3 items-center">
          <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:border-indigo-500 cursor-pointer">
  <option>Monthly</option>
  <option>Weekly</option>
  <option>Quarterly</option>
</select>

          <button className="px-6 py-2 bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg hover:bg-indigo-600 transition">
            View Details
          </button>
        </div>
      </div>

      {/* Grid for Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData.map((data, i) => (
          <StatCard key={i} data={data} />
        ))}
      </div>

      
    </div>
  );
}
