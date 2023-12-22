import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pcomponent/navbar";
import Footer from "./pcomponent/footer";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import Settings from "./pages/settings";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import "./App.css";
import Private from "./pages/Private";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="" element={<Private />}>
            <Route path="/recipes" element={<Recipes />} />
          </Route>

          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
