import React, { useState, useEffect } from 'react';
import MaterialItem from './MaterialItem';
import AddMaterial from './AddMaterial';

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
      alert('Failed to update quantity. Please try again.');
    }
  };

  const handleMaterialAdded = (newMaterial) => {
    setMaterials([...materials, newMaterial]);
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
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-end">
        <AddMaterial onMaterialAdded={handleMaterialAdded} />
      </div>
      
      {materials.length === 0 ? (
        <div className="text-center text-gray-500">No materials found</div>
      ) : (
        materials.map((material) => (
          <MaterialItem 
            key={material.id}
            material={material}
            onUpdateQuantity={updateQuantity}
          />
        ))
      )}
    </div>
  );
}

export default MaterialsList; 