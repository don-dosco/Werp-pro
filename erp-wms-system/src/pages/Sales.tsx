import React, { useState } from 'react';
import SalesList from '../components/Sales/SalesList';
import AddSaleForm from '../components/Sales/AddSaleForm';
import { useInventory } from '../hooks/useInventory';
import { useFinance } from '../hooks/useFinance';

const Sales: React.FC = () => {
  const { products, updateProduct } = useInventory();
  const { balance, updateBalance } = useFinance();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSale = (productId: string, quantity: number) => {
    const product = products.find(p => p.id === productId);
    if (product && product.quantity >= quantity) {
      const saleAmount = product.price * quantity;
      updateBalance(saleAmount);
      updateProduct({
        ...product,
        quantity: product.quantity - quantity
      });
      setShowAddForm(false);
      // You might want to add the sale to a sales list here
    } else {
      alert('Insufficient stock for this sale');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Sales</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <p className="text-lg">Current Balance: ${balance.toFixed(2)}</p>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => setShowAddForm(!showAddForm)}
      >
        {showAddForm ? 'Cancel' : 'New Sale'}
      </button>
      {showAddForm && <AddSaleForm products={products} onSale={handleSale} />}
      <SalesList />
    </div>
  );
};

export default Sales;