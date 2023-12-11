import React, { useState } from "react";

const Navbar = ({ currentPage, handlePageChange }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
        <ul className="navbar-nav mr-auto">
a          <li className="nav-item">
            <a
              href="#home"
              onClick={() => {
                handlePageChange('Home');
                setCollapsed(true); // Collapse sidebar when a link is clicked
              }}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#reviews"
              onClick={() => {
                handlePageChange('Reviews');
                setCollapsed(true); // Collapse sidebar when a link is clicked
              }}
              className={currentPage === 'Reviews' ? 'nav-link active' : 'nav-link'}
            >
              Reviews
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;