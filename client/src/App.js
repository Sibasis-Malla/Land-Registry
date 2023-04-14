import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import BuySell from "./Pages/BuySell";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy-sell" element={<BuySell />} />
    </Routes>
  );
};

export default App;
