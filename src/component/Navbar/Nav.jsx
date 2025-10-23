import React from "react";
import { MdKeyboardArrowRight, MdLogout } from "react-icons/md";
import { NavLink } from "react-router";

// Helper function to create inline SVG icons dynamically
const createIcon = (d, viewBox = "0 0 24 24") => (props) => (
  <svg {...props} viewBox={viewBox} fill="currentColor">
    <path d={d} />
  </svg>
);

// ===== Icons (Material Design Inline SVG) =====
const MdOutlineDashboard = createIcon("M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z");
const MdOutlineWatchLater = createIcon("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z");
const MdOutlinePeopleAlt = createIcon("M16.67 13.13C18.04 14.2 19 15.65 19 17.5V22H2v-4.5c0-1.85.96-3.3 2.33-4.37C5.7 11.94 8.71 11.2 12 11.2c3.29 0 6.3.74 8.67 1.93zM16.67 17a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33zm-5.67-4.14c-1.82 0-3.3-1.48-3.3-3.3s1.48-3.3 3.3-3.3 3.3 1.48 3.3 3.3-1.48 3.3-3.3 3.3z");
const MdOutlineGroups = createIcon("M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm8 2c-2.33 0-6.99 1.17-8 3.5V19h16v-2.5c-.01-2.33-4.67-3.5-7.99-3.5zM8 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z");
const MdOutlineSsidChart = createIcon("M21 5H3v14h18V5zM8 17H5v-4h3v4zm6 0h-3v-2h3v2zm6 0h-3v-6h3v6z");
const MdOutlinePersonAddAlt = createIcon("M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z");
const MdOutlineForum = createIcon("M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z");
const MdOutlineChecklist = createIcon("M14 10H3v2h11v-2zm0-4H3v2h11V6zm0 8H3v2h11v-2zm3-4v.48L19 12v-.48l-2-2.02zm0 4v.48L19 16v-.48l-2-2.02z");
const MdOutlineCalendarMonth = createIcon("M19 4h-2V2h-2v2H9V2H7v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z");
const MdOutlineHub = createIcon("M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-3l6 0-6-6 6 0 0 6-6-6z");
const MdOutlineCurrencyExchange = createIcon("M10 18H5V8h5v10zm-5-8h5v-2H5v2zm12 0h-5V8h5v2zm-5 8h5v-6h-5v6zm10 2H2V4h18v16zm-2-2V6H4v12h14z");
const MdOutlineFeed = createIcon("M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zM7 7h6v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2z");
const MdOutlineLocalLibrary = createIcon("M12 11.2c-1.57 0-2.83 1.28-2.83 2.8s1.28 2.83 2.8 2.83 2.83-1.28 2.83-2.83-1.26-2.8-2.8-2.8zm-.83 6.72c-.44-.24-.73-.7-.73-1.22 0-.82.68-1.5 1.5-1.5.82 0 1.5.68 1.5 1.5 0 .52-.29.98-.73 1.22L20 20.25V4.74c0-.98-.8-1.78-1.78-1.78H5.78c-.98 0-1.78.8-1.78 1.78V20.25l7.17-3.33zM12 15.5c-1.24 0-2.24-1-2.24-2.24 0-1.24 1-2.24 2.24-2.24 1.24 0 2.24 1 2.24 2.24 0 1.24-1 2.24-2.24 2.24z");
const MdOutlinePolicy = createIcon("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z");
const MdOutlineHelpOutline = createIcon("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 13.37 13 14 13 15h-2v-.5c0-1.1.45-2.11 1.19-2.83l1.24-1.26c.37-.36.56-.86.56-1.42 0-.98-.8-1.75-1.77-1.75s-1.77.77-1.77 1.75H9c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z");
const MdOutlineSettings = createIcon("M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.2-.17.25-.45.12-.68l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.09-.73-1.71-.97l-.36-2.61C14.07 2.19 13.84 2 13.5 2h-3c-.35 0-.58.19-.68.44l-.36 2.61c-.62.24-1.19.57-1.71.97l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.23-.08.51.12.68l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.2.17-.25.45-.12.68l2 3.46c.12.22.39.31.61.22l2.49-1c.52.4 1.09.73 1.71.97l.36 2.61c.1.25.33.44.68.44h3c.35 0 .58-.19.68-.44l.36-2.61c.62-.24 1.19-.57 1.71-.97l2.49 1c.22.09.49 0 .61-.22l2-3.46c.13-.23.08-.51-.12-.68l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z");


