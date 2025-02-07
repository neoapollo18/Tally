import React, { useState, useEffect } from 'react';
import MaterialItem from './MaterialItem';

function MaterialsList() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/materials');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMaterials(data);
      setError(null);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch materials. Is the server running?');
      setMaterials([]);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (id, increment) => {
    const material = materials.find(m => m.id === id);
    const newQuantity = material.quantity + (increment ? 1 : -1);
    
    try {
      if (id > 1000000000) {
        setMaterials(materials.map(material => {
          if (material.id === id) {
            return { ...material, quantity: Math.max(0, newQuantity) };
          }
          return material;
        }));
        return;
      }

      const response = await fetch(`http://localhost:8000/api/materials/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: Math.max(0, newQuantity) }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const updatedMaterial = await response.json();
      
      setMaterials(materials.map(material => {
        if (material.id === id) {
          return updatedMaterial;
        }
        return material;
      }));
    } catch (err) {
      console.error('Update error:', err);
      setMaterials(materials.map(material => {
        if (material.id === id) {
          return { ...material, quantity: Math.max(0, newQuantity) };
        }
        return material;
      }));
    }
  };

  const handleAddNew = async () => {
    const newMaterial = {
      name: "Gildan T-Shirt - Black / M",
      quantity: 0,
      MaxQuantity: 24,
      image: "/Images/shirt.png",
      unit: "PCS"
    };

    try {
      const response = await fetch('http://localhost:8000/api/materials/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMaterial),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Server error:', errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const addedMaterial = await response.json();
      console.log('Added material:', addedMaterial);
      setMaterials([...materials, addedMaterial]);
    } catch (err) {
      console.error('Add error:', err);
      setMaterials([...materials, { ...newMaterial, id: Date.now() }]);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/materials/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Deleted material:', id);
      setMaterials(materials.filter(material => material.id !== id));
    } catch (err) {
      console.error('Delete error:', err);
      setMaterials(materials.filter(material => material.id !== id));
    }
  };

  if (loading) return (
    <div className="p-4 text-center text-gray-600">
      Loading materials...
    </div>
  );

  if (error) return (
    <div className="p-4 text-center">
      <div className="text-red-500 mb-2">{error}</div>
      <button 
        onClick={fetchMaterials}
        className="text-blue-500 hover:text-blue-600"
      >
        Try again
      </button>
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      <div className="px-6 py-4">
        <div className="relative w-full">
          <div className="flex items-center gap-2 max-w-[600px]">
            <div className="relative w-[400px]">
              <input
                type="text"
                placeholder="Search Materials"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DEDEDE] rounded text-[14px] text-[#858585] placeholder-[#858585] focus:outline-none focus:border-[#DEDEDE]"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667zM14 14l-2.9-2.9" stroke="#808080" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="flex gap-2 ml-3">
              <button>
                <img src="/Icons/Frame.svg" alt="Filter" className="w-7 h-7" />
              </button>
              <button>
                <img src="/Icons/arrows.svg" alt="Sort" className="w-7 h-7" />
              </button>
            </div>
          </div>

          <button 
            onClick={handleAddNew}
            className="fixed right-5 top-[18px] z-50 flex items-center gap-2 px-4 py-2 bg-[#444EAA] text-white rounded text-[13px] font-light hover:bg-[#3b43a0]"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Add New
          </button>
        </div>
        
        <div className="mt-4">
          {materials.length === 0 ? (
            <div className="text-center  text-gray-500">No materials found</div>
          ) : (
            <div className="flex flex-col -mx-6">
              {materials.map((material) => (
                <MaterialItem 
                  key={material.id}
                  material={material}
                  onUpdateQuantity={updateQuantity}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MaterialsList; 