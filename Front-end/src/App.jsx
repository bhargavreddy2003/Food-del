import React from "react";
import Navbar from "./Components/nav-bar/Navbar";
import { Route, Routes } from "react-router-dom";

import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/place-order/PlaceOrder";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="APP">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
