import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Topbar, Footer } from './layout';
import { Home, ProductsList, ProductsCategories } from './pages';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='wrapper'>
          <Navbar />
          <Topbar />
          
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="products_list" element={ <ProductsList />} />
            <Route path="products_categories" element={ <ProductsCategories />} />
          </Routes>

          <Footer />
        </div>
      </div>


    );
  }
}

export default App;
