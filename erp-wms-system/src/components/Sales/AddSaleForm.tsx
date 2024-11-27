import React, { useState } from 'react';
import { Product } from '../../types';

interface AddSaleFormProps {
  products: Product[];
  onSale: (productId: string, quantity: number) => void;
}

const AddSaleForm: React.FC<AddSaleFormProps> = ({ products, onSale }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct) {
      onSale(selectedProduct, quantity);
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
              {product.name} - Stock: {product.quantity} - Price: ${product.price}
            </option>
          ))}
        </select>
      </div>
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
      <button type="submit" className="btn btn-primary">
        Complete Sale
      </button>
    </form>
  );
};

export default AddSaleForm;