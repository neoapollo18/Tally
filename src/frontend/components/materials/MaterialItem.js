import React from 'react';
import QuantityControl from '../common/QuantityControl';

function MaterialItem({ material, onUpdateQuantity, onDelete }) {
  return (
    <div className="group flex items-center justify-between px-6 py-3.5 hover:bg-[#FAFAFA] relative">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-white rounded border border-[#DEDEDE] p-1.5">
          <img 
            src="/Images/shirt.png"
            alt={material.name}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-[#1A1A1A] text-[14px] font-light">{material.name}</span>
      </div>

      <div className="flex items-center">
        <button 
          onClick={() => onDelete(material.id)}
          className="opacity-0 group-hover:opacity-100 absolute right-[200px] p-2 text-red-500 hover:text-red-700 transition-opacity duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7v11c0 2 1 3 3 3h6c2 0 3-1 3-3V7H6z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M4 7h16M10 11v6M14 11v6M8 7l1-4h6l1 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="flex items-center">
          <button 
            onClick={() => onUpdateQuantity(material.id, false)}
            className="w-10 h-10 flex items-center justify-center border border-[#DEDEDE] rounded-l bg-white hover:bg-gray-50"
          >
            <span className="text-[#666666] text-xl">−</span>
          </button>
          <div className="flex flex-col border-t border-b border-[#DEDEDE] h-10 min-w-[70px]">
            <div className="flex-1 flex items-center justify-center bg-white">
              <div className="text-[18px] leading-none font-normal">{material.quantity}</div>
            </div>
            <div className="h-[1px] bg-[#DEDEDE]"></div>
            <div className="flex-1 flex items-center justify-center bg-[#F5F5F5]">
              <div className="text-[11px] leading-none text-[#999999] tracking-wide">
                {material.maxQuantity} PCS
              </div>
            </div>
          </div>
          <button 
            onClick={() => onUpdateQuantity(material.id, true)}
            className="w-10 h-10 flex items-center justify-center border border-[#DEDEDE] rounded-r bg-white hover:bg-gray-50"
          >
            <span className="text-[#666666] text-xl">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MaterialItem;