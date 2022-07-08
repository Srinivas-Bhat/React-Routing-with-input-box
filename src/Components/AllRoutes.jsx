import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import Error from "./Error";
import Login from "./Login";
import PrivateContext from "./Context/PrivateContext";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<PrivateContext><Products /></PrivateContext>} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<PrivateContext><ProductDetails /></PrivateContext>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
