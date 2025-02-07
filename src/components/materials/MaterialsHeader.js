import React from 'react';

function MaterialsHeader() {
  return (
    <div className="bg-white">
      {/* Title and Navigation */}
      <div className="flex items-center justify-between px-6 py-5 border-b">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-medium text-gray-900">Materials</h1>
          <span className="text-gray-400 text-2xl">/</span>
          <span className="text-gray-400 text-2xl">Blanks</span>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2">
          <button className="px-5 py-2 text-sm bg-white text-gray-900 rounded-lg shadow-sm border">
            Inventory
          </button>
          <button className="px-5 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-lg">
            Order Queue
          </button>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="flex items-center gap-3 px-6 py-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search Materials"
            className="w-full pl-8 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#444EAA] focus:ring-1 focus:ring-[#444EAA]"
          />
          <svg
            className="absolute left-2.5 top-2.5 text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14L11 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Filter Button */}
        <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Sort Button */}
        <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 2.5M10 2.5L15 7.5M10 2.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Add New Button */}
        <button className="px-4 py-2 bg-[#444EAA] text-white rounded-lg text-sm font-medium hover:bg-[#3b429b] flex items-center gap-2">
          <span>+</span>
          Add New
        </button>
      </div>
    </div>
  );
}

export default MaterialsHeader; 