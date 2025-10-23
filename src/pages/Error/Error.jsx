import React from "react";
import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Illustration / Left */}
          <div className="w-full lg:w-1/2 p-8 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
            <svg
              className="w-48 h-48"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="32" y="96" width="448" height="320" rx="24" fill="#EEF2FF" />
              <path d="M160 224h192" stroke="#6366F1" strokeWidth="20" strokeLinecap="round" />
              <path d="M160 288h192" stroke="#A78BFA" strokeWidth="20" strokeLinecap="round" />
              <circle cx="392" cy="160" r="16" fill="#7C3AED" />
              <path d="M120 392c0-44.183 35.817-80 80-80h112c44.183 0 80 35.817 80 80v8H120v-8z" fill="#C7D2FE" />
            </svg>
          </div>

          {/* Content / Right */}
          <div className="w-full lg:w-1/2 p-8">
            <div className="text-center lg:text-left">
              <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
              <h2 className="mt-2 text-2xl font-semibold text-gray-700">Page not found</h2>
              <p className="mt-3 text-sm text-gray-500">
                The page you're looking for doesn't exist or has been moved.
                Check the URL or go back to the home page.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/")}
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-500 transition"
                  aria-label="Go to home"
                >
                  Go to Home
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
                  aria-label="Go back"
                >
                  Go Back
                </button>
              </div>

              {/* Helpful links */}
              <div className="mt-6 text-xs text-gray-400">
                Tip: Try one of these —
                <ul className="mt-2 space-y-1 text-gray-500">
                  <li>• Check the URL for typos</li>
                  <li>• Visit the <button onClick={() => navigate("/dashboard")} className="text-indigo-600 ml-1 hover:underline">Dashboard</button></li>
                  <li>• Open the <button onClick={() => navigate("/contact")} className="text-indigo-600 ml-1 hover:underline">Contact</button> page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