// ===== Navigation Data =====
const navigationItems = [
  { "name": "Dashboard", "pathName": "/", "icon": "MdOutlineDashboard" },
  { "name": "Time Tracking", "pathName": "/time-tracking", "icon": "MdOutlineWatchLater" },
  { "name": "Meeting", "pathName": "/meetings", "icon": "MdOutlinePeopleAlt" },
  { "name": "Employees", "pathName": "/employees", "icon": "MdOutlineGroups" },
  { "name": "Company Statistic", "pathName": "/company-statistics", "icon": "MdOutlineSsidChart" },
  { "name": "Recruitment", "pathName": "/recruitment", "icon": "MdOutlinePersonAddAlt" },
  { "name": "Messages", "pathName": "/messages", "icon": "MdOutlineForum" },
  { "name": "Task", "pathName": "/tasks", "icon": "MdOutlineChecklist" },
  { "name": "Calendar", "pathName": "/calendar", "icon": "MdOutlineCalendarMonth" },
  { "name": "Project Collaboration", "pathName": "/projects", "icon": "MdOutlineHub" },
  { "name": "HMRC", "pathName": "/hmrc", "icon": "MdOutlineCurrencyExchange" },
  { "name": "NewsFeed", "pathName": "/newsfeed", "icon": "MdOutlineFeed" },
  { "name": "Course", "pathName": "/courses", "icon": "MdOutlineLocalLibrary" },
  { "name": "Policies", "pathName": "/policies", "icon": "MdOutlinePolicy" },
  { "name": "Metro Assistant", "pathName": "/assistant", "icon": "MdOutlineHelpOutline" },
  { "name": "Setting", "pathName": "/settings", "icon": "MdOutlineSettings" }
];

// ===== Icon Map =====
const IconMap = {
  MdOutlineDashboard, MdOutlineWatchLater, MdOutlinePeopleAlt,
  MdOutlineGroups, MdOutlineSsidChart, MdOutlinePersonAddAlt,
  MdOutlineForum, MdOutlineChecklist, MdOutlineCalendarMonth,
  MdOutlineHub, MdOutlineCurrencyExchange, MdOutlineFeed,
  MdOutlineLocalLibrary, MdOutlinePolicy, MdOutlineHelpOutline,
  MdOutlineSettings
};

// ===== Single Nav Item =====
const NavItem = ({ item }) => {
  const Icon = IconMap[item.icon];
  return (
    <NavLink
      to={item.pathName}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition-all 
         ${isActive ? "bg-indigo-600 text-white shadow-lg" : "text-gray-700 hover:bg-gray-100"}`
      }
    >
      {Icon && <Icon className="w-6 h-6" />}
      <span className="text-sm hidden lg:flex">{item.name}</span>
    </NavLink>
  );
};

// ===== Sidebar Component =====
const DashboardSidebar = () => {
  return (
    <aside className="lg:w-[15%] h-full bg-white  border-r border-r-gray-300 border-gray-200 flex flex-col">
      {/* Header / Logo */}
      <div className="  flex justify-between lg:px-2 py-4 ">
        <img src="https://i.ibb.co.com/DPWLzB6j/Untitled-design.png" alt="" />
        <div className="hidden lg:flex lg:flex-col">
            <h1 className="font-extrabold text-sm">METRO SOLVER</h1>
            <p className="text-sm  font-bold">Your it partner</p>
        </div>

        <div className=" lg:flex lg:items-center lg:justify-center hidden bg-black h-8 w-8 rounded-md">
            <MdKeyboardArrowRight className="text-white font-bold"/>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {navigationItems.map((item) => (
          <NavItem key={item.pathName} item={item} />
        ))}
      </nav>

      <div className="flex mt-20 px-4  items-center font-bold">
        <span><MdLogout /></span>
        <button className="hidden md:flex">Log Out</button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
