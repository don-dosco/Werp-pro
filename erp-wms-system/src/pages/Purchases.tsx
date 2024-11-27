import React, { useState } from 'react';
import PurchaseList from '../components/Purchases/PurchaseList';
import AddPurchaseForm from '../components/Purchases/AddPurchaseForm';
import { useInventory } from '../hooks/useInventory';
import { useFinance } from '../hooks/useFinance';

const Purchases: React.FC = () => {
  const { products, addProduct, updateProduct } = useInventory();
  const { balance, updateBalance } = useFinance();
  const [showAddForm, setShowAddForm] = useState(false);

  const handlePurchase = (productId: string, quantity: number, price: number) => {
    const purchaseAmount = price * quantity;
    if (balance >= purchaseAmount) {
      updateBalance(-purchaseAmount);
      if (productId === 'new') {
        addProduct({
          id: Date.now().toString(),
          name: 'New Product',
          quantity: quantity,
          price: price
        });
      } else {
        const product = products.find(p => p.id === productId);
        if (product) {
          updateProduct({
            ...product,
            quantity: product.quantity + quantity
          });
        }
      }
      setShowAddForm(false);
      // You might want to add the purchase to a purchase list here
    } else {
      alert('Insufficient balance for this purchase');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Purchases</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <p className="text-lg">Current Balance: ${balance.toFixed(2)}</p>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => setShowAddForm(!showAddForm)}
      >
        {showAddForm ? 'Cancel' : 'New Purchase'}
      </button>
      {showAddForm && <AddPurchaseForm products={products} onPurchase={handlePurchase} />}
      <PurchaseList />
    </div>
  );
};

export default Purchases;