import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AddProductForm from '../components/AddProductForm';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import '../styles/App.css';

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/auth');
  };

  const addProduct = (product) => {
    if (products.some(p => p.name === product.name)) {
      alert('Product already exists');
    } else {
      setProducts([...products, product]);
    }
  };

  const deleteProduct = (productName) => {
    setProducts(products.filter(p => p.name !== productName));
  };

  const searchProducts = (query) => {
    if (query) {
      setFilteredProducts(products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="home-container">
        <AddProductForm addProduct={addProduct} />
        <SearchBar searchProducts={searchProducts} />
        <ProductList products={filteredProducts} deleteProduct={deleteProduct} />
      </div>
    </div>
  );
};

export default Home;
