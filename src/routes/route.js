import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Hello from "../component/Hello/Hello";
import Carousel from "../component/Carousel/Carousel";

const route = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/carousel" element={<Carousel />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </div>
  );
};

export default route;
