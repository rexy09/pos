import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Topbar, Footer } from './layout';
import { Home, ProductsList, ProductsCategories } from './pages';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  
    return (
      <div className='app'>
        <div className='wrapper'>
          <Navbar />
          <Topbar />
          
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="productsList" element={ <ProductsList />} />
            <Route path="productsCategories" element={ <ProductsCategories />} />
          
          </Routes>
          <Footer />
        </div>
      </div>
    );

}

export default App;
