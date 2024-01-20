import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Cart from "./pages/Cart";
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from "./pages/ProductList";
import Register from './pages/Register';
import Success from './pages/Success';


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/products' element={<Product />} />
        <Route path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
//icon&product(hover)
// every x andy