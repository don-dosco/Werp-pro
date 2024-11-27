import React, { useState } from 'react';
import { Product } from '../../types';

interface AddPurchaseFormProps {
  products: Product[];
  onPurchase: (productId: string, quantity: number, price: number) => void;
}

const AddPurchaseForm: React.FC<AddPurchaseFormProps> = ({ products, onPurchase }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [newProductName, setNewProductName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct === 'new' && newProductName) {
      onPurchase('new', quantity, price);
    } else if (selectedProduct) {
      onPurchase(selectedProduct, quantity, price);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Product
        </label>
        <select
          id="product"
          className="input"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          required
        >
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} - Current Stock: {product.quantity}
            </option>
          ))}
          <option value="new">Add New Product</option>
        </select>
      </div>
      {selectedProduct === 'new' && (
        <div>
          <label htmlFor="newProductName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            New Product Name
          </label>
          <input
            type="text"
            id="newProductName"
            className="input"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            required
          />
        </div>
      )}
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="input"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
          required
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Price per Unit
        </label>
        <input
          type="number"
          id="price"
          className="input"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          min="0"
          step="0.01"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Complete Purchase
      </button>
    </form>
  );
};

export default AddPurchaseForm;