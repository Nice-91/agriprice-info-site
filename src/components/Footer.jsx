import React from "react";


const Footer = () => {
  return (
    <footer id="footer" className="footer">
     
      <div className="footer-top">
        <h2 className="footer-heading">Agriprice / Abahinzi Hub</h2>
        <p className="footer-description">
          Empowering farmers with smart pricing, market insights, and real-time connections.
        </p>

        <div className="footer-content">
       
          <div className="footer-column">
            <h3>Menu</h3>
            <ul>

              
              <li><a href="/#landingpage"><i class="fa-solid fa-house"></i>Home</a></li>
              <li><a href="/#team"><i className="fa-solid fa-users"></i> Team</a></li>
              <li><a href="/#features"><i className="fa-solid fa-cogs"></i> Features</a></li>
              <li><a href="/#about"><i className="fa-solid fa-circle-info"></i> About Us</a></li>

              
            </ul>
          </div>

          
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li><a href=""><i className="fa-solid fa-envelope"></i> info@agriprice.com</a></li>
              <li><a href=""><i className="fa-solid fa-phone"></i> +250 788 747861</a></li>
              <li><a href=""><i className="fa-solid fa-location-dot"></i> Kigali, Rwanda</a></li>
            </ul>
          </div>

       
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://wa.me/250788747861" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp-square"></i> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nice_ira_/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram-square"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nice-iradukunda-192036353/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          </div>
          <div className="end">
          <p >AgriPrice is the name of our platform, while "Abahinzi Hub" is our slogan, <br />reflecting our mission to empower farmers with the right price information.
          </p>
         </div>
      </div>

    
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Agriprice / Abahinzi Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
