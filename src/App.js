import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav'; 
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopContextProvider } from './context/shopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider >
   <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='cart' element={<Cart />} />
    </Routes>
    </Router>   
   </ShopContextProvider>
    </div>
  );
}

export default App;
