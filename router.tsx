import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../screens/home';
import Product from '../screens/product';
import Navbar from '../pages/navbar';
import SingleProduct from '../screens/SingleProduct';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Product />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Products/:id" element={<SingleProduct />} />
        </Routes>
    );
}

export default AppRouter;
