import React, { useState } from 'react';
import ProductList from '../components/Inventory/ProductList';
import AddProductForm from '../components/Inventory/AddProductForm';
import { useInventory } from '../hooks/useInventory';

const Inventory: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useInventory();
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Inventory</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowAddForm(!showAddForm)}
      >
        {showAddForm ? 'Cancel' : 'Add New Product'}
      </button>
      {showAddForm && <AddProductForm onAddProduct={addProduct} />}
      <ProductList
        products={products}
        onUpdateProduct={updateProduct}
        onDeleteProduct={deleteProduct}
      />
    </div>
  );
};

export default Inventory;