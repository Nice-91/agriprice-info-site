import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h3>AgriPrice / AbahinziHub</h3>
        <p>
          Your trusted platform for agricultural product prices. Connecting
          farmers and buyers seamlessly.
        </p>
      </div>

      <div className="footer-container">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: ruthnzikwikiza7</p>
          <p>Phone: +250 788 747861</p>
          <div className="footer-socials">
            <a href="https://wa.me/250788747861" target="_blank" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/nice_ira_/" target="_blank" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/nice-iradukunda-192036353/" target="_blank" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 AgriPrice. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
