import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import HomePage from "./components/Pages/Home/Home.js";
import Register from "./components/Pages/Register/Register";
import StaticPanel from "./components/StaticPanel/StaticPanel";
import Rankings from "./components/Pages/Rankings/Rankings";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Router>
          <Navbar />
          <div className="Content">
            <StaticPanel />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/rankings" element={<Rankings />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
