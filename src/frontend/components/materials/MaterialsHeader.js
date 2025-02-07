import React from 'react';
import { useSidebar } from '../../context/SidebarContext';

function MaterialsHeader() {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`flex justify-between items-center py-1 transition-all duration-300 ${isCollapsed ? 'px-[145px]' : 'px-[290px]'}`}>
      {/* Left side: Title */}
      <div className="flex items-center gap-2">
        <h1 className="text-[24px] font-[400] text-[#1A1A1A]">Materials</h1>
        <span className="text-[24px] font-[400] text-[#AAAAAA]">/</span>
        <span className="text-[24px] font-[400] text-[#AAAAAA]">Blanks</span>
      </div>

      {/* Right side: Tabs - fixed at collapsed position */}
      <div className="p-1 bg-[#E6E6E6] rounded-lg flex gap-1 fixed right-40">
        <button className="px-4 py-2 text-[14px] font-[400] bg-white text-gray-900 border border-[#D4D4D4] rounded shadow-sm">
          Inventory
        </button>
        <button className="px-4 py-2 text-[14px] font-[400] text-[#808080] hover:bg-gray-50 rounded">
          Order Queue
        </button>
      </div>
    </div>
  );
}

export default MaterialsHeader; 