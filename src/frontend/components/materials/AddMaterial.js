// import React, { useState } from 'react';

// function AddMaterial({ onMaterialAdded }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [newMaterial, setNewMaterial] = useState({
//     name: '',
//     image: '',
//     quantity: 0,
//     maxQuantity: 24,
//     unit: 'PCS'
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8000/api/materials', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newMaterial),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const createdMaterial = await response.json();
//       onMaterialAdded(createdMaterial);
//       setIsOpen(false);
//       setNewMaterial({
//         name: '',
//         image: '',
//         quantity: 0,
//         maxQuantity: 24,
//         unit: 'PCS'
//       });
//     } catch (err) {
//       console.error('Creation error:', err);
//       alert('Failed to create material. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//       >
//         Add New Material
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h2 className="text-xl font-bold mb-4">Add New Material</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   value={newMaterial.name}
//                   onChange={(e) => setNewMaterial({...newMaterial, name: e.target.value})}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Image Path</label>
//                 <input
//                   type="text"
//                   value={newMaterial.image}
//                   onChange={(e) => setNewMaterial({...newMaterial, image: e.target.value})}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Initial Quantity</label>
//                 <input
//                   type="number"
//                   value={newMaterial.quantity}
//                   onChange={(e) => setNewMaterial({...newMaterial, quantity: parseInt(e.target.value)})}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                   min="0"
//                   required
//                 />
//               </div>

//               <div className="flex justify-end gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
//                 >
//                   Add Material
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddMaterial; 