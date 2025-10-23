import React, { useState } from 'react';

// --- Inline SVG Icons (Lucide-like) ---
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
const UserIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const CalendarIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
const MessageCircleIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const PhoneCallIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.86-6.86A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const UploadCloudIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16"></polyline>
        <line x1="12" y1="12" x2="12" y2="21"></line>
        <path d="M20.39 18.39A5 5 0 0 0 18 2H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5"></path>
    </svg>
);

// --- Static Data ---
const membersList = [
  { name: "Shorab Hossen", avatar: "https://placehold.co/40x40/6d28d9/fff?text=SH" },
  { name: "Olivia Rhye", avatar: "https://placehold.co/40x40/f9a8d4/fff?text=OR" },
  { name: "Marvin McKinney", avatar: "https://placehold.co/40x40/fbbf24/000?text=MM" },
];
const labelsList = ["Meeting", "Design", "Development", "Marketing"];
const priorityOptions = [
    { label: "Urgent", color: "bg-red-500", icon: "🚩" },
    { label: "High", color: "bg-orange-500", icon: "🚩" },
    { label: "Normal", color: "bg-indigo-500", icon: "🚩" },
    { label: "Low", color: "bg-gray-400", icon: "🚩" },
];
const groupOptions = [
    { label: "To Do", color: "bg-red-500", icon: "🔴" },
    { label: "In Progress", color: "bg-orange-500", icon: "🟠" },
    { label: "Done", color: "bg-green-500", icon: "🟢" },
    { label: "Need Review", color: "bg-purple-500", icon: "🟣" },
];
const colorPalette = [
    '#9B59B6', '#E91E63', '#F39C12', '#3498DB', '#1ABC9C', '#E74C3C', '#2ECC71', '#F1C40F'
];


// --- Create Task Modal Component ---
const CreateTaskModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const prioritySelected = "Urgent"; // Mock state for demo
  const groupSelected = "To Do"; // Mock state for demo

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center p-4 transition-opacity duration-300 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-20 rounded-t-2xl">
          <h2 className="text-xl font-bold text-gray-800">Create New Task</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-700 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Modal Body: Form */}
        <div className="p-6 space-y-6">
          
          {/* Dotted Divider */}
          <hr className="border-t-2 border-dashed border-gray-200" />
          
          {/* Task Title */}
          <div className="space-y-2">
            <label className="text-base font-semibold text-gray-700">Task Title</label>
            <input 
              type="text"
              placeholder="Meeting Client for Dashboard UI"
              defaultValue="Meeting Client for Dashboard UI"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>

          {/* Write Description */}
          <div className="space-y-2">
            <label className="text-base font-semibold text-gray-700">Write Description</label>
            <input 
              type="text"
              placeholder="Meeting with a client for a Dashboard UI project..."
              defaultValue="Meeting with a client for a Dashboard UI project..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>

          {/* Add Member / Add Labels (Grid Row 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Add Member */}
            <div className="space-y-2">
              <label className="text-base font-semibold text-gray-700">Add Member</label>
              <div className="relative">
                <select className="appearance-none w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 cursor-pointer">
                  {membersList.map((member, index) => (
                    <option key={index}>{member.name}</option>
                  ))}
                </select>
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <svg className="fill-current h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            {/* Add Labels */}
            <div className="space-y-2">
              <label className="text-base font-semibold text-gray-700">Add Labels</label>
              <div className="relative">
                <select className="appearance-none w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 cursor-pointer">
                  {labelsList.map((label, index) => (
                    <option key={index}>{label}</option>
                  ))}
                </select>
                <svg className="fill-current h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Due Date / Add Time (Grid Row 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Due Date */}
            <div className="space-y-2">
              <label className="text-base font-semibold text-gray-700">Due Date</label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Select date"
                  defaultValue="Select date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Add Time */}
            <div className="space-y-2">
              <label className="text-base font-semibold text-gray-700">Add Time</label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Select time"
                  defaultValue="Select time"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
                <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Dotted Divider */}
          <hr className="border-t-2 border-dashed border-gray-200" />

          {/* Add Group / Set Priority (Grid Row 3 - Checkboxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Add Group */}
            <div className="space-y-3">
              <label className="text-base font-semibold text-gray-700">Add Group</label>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {groupOptions.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input 
                            type="radio" 
                            name="taskGroup"
                            defaultChecked={option.label === groupSelected}
                            className={`form-radio h-5 w-5 ${option.color.replace('bg-', 'text-')} rounded-full border-gray-300 focus:ring-indigo-500`} 
                            style={{ color: option.color.replace('bg-', '') }} // Custom color simulation
                        />
                        <span className="text-gray-700">{option.icon} {option.label}</span>
                    </label>
                ))}
              </div>
            </div>

            {/* Set Priority */}
            <div className="space-y-3">
              <label className="text-base font-semibold text-gray-700">Set Priority</label>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {priorityOptions.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input 
                            type="checkbox" 
                            defaultChecked={option.label === prioritySelected}
                            className={`form-checkbox h-5 w-5 ${option.color.replace('bg-', 'text-')} rounded-md border-gray-300 focus:ring-indigo-500`}
                        />
                        <span className="text-gray-700">{option.icon} {option.label}</span>
                    </label>
                ))}
              </div>
            </div>
          </div>

          {/* Dotted Divider */}
          <hr className="border-t-2 border-dashed border-gray-200" />
          
          {/* File Upload Area */}
          <div className="flex justify-center items-center py-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
            <div className="text-center space-y-2">
              <UploadCloudIcon className="w-8 h-8 mx-auto text-gray-400" />
              <p className="text-sm font-semibold text-indigo-600">
                Click to upload
                <span className="text-gray-500 font-normal"> or drag and drop</span>
              </p>
              <p className="text-xs text-gray-400">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
          </div>

          {/* Color Palette */}
          <div className="flex justify-start space-x-2 pt-2">
              {colorPalette.map((color, index) => (
                  <div 
                      key={index}
                      className={`w-8 h-8 rounded-lg cursor-pointer transition transform hover:scale-110 shadow-md`}
                      style={{ backgroundColor: color }}
                  ></div>
              ))}
          </div>

        </div>

        {/* Modal Footer (Buttons) */}
        <div className="p-6 border-t border-gray-100 flex justify-end space-x-4">
          <button 
            onClick={onClose} 
            className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button 
            className="px-6 py-2 text-white font-semibold rounded-xl shadow-md transition duration-200"
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


