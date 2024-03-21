import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { NavBar } from "./components/navbar/NavBar";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import { Booking } from "./components/dashboard/Booking";
import { Profile } from "./components/dashboard/Profile";
import { PetOwner } from "./components/auth/pet-owner/PetOwner";
import { PetSitter } from "./components/auth/pet-sitter/PetSitter";

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/login" element={<Login />} /> 
         <Route path="/signup" element={<SignUp />} /> 
         <Route path="/booking" element={<Booking />} /> 
         <Route path="/profile" element={<Profile />} /> 
         <Route path="/pet-owner" element={<PetOwner />} /> 
         <Route path="/pet-sitter" element={<PetSitter />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
