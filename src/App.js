import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Topbar, Footer } from './layout';
import { Home, ProductsList, ProductsCategories } from './pages';
// import { ReactNotifications } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css'

// import logo from './logo.svg';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  
    return (
      <div className='app'>
        {/* <ReactNotifications /> */}
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
