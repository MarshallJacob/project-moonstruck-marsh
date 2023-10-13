import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/navbarcomps/Home'
import Reviews from './components/navbarcomps/Reviews';
import Categories from './components/navbarcomps/Categories';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Here we are pulling the navbar components and rendering those
  const renderPage = () => {
    if (currentPage === 'Categories') {
      return <Categories/>;
    }
    if (currentPage === 'Reviews') {
      return <Reviews/>;
    }
    return <Home/>
    // Eventually build a flyout for different categories.
    // Probably something for "games, music, tech, hardware, etc""    "
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <>
      <div className="mainbody">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
      </div>
    </>
  );
}

export default App;
