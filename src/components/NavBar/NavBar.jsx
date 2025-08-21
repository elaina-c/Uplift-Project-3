import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useCart } from "../Cart/CartContext.jsx";

const NavBar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TrendyHub</div>

      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/category" onClick={() => setIsOpen(false)}>
            Categories
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            Cart ({totalItems})
          </Link>
        </li>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.barActive : ""}></span>
        <span className={isOpen ? styles.barActive : ""}></span>
        <span className={isOpen ? styles.barActive : ""}></span>
      </div>
    </nav>
  );
};

export default NavBar;
