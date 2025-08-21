import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Discover Your Style</h1>
        <p>Trendy fashion and lifestyle products just for you</p>
        <button className={styles.shopBtn}>Shop Now</button>
      </div>
    </header>
  );
}

export default Header;
