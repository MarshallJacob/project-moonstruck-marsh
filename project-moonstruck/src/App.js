import React, { useState } from 'react';
import './App.css';
import Home from './components/navbarcomps/Home'
import Reviews from './components/navbarcomps/Reviews';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Here we are pulling the navbar components and rendering those
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home/>;
    }
    if (currentPage === 'Reviews') {
      return <Reviews/>;
    }
    // Eventually build a flyout for different categories.
    // Probably something for "games, music, tech, hardware, etc""    "
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <>
      <div className="mainbody">
        <navTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
      </div>
    </>
  );
}

export default App;
