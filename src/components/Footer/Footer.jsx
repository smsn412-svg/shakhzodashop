import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiInstagram,
  FiFacebook,
  FiMail
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>ShakhzodaShop</h2>

          <p>
            Modern online shopping with quality products,
            affordable prices, and fast delivery.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/about">About</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Karshi, Uzbekistan</p>
          <p>📞 +998 90 123 45 67</p>
          <p>📧 support@shakhzodashop.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FiGithub />
            </a>

            <a href="#">
              <FiInstagram />
            </a>

            <a href="#">
              <FiFacebook />
            </a>

            <a href="mailto:support@shakhzodashop.com">
              <FiMail />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ShakhzodaShop. All Rights Reserved.
      </div>

    </footer>
  );
}

