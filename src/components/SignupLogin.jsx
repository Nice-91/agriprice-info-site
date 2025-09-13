import React, { useState } from "react";

const SignupLogin = ({ showSignup, showLogin, closeModals }) => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const API_URL = "https://agriprice-backend.onrender.com";


  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`https://agriprice-backend.onrender.com/api/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Signup failed");
        return;
      }

      alert("Signup successful! You can now log in.");
      closeModals();
    } catch (err) {
      setError("Network error. Try again.");
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`https://agriprice-backend.onrender.com/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         email: loginData.email,
    password: loginData.password
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Login failed");
        return;
      }

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      alert("Login successful!");
      closeModals();
    } catch (err) {
      setError("Network error. Try again.");
    }
  };

  return (
    <>
      {showSignup && (
        <div className="link">
          <div className="link-content">
            <button className="close" onClick={closeModals}>
              &times;
            </button>
            <h2>Sign Up</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Username"
                required
                value={signupData.username}
                onChange={(e) =>
                  setSignupData({ ...signupData, username: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="link">
          <div className="link-content">
            <button className="close" onClick={closeModals}>
              &times;
            </button>
            <h2>Log In</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                required
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupLogin;
