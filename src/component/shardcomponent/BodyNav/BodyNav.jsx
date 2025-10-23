import React from "react";
import { LuBellDot } from "react-icons/lu";

const BodyNav = () => {
  return (
    <div className="w-full bg-white p-4 flex items-center justify-between">

        {/* search icon */}
      <label className="input rounded-2xl">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search Something here..." />
      </label>

      <div className="flex gap-2">
        <div className="md:flex hidden bg-gray-100 shadow p-3 rounded-full">
            <LuBellDot />
        </div>

        <div className="flex gap-2">
            <img src="https://i.ibb.co.com/Kxbp5Nmf/abdullah-ali-VKUxmyn3-TYE-unsplash.jpg" alt="sourov"  className="w-10 h-10 rounded-full"/>

            <div className="md:flex md:flex-col hidden">
                <h1 className="font-bold text-sm">Imran Hosen</h1>
                <p className="text-sm">web Developer</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BodyNav;
