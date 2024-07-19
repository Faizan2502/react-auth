import React from 'react';

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
              <button onClick={() => deleteProduct(product.name)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
