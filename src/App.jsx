import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ErrorMessage from "./components/ErrorMessage";
import Hero from "./components/Hero/Hero";
import MyList from "./components/MyList/MyList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="hero" element={<Hero />} />
        <Route path="myList" element={<MyList />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
