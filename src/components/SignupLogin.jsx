import React from "react";

const SignupLogin = ({ showSignup, showLogin, closeModals }) => {
  return (
    <>
      {showSignup && (
        <div className="link">
          <div className="link-content">
            <button className="close" onClick={closeModals}>&times;</button>
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="link">
          <div className="link-content">
            <button className="close" onClick={closeModals}>&times;</button>
            <h2>Log In</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupLogin;
