import React from "react";

const Navbar = ({ openSignup, openLogin }) => {
  return (
    <nav>
      <div className="logo">
        <img src="/src/assets/images/logo.jpeg" alt="Logo" />
        <p className="logo-heading">AgriPrice/Abahinzihub</p>
      </div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

      <div className="menu">
        <ul className="nav-links">
          <li><a href="#landingpage">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#footer">Contact</a></li>
          
          <li><a href="#team">Team</a></li>

        </ul>
        <div className="auth">
          <button className="signup" onClick={openSignup}>Sign Up</button>
          <button className="login" onClick={openLogin}>Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
