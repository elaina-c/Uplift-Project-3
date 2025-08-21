import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Category from "../../pages/Category";

const Header = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Discover Your Style</h1>
        <p>Trendy fashion and lifestyle products just for you</p>
        <Link to="/category">
          <button className={styles.cta}>Shop Now</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
