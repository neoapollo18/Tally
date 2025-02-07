import React from 'react';
import QuantityControl from '../common/QuantityControl';

function MaterialItem({ material, onUpdateQuantity }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <img 
            src={material.image} 
            alt={material.name} 
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className="text-sm text-gray-900">{material.name}</span>
      </div>

      <QuantityControl 
        quantity={material.quantity}
        maxQuantity={material.maxQuantity}
        unit={material.unit}
        onIncrease={() => onUpdateQuantity(material.id, true)}
        onDecrease={() => onUpdateQuantity(material.id, false)}
      />
    </div>
  );
}

export default MaterialItem; 