import React from "react";

function Navbar ({ currentPage, handlePageChange }) {
    return (
        <ul className="nav">
        <h3 id="nav-title">
          Moonstruck Martian
        </h3>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
  
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#reviews"
            onClick={() => handlePageChange('Reviews')}
  
            className={currentPage === 'Reviews' ? 'nav-link active' : 'nav-link'}
          >
            Reviews
          </a>
        </li>
        </ul>
  
    );
}

export default Navbar;