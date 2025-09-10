import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import SignupLogin from "./components/SignupLogin";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const closeModals = () => {
    setShowSignup(false);
    setShowLogin(false);
  };

  return (
    <>
      <Navbar openSignup={openSignup} openLogin={openLogin} />
      <Intro />
      <SignupLogin
        showSignup={showSignup}
        showLogin={showLogin}
        closeModals={closeModals}
      />
    </>
  );
}

export default App;
