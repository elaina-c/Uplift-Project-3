import React from "react";
import styles from "./BestDeals.module.css";
import LaptopSection from "../Products/LaptopSection";
import PopularProducts from "../Products/PopularProducts";
import MensSection from "../Products/MensSection";

const BestDeals = () => {
  return (
    <div className={styles.bestDeals}>
      <div className={styles.imageContainer}>
        <img src="./BestDeals.jpg" alt="Best Deals" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>Best Deals</h3>
        <p>
          Explore our curated deals on the hottest items of the season. From
          fashion must-haves to cutting-edge gadgets, enjoy discounts that make
          shopping stylish and smart.
        </p>
      </div>
      <PopularProducts />
      <MensSection />
      <LaptopSection />
    </div>
  );
};

export default BestDeals;
