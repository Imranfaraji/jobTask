import React from 'react';

// --- Inline SVG Icons (Lucide-like) ---
const AlertCircleIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const ClockIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const CheckSquareIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4"></polyline>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
);

const ClipboardIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="M15 2H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
  </svg>
);


// --- Notification Data ---
const notificationsData = [
  {
    title: "Budget Overrun Alert",
    tag: { label: "Critical", style: "bg-red-100 text-red-700" },
    description: "Marketing department exceeded monthly budget by 15%",
    time: "2 hours ago",
    Icon: AlertCircleIcon,
    iconStyle: "text-red-500 bg-red-50",
  },
  {
    title: "Performance Reviews Due",
    tag: { label: "Warning", style: "bg-orange-100 text-orange-700" },
    description: "5 employee performance reviews due this week",
    time: "10 hours ago",
    Icon: ClockIcon,
    iconStyle: "text-orange-500 bg-orange-50",
  },
  {
    title: "Campaign Launch",
    tag: { label: "Approved", style: "bg-green-100 text-green-700" },
    description: "Q1 Marketing campaign launching tomorrow",
    time: "1 day ago",
    Icon: CheckSquareIcon,
    iconStyle: "text-green-500 bg-green-50",
  },
  {
    title: "High Absenteeism",
    tag: { label: "Alert", style: "bg-yellow-100 text-yellow-700" },
    description: "Attendance rate dropped to 85% this week",
    time: "2 days ago",
    Icon: AlertCircleIcon,
    iconStyle: "text-yellow-500 bg-yellow-50",
  },
  {
    title: "Document Signed",
    tag: { label: "Confirmed", style: "bg-indigo-100 text-indigo-700" },
    description: "New policy document signed by all employees.",
    time: "3 days ago",
    Icon: ClipboardIcon,
    iconStyle: "text-indigo-500 bg-indigo-50",
  },
];


// --- Notification Card Component ---
const NotificationCard = ({ notification }) => {
  const Icon = notification.Icon;

  return (
    <div className="flex items-start justify-between p-4 sm:p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
      
      {/* Left Section: Icon and Content */}
      <div className="flex items-start flex-grow">
        {/* Icon Container (matches visual style) */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 ${notification.iconStyle}`}>
          <Icon className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          {/* Title and Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-base font-semibold text-gray-800 mr-3">
              {notification.title}
            </p>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full mt-1 sm:mt-0 ${notification.tag.style}`}>
              {notification.tag.label}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-sm text-gray-500 mt-1">
            {notification.description}
          </p>
        </div>
      </div>
      
      {/* Right Section: Time */}
      <div className="flex-shrink-0 ml-4">
        <p className="text-sm text-gray-400 whitespace-nowrap">
          {notification.time}
        </p>
      </div>
    </div>
  );
};


// --- Main Alerts & Notifications Component ---
export default function AlertsAndNotifications() {
  return (
    <div 
      className="p-4 sm:p-8 lg:p-10 bg-gray-50 min-h-screen"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 sm:mb-0">
          Alerts & Notifications
        </h1>
        
        {/* Actions (Monthly dropdown and View Details button) */}
        <div className="flex space-x-3 items-center">
          {/* Dropdown Mock */}
          <div className="relative">
            <select 
              className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 cursor-pointer font-medium"
            >
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          
          {/* View Details Button (Dark Purple) */}
          <button 
            className="px-5 py-2 bg-indigo-900 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-800 transition duration-200"
            style={{ backgroundColor: '#4c2e8c' }} // Using a darker purple color for distinction
          >
            View Details
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notificationsData.map((notification, index) => (
          <NotificationCard key={index} notification={notification} />
        ))}
      </div>
      
    </div>
  );
}