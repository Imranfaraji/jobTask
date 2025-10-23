import React, { useState } from 'react';

// --- Inline SVG Icons (Lucide-like) ---
const SearchIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const EditIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
);
const PlusCircleIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
);
const MoreVerticalIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="12" cy="5" r="1"></circle>
        <circle cx="12" cy="19" r="1"></circle>
    </svg>
);
const UserIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const MailIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const PhoneIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.86-6.86A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const LockIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);
const EyeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);


// --- Static Org Chart Data (Simplified Structure) ---
const orgChartData = [
    { 
        id: 1, name: "Tahsan Khan", title: "Founder - CEO", location: "Boston HQ", 
        avatar: "https://placehold.co/40x40/6d28d9/fff?text=TK", reportsTo: null 
    },
    { 
        id: 2, name: "Herry Kane", title: "Engineering", location: "London Office", 
        avatar: "https://placehold.co/40x40/10b981/fff?text=HK", reportsTo: 1 
    },
    { 
        id: 3, name: "Herry Brooks", title: "Commercial", location: "London Office", 
        avatar: "https://placehold.co/40x40/fbbf24/000?text=HB", reportsTo: 1 
    },
    { 
        id: 4, name: "David Warner", title: "Finance", location: "Boston HQ", 
        avatar: "https://placehold.co/40x40/ef4444/fff?text=DW", reportsTo: 1 
    },
    { 
        id: 5, name: "Azam Khan", title: "Marketing", location: "Boston HQ", 
        avatar: "https://placehold.co/40x40/3b82f6/fff?text=AK", reportsTo: 2 
    },
    { 
        id: 6, name: "Tim David", title: "HR Management", location: "Boston HQ", 
        avatar: "https://placehold.co/40x40/c026d3/fff?text=TD", reportsTo: 3 
    },
    { 
        id: 7, name: "Joe Root", title: "Account Executive", location: "Boston HQ", 
        avatar: "https://placehold.co/40x40/f97316/fff?text=JR", reportsTo: 4 
    },
    { 
        id: 8, name: "Hames James", title: "Account Executive", location: "Boston HQ", 
        avatar: "https://placehold.co/40x40/059669/fff?text=HJ", reportsTo: 6 
    },
    { 
        id: 9, name: "Jaman KHan", title: "Engineering", location: "Boston HQ", 
        avatar: "https://placehold.co/40x40/eab308/000?text=JK", reportsTo: 6 
    },
];

// --- Org Chart Node Component ---
const OrgChartNode = ({ employee }) => {
    return (
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-56 transform transition duration-300 hover:shadow-xl hover:border-indigo-400">
            {/* Avatar and Info */}
            <div className="flex items-center space-x-3">
                <img 
                    src={employee.avatar} 
                    alt={employee.name} 
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/9ca3af/fff?text=?'; }}
                />
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{employee.name}</p>
                    <p className="text-xs text-indigo-600 truncate">{employee.title}</p>
                    <p className="text-xs text-gray-400 truncate mt-0.5">{employee.location}</p>
                </div>
            </div>
            
            {/* Action buttons */}
            <div className="absolute top-2 right-2 flex space-x-1 text-gray-400">
                <button className="p-1 hover:text-gray-700 transition">
                    <MoreVerticalIcon className="w-4 h-4" />
                </button>
            </div>
            
            {/* Add Employee Button */}
            <button className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 p-0.5 bg-white rounded-full text-indigo-600 hover:text-indigo-800 transition shadow-md">
                <PlusCircleIcon className="w-6 h-6" />
            </button>
        </div>
    );
};

// --- Create Employee Modal Component (from uploaded image) ---
const CreateEmployeeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center p-4 transition-opacity duration-300 backdrop-blur-sm">
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-20 rounded-t-2xl">
                    <h2 className="text-xl font-bold text-gray-800">Creating Employee New Account</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-700 transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                {/* Modal Body: Form */}
                <div className="p-6 space-y-6">
                    {/* First Name / Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <InputWithIcon label="First Name" placeholder="Enter name..." Icon={UserIcon} />
                        <InputWithIcon label="Last Name" placeholder="Enter name..." Icon={UserIcon} />
                    </div>

                    {/* Email / Phone Number */}
                    <div className="grid grid-cols-2 gap-4">
                        <InputWithIcon label="Email Address" placeholder="Enter email..." Icon={MailIcon} />
                        <InputWithIcon label="Phone Number" placeholder="Enter number..." Icon={PhoneIcon} />
                    </div>

                    {/* Password */}
                    <InputWithIcon label="Password" placeholder="Enter Password..." Icon={LockIcon} type="password" />

                    {/* Confirm Password */}
                    <InputWithIcon label="Confirm Password" placeholder="Enter Password..." Icon={LockIcon} type="password" />

                </div>

                {/* Modal Footer (Buttons) */}
                <div className="p-6 border-t border-gray-100 flex justify-end space-x-4">
                    <button 
                        onClick={onClose} 
                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
                    >
                        Cancel
                    </button>
                    <button 
                        className="px-6 py-3 text-white font-semibold rounded-xl shadow-md transition duration-200"
                        style={{ backgroundColor: '#4c2e8c' }}
                        onClick={onClose}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper component for form inputs
