import React from 'react';

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="navbar">
      <h1>Product Management App</h1>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </nav>
  );
};

export default Navbar;
