import React from 'react';

const SearchBar = ({ searchProducts }) => {
  const handleSearch = (e) => {
    searchProducts(e.target.value);
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search Products" onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