const InputWithIcon = ({ label, placeholder, Icon, type = "text" }) => {
    const isPassword = type === 'password';
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">{label}</label>
            <div className="relative">
                <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type={isPassword && !showPassword ? "password" : "text"}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
                {isPassword && (
                    <button 
                        type="button" 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <EyeIcon className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
};


// --- Main Component ---
export default function OrgChartDirectory() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // FIX 1: 'employees' এর পরিবর্তে 'orgChartData' ব্যবহার করা হয়েছে।
    // Group employees by who they report to
    const groupedEmployees = orgChartData.reduce((acc, employee) => {
        const reportsToId = employee.reportsTo === null ? 'CEO' : employee.reportsTo;
        if (!acc[reportsToId]) {
            acc[reportsToId] = [];
        }
        acc[reportsToId].push(employee);
        return acc;
    }, {});

    const renderChartLevel = (reportsToId) => {
        const reports = groupedEmployees[reportsToId] || [];
        if (reports.length === 0) return null;

        const isRoot = reportsToId === 'CEO';

        return (
            // Org Chart Level Wrapper
            // Added simple structural lines using Tailwind's pseudo-elements for visualization
            <div className={`flex justify-center w-full relative ${isRoot ? '' : 'pt-12'}`}>
                
                {/* Horizontal line connecting peers (if not the CEO's level) */}
                {!isRoot && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300"></div>
                )}
                
                <div className="flex justify-center space-x-16 relative z-10">
                    {reports.map(employee => (
                        <div key={employee.id} className="org-chart-node flex flex-col items-center relative">
                            
                            {/* Vertical line connecting horizontal line to the employee card */}
                            {!isRoot && (
                                <div className="absolute top-0 w-0.5 h-[13px] bg-gray-300"></div>
                            )}

                            <OrgChartNode employee={employee} />
                            
                            {/* Render reports to this employee (Level Down) */}
                            <div className="mt-12 w-full"> 
                                {renderChartLevel(employee.id)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <div 
            className="p-4 sm:p-8 lg:p-10 bg-gray-50 min-h-screen"
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            <CreateEmployeeModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />

            {/* Main Content Area */}
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 space-y-6">
                
                {/* Top Nav/Actions (Mimicking image layout) */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <div className="flex space-x-4 text-sm font-medium text-gray-600 border-b-2 border-transparent">
                        <button className="text-indigo-600 border-b-2 border-indigo-600 pb-2 flex items-center">
                            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17h-5"></path><path d="M15 13h-2"></path><path d="M15 9h-4"></path></svg>
                            ORG Chart
                        </button>
                        <button className="hover:text-indigo-600 pb-2">Profile</button>
                        <button className="hover:text-indigo-600 pb-2">Attendance</button>
                        <button className="hover:text-indigo-600 pb-2">Time Tracking</button>
                        <button className="hover:text-indigo-600 pb-2">Leave Management</button>
                        {/* ... other nav items */}
                    </div>
                    
                    <div className="flex space-x-3 items-center">
                        <button 
                            className="px-4 py-2 bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 transition flex items-center text-sm"
                            onClick={() => setIsModalOpen(true)}
                        >
                             <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            Create New Account
                        </button>
                    </div>
                </div>


                {/* Search Bar & Edit Button */}
                <div className="flex justify-between items-center space-x-4">
                    <div className="relative flex-1 max-w-lg">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for employee..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 shadow-sm"
                        />
                    </div>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition flex items-center text-sm">
                        <EditIcon className="w-4 h-4 mr-1" />
                        Edit ORG Chart
                    </button>
                </div>
                
                {/* ORG Chart Visualization Area */}
                <div className="min-h-[500px] border border-dashed border-gray-300 rounded-xl bg-gray-50/50 p-8 overflow-x-auto relative org-chart-container">
                    
                    {/* Render the chart starting from the CEO (reportsTo: null) */}
                    <div className="w-full flex justify-center relative z-20">
                        {renderChartLevel('CEO')}
                    </div>

                    {/* Zoom/Pan Controls (Mocked from image) */}
                    <div className="absolute bottom-4 left-4 flex flex-col space-y-2 bg-white rounded-xl shadow-lg border border-gray-200 p-2 text-gray-600 z-30">
                        <button className="hover:bg-gray-100 p-1.5 rounded-lg text-lg">-</button>
                        <button className="hover:bg-gray-100 p-1.5 rounded-lg text-lg">+</button>
                        <hr className="border-gray-200" />
                        <button className="hover:bg-gray-100 p-1.5 rounded-lg">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}