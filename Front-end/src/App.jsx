import React, { useState } from "react";
import Navbar from "./Components/nav-bar/Navbar";
import { Route, Routes } from "react-router-dom";

import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/place-order/PlaceOrder";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

const App = () => {
  const [showlogin, setShowLogin] = useState(false);

  return (
    <>
      {showlogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="APP">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
