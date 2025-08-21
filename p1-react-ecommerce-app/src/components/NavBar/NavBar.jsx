import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useCart } from "../Cart/CartContext.jsx";

const NavBar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TrendyHub</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({totalItems})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