// --- Schedule Modal Component (from previous step - simplified for this file's context) ---
const ScheduleModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const membersList = [
      { name: "Olivia Rhye", username: "@olivia", avatar: "https://placehold.co/40x40/6d28d9/fff?text=OR" },
      { name: "Marvin McKinney", username: "@olivia", avatar: "https://placehold.co/40x40/fbbf24/000?text=MM" },
      { name: "Guy Hawkins", username: "@olivia", avatar: "https://placehold.co/40x40/059669/fff?text=GH" },
      { name: "Arlene McCoy", username: "@olivia", avatar: "https://placehold.co/40x40/ef4444/fff?text=AM" },
      { name: "Robert Fox", username: "@olivia", avatar: "https://placehold.co/40x40/3b82f6/fff?text=RF" },
      { name: "Jane Cooper", username: "@jane", avatar: "https://placehold.co/40x40/ec4899/fff?text=JC" },
    ];
    
    const MemberSelector = ({ member }) => (
      <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 transition">
        <div className="flex items-center space-x-3">
          <img 
            className="w-8 h-8 rounded-full" 
            src={member.avatar} 
            alt={member.name}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/9ca3af/fff?text=?'; }}
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{member.name}</p>
            <p className="text-xs text-gray-400">{member.username}</p>
          </div>
        </div>
        <CheckSquareIcon className="w-4 h-4 text-indigo-600" />
      </div>
    );

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center p-4 transition-opacity duration-300 backdrop-blur-sm">
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-20 rounded-t-2xl">
                    <h2 className="text-xl font-bold text-gray-800">Project Meeting Schedule</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-gray-300 transform -translate-x-1/2 hidden lg:block"></div>

                    {/* Left Column (Inputs) */}
                    <div className="space-y-6 pb-6 lg:pb-0 relative">
                        <h3 className="text-base font-semibold text-gray-700">Task Title</h3>
                        <input type="text" placeholder="Meeting Client for Dashboard UI" defaultValue="Meeting Client for Dashboard UI" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" />
                        
                        {/* Name Input */}
                        <div>
                        <h3 className="text-base font-semibold text-gray-700 mb-2">Name</h3>
                        <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="text" defaultValue="Shorab Hossen" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" />
                        </div>
                        </div>

                        {/* Due Date Input */}
                        <div>
                        <h3 className="text-base font-semibold text-gray-700 mb-2">Due Date</h3>
                        <div className="relative">
                            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="text" defaultValue="24/05/25" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" />
                        </div>
                        </div>

                        {/* Conversation Type */}
                        <div>
                        <h3 className="text-base font-semibold text-gray-700 mb-2">What type of conversation?</h3>
                        <div className="flex space-x-4">
                            <label className="flex items-center justify-center space-x-2 border border-indigo-600 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl cursor-pointer transition w-1/2">
                            <MessageCircleIcon className="w-5 h-5" />
                            <span>Message</span>
                            </label>
                            <label className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl cursor-pointer transition w-1/2 hover:border-indigo-400">
                            <PhoneCallIcon className="w-5 h-5" />
                            <span>Audio/Video</span>
                            </label>
                        </div>
                        </div>

                        {/* App Conversation Type Checkboxes */}
                        <div>
                        <h3 className="text-base font-semibold text-gray-700 mb-2">What type of app conversation you want?</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            
                            {/* Left side checkboxes */}
                            <div className="space-y-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                                <span className="text-gray-700">On Zoom</span>
                                <CheckSquareIcon className="w-4 h-4 text-indigo-600 ml-auto" />
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                                <span className="text-gray-700">On Meet</span>
                                <CheckSquareIcon className="w-4 h-4 text-indigo-600 ml-auto" />
                            </label>
                            </div>

                            {/* Right side checkboxes */}
                            <div className="space-y-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                                <span className="text-gray-700">On Slack</span>
                                <CheckSquareIcon className="w-4 h-4 text-indigo-600 ml-auto" />
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                                <span className="text-gray-700">On Own</span>
                                <CheckSquareIcon className="w-4 h-4 text-indigo-600 ml-auto" />
                            </label>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    {/* Right Column (Add Member) */}
                    <div className="space-y-4 pt-6 lg:pt-0">
                        <h3 className="text-base font-semibold text-gray-700">Add Member</h3>
                        <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="search" placeholder="Search something here..." className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" />
                        <svg className="fill-current h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>

                        {/* Member List */}
                        <div className="space-y-1 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                        <style jsx>{`
                            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                            .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 3px; }
                            .custom-scrollbar::-webkit-scrollbar-track { background: #f9fafb; }
                        `}</style>
                        {membersList.map((member, index) => (
                            <MemberSelector key={index} member={member} />
                        ))}
                        </div>
                    </div>
                </div>

                {/* Modal Footer (Buttons) */}
                <div className="p-6 border-t border-gray-100 flex justify-end space-x-4">
                    <button onClick={onClose} className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition">
                        Cancel
                    </button>
                    <button className="px-6 py-2 bg-indigo-900 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-800 transition duration-200" style={{ backgroundColor: '#4c2e8c' }} onClick={onClose}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Calendar Grid Logic (Unchanged from previous response) ---
const getDayName = (index) => {
  const days = ["Wed 06", "Thu 07", "Fri 08", "Sat 09", "Sun 10", "Mon 11"];
  return days[index];
};

const eventsData = [
    { title: "Project Review Meet...", name: "Tahsan Khan", time: "5:30 AM - 07:00 AM", durationHours: 1.5, day: 0, startHour: 5.5, color: 'bg-purple-500', participants: ['https://placehold.co/30x30/f9a8d4/fff?text=T', 'https://placehold.co/30x30/60a5fa/fff?text=J', 'https://placehold.co/30x30/fde047/000?text=A'], location: "on Zoom", },
    { title: "Sales Performance...", name: "Herry Brooks", time: "6:10 AM - 07:30 AM", durationHours: 1.33, day: 0, startHour: 6.16, color: 'bg-red-400', participants: ['https://placehold.co/30x30/ef4444/fff?text=H'], location: null, },
    { title: "Marketing Strategy...", name: "Herry Kane", time: "7:10 AM - 07:50 AM", durationHours: 0.67, day: 1, startHour: 7.16, color: 'bg-indigo-400', participants: ['https://placehold.co/30x30/818cf8/fff?text=H'], location: null, },
    { title: "Project Review Meet...", name: "Tahsan Khan", time: "8:30 AM - 09:30 AM", durationHours: 1, day: 2, startHour: 8.5, color: 'bg-purple-500', participants: ['https://placehold.co/30x30/f9a8d4/fff?text=T'], location: null, },
    { title: "Employee Recruitm...", name: "Azam Khan", time: "8:00 AM - 09:20 AM", durationHours: 1.33, day: 3, startHour: 8, color: 'bg-green-400', participants: ['https://placehold.co/30x30/4ade80/fff?text=A', 'https://placehold.co/30x30/f9a8d4/fff?text=T'], location: "On Slack", },
    { title: "Marketing Strategy...", name: "Herry Kane", time: "10:00 AM - 10:30 AM", durationHours: 0.5, day: 3, startHour: 10, color: 'bg-yellow-400', participants: ['https://placehold.co/30x30/fde047/000?text=H'], location: null, },
    { title: "Bi-Weekly Marketin...", name: "Matt Henry", time: "8:30 AM - 09:30 AM", durationHours: 1, day: 1, startHour: 8.5, color: 'bg-teal-400', participants: ['https://placehold.co/30x30/2dd4bf/fff?text=M'], location: null, },
    { title: "Quarterly Financial...", name: "Tim David", time: "6:00 AM - 06:30 AM", durationHours: 0.5, day: 3, startHour: 6, color: 'bg-pink-400', participants: ['https://placehold.co/30x30/f472b6/fff?text=T'], location: null, },
    { title: "Customer Feedback...", name: "James Henry", time: "8:30 AM - 09:30 AM", durationHours: 1, day: 4, startHour: 8.5, color: 'bg-orange-500', participants: ['https://placehold.co/30x30/f97316/fff?text=J'], location: "On Meet", },
];
const START_HOUR = 6; 
const END_HOUR = 11; 

const CalendarEvent = ({ event }) => {
  const totalHours = END_HOUR - START_HOUR;
  const offsetHours = event.startHour - START_HOUR;
  const topPercent = (offsetHours / totalHours) * 100;
  const heightPercent = (event.durationHours / totalHours) * 100;

  if (topPercent >= 100 || (topPercent + heightPercent) <= 0) {
    return null;
  }

  const remainingParticipants = event.participants.length > 3 ? `+${event.participants.length - 3}` : null;
  
  return (
    <div
      className={`absolute w-[95%] left-[2.5%] p-2 rounded-lg shadow-md z-10 transition-all cursor-pointer`}
      style={{
        top: `${topPercent}%`,
        height: `${heightPercent}%`,
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        borderLeft: `5px solid ${event.color.split('-')[1] === 'purple' ? '#8b5cf6' : event.color.split('-')[1] === 'red' ? '#f87171' : event.color.split('-')[1] === 'indigo' ? '#6366f1' : event.color.split('-')[1] === 'green' ? '#4ade80' : event.color.split('-')[1] === 'pink' ? '#f472b6' : '#f97316'}`, 
        padding: heightPercent < 10 ? '4px 6px' : '8px', 
      }}
    >
      <div className="text-xs font-semibold text-gray-800 truncate">
        {event.title}
      </div>
      <div className="text-xs text-gray-500 truncate mt-0.5">
        {event.name}
      </div>
      <div className="text-[10px] text-gray-400 mt-1">
        {event.time}
      </div>

      {(event.participants.length > 0 || event.location) && heightPercent > 8 && (
        <div className="flex justify-between items-center mt-2 pt-1 border-t border-gray-100">
          <div className="flex -space-x-1 overflow-hidden">
            {event.participants.slice(0, 3).map((src, i) => (
              <img
                key={i}
                className="inline-block h-4 w-4 rounded-full ring-1 ring-white"
                src={src}
                alt=""
              />
            ))}
            {remainingParticipants && (
              <span className="text-[10px] h-4 w-4 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 ring-1 ring-white">
                {remainingParticipants}
              </span>
            )}
          </div>
          {event.location && (
            <span className="text-[10px] font-medium text-purple-600">
              {event.location}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// Main Calendar Component with both Modal Logics
export default function Calendar() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false); // New state for Create Task

  const timeLabels = [];
  for (let i = START_HOUR; i <= END_HOUR; i++) {
    timeLabels.push(`${i.toString().padStart(2, '0')} AM`);
  }

  const calendarDays = [0, 1, 2, 3, 4]; // Wed 06 to Sun 10

  return (
    <div 
      className="p-4 sm:p-8 lg:p-10 bg-gray-50 min-h-screen"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      
      {/* 1. Schedule Modal */}
      <ScheduleModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />

      {/* 2. Create Task Modal */}
      <CreateTaskModal 
        isOpen={isTaskModalOpen} 
        onClose={() => setIsTaskModalOpen(false)} 
      />

      {/* 3. Calendar Content */}
      <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-bold text-gray-800">November 06, 2024</h1>
          <div className="flex md:flex-row flex-col space-x-3">
            
            {/* Schedule Button */}
            <button 
              onClick={() => setIsScheduleModalOpen(true)}
              className="px-5 py-2 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition flex items-center"
            >
              <CalendarIcon className="w-4 h-4 mr-1" />
              Schedule
            </button>
            
            {/* --- Create Task Button (Triggers New Modal) --- */}
            <button 
              onClick={() => setIsTaskModalOpen(true)} // Set new state to true
              className="px-5 py-2 bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 transition flex items-center"
            >
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Create Task
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 border-b border-dashed pb-3 mb-3">
          You have 2 meetings and 1 events today
        </p>

        {/* Action Bar (Unchanged) */}
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="flex space-x-2">
            <button className="px-4 py-1.5 bg-gray-100 text-gray-800 font-semibold rounded-lg text-sm">Today</button>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <select className="appearance-none block bg-white border border-gray-300 text-gray-700 py-1.5 pl-3 pr-8 rounded-lg text-sm cursor-pointer font-medium">
                <option>Weekly</option>
                <option>Daily</option>
                <option>Monthly</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <button className="flex items-center text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3L2 3"></path><path d="M10 9L10 15"></path><path d="M6 6L6 18"></path><path d="M14 6L14 18"></path><path d="M18 9L18 15"></path></svg>
              Filter
            </button>
            <button className="flex items-center text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 6H5.25A3.75 3.75 0 0 0 2 12A3.75 3.75 0 0 0 5.25 18"></path></svg>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid (Unchanged) */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        
        {/* Day Headers */}
        <div className="grid grid-cols-[auto_repeat(5,_minmax(0,_1fr))] border-b border-gray-200 divide-x divide-gray-200">
          <div className="h-10"></div>
          {calendarDays.map((dayIndex) => (
            <div key={dayIndex} className="p-2 text-center text-sm font-semibold text-gray-700">
              {getDayName(dayIndex)}
            </div>
          ))}
        </div>

        {/* Time Slots and Events */}
        <div className="grid grid-cols-[auto_repeat(5,_minmax(0,_1fr))] divide-x divide-gray-200 relative">
          
          {/* Time Labels (Left Column) */}
          <div className="flex flex-col divide-y divide-gray-200">
            {timeLabels.map((time) => (
              <div 
                key={time} 
                className="h-20 flex-shrink-0 flex items-start justify-end pr-3 text-xs text-gray-400 font-medium pt-1"
                style={{ height: '80px' }}
              >
                {time}
              </div>
            ))}
            <div className="h-20"></div>
          </div>

          {/* Day Columns */}
          {calendarDays.map((dayIndex) => (
            <div 
              key={dayIndex} 
              className="relative h-full"
              style={{ minHeight: `${(END_HOUR - START_HOUR + 1) * 80}px` }}
            >
              {/* Background Stripes */}
              <div 
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, #f3f4f6, #f3f4f6 10px, transparent 10px, transparent 20px)',
                }}
              ></div>

              {/* Hourly Grid Lines */}
              <div className="absolute inset-0 flex flex-col divide-y divide-gray-200 pointer-events-none">
                {timeLabels.map((_, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0" 
                    style={{ height: '80px' }} 
                  ></div>
                ))}
              </div>

              {/* Events in this column */}
              <div className="absolute inset-0 z-10">
                {eventsData
                  .filter(event => event.day === dayIndex)
                  .map((event, index) => (
                    <CalendarEvent 
                      key={index} 
                      event={event} 
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}