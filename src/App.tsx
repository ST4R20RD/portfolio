import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div >
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
