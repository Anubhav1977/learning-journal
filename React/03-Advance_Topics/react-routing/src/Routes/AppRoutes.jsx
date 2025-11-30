import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

function AppRoutes() {
  return (
    // Old Method for creating routes
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
