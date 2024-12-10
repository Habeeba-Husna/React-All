import React, { useState, useMemo } from 'react';

function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Using useMemo to memoize the filtered products
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
