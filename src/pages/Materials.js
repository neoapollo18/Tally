import React from 'react';
import MaterialsHeader from '../components/materials/MaterialsHeader';
import MaterialsList from '../components/materials/MaterialsList';

function Materials() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] p-8">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <MaterialsHeader />
        <MaterialsList />
      </div>
    </div>
  );
}

export default Materials; 