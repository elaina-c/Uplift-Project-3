import React from "react";
import styles from "./Intro.module.css";
import Header from "../Header/Header";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.imageContainer}>
        <img src="/Intro.jpg" alt="Intro" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>Welcome to TrendyHub!</h2>
        <p>
          Discover the latest in fashion, lifestyle, and tech. At TrendyHub, we
          bring you top-quality products that match your style and elevate your
          everyday life. Our mission is simple: to make shopping exciting, easy,
          and rewarding.
        </p>
        <Header />
      </div>
    </div>
  );
};

export default Intro;
