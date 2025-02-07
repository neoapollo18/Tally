import React from 'react';

function QuantityControl({ quantity, maxQuantity, unit, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={onDecrease}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg"
        disabled={quantity <= 0}
      >
        −
      </button>
      
      <div className="flex flex-col items-center w-20">
        <div className={`w-full px-3 py-1 text-center rounded-lg ${
          quantity > 0 ? 'bg-[#F3F4FC] border border-[#DADCEE]' : 'bg-white border border-gray-200'
        }`}>
          {quantity}
        </div>
        <span className="text-xs text-gray-400">{maxQuantity} {unit}</span>
      </div>

      <button 
        onClick={onIncrease}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg"
      >
        +
      </button>
    </div>
  );
}

export default QuantityControl; 