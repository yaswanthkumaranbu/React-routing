// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import your elements for different views
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:username" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
