import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./pages/Home";
import "./styles/main.css";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Home />
    </>
  );}
export default App;
