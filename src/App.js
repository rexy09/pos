import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Topbar, Footer } from './layout';
import { Home, Products_List, Products_Categories } from './pages';

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
            <Route path="products_list" element={ <Products_List />} />
            <Route path="products_categories" element={ <Products_Categories />} />

          
          </Routes>
          <Footer />
        </div>
      </div>


    );
  }
}

export default App;
