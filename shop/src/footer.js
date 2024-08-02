import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div class="contact">
          <a href="indext.html">
            <img src="images/logo.png" alt="" />
          </a>
          <br></br>
          <br></br>
          <br></br>

          <h3>Contact</h3>
          <address>
            <p>
              <b>Address:</b> Wellington Road, Street 32. San Francisco
            </p>
            <p>
              <b>Phone:</b> Wellington Road, Street 32. San Francisco
            </p>
            <p>
              <b>Hours</b> 10:00 - 18:00. Mon - Sat
            </p>
          </address>
          <h3>Follow Us</h3>
          <br></br>
          <div className="socials">
            <a href="fb.js">
              <i class="fa-brands fa-facebook-square"></i>
            </a>
            <a href="yt.js">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="tg.js">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="ig.js">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="t.js">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
        <div class="about">
          <h3>About</h3>
          <br></br>
          <a href="au.js">About Us</a>
          <a href="di.js">Delivery Information</a>
          <a href="pp.js">Privacy Policy</a>
          <a href="tc.js">Terms & Conditions</a>
          <a href="cu.js">Contact Us</a>
        </div>
        <div class="myaccount ">
          <h3>My account</h3>
          <br></br>
          <a href="si.js">Sign In</a>
          <a href="vc.js">View Cart</a>
          <a href="mw.js">My Wishlist</a>
          <a href="to.js">Track My Order</a>
          <a href="h.js">Help</a>
        </div>
        <div class="install">
          <h3>Install App</h3>
          <br></br>
          <p>From App Store or Google Play</p>
          <div class="download">
            <a href="app.js">
              <img src="images/pay/app.jpg" alt=""></img>
            </a>
            <a href="app.js">
              <img src="images/pay/play.jpg" alt=""></img>
            </a>
          </div>
          <p>Secured Payment Gateways</p>
          <img src="images/pay/pay.png" alt=""></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;