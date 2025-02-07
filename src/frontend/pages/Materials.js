import React from 'react';
import MaterialsHeader from '../components/materials/MaterialsHeader';
import MaterialsList from '../components/materials/MaterialsList';
import { useSidebar } from '../context/SidebarContext';

function Materials() {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className="min-h-screen bg-[#F2F2F2] p-8">
      <MaterialsHeader />
      <div className={`transition-all duration-300 ${isCollapsed ? 'ml-[143px]' : 'ml-[290px]'}`}>
        <div className={`transform-gpu transition-[width] duration-300 ease-in-out ${isCollapsed ? 'w-[1180px]' : 'w-[1034px]'}`}>
          <div className="w-full bg-white rounded-xl border border-[#DEDEDE] mt-2">
            <MaterialsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materials; 