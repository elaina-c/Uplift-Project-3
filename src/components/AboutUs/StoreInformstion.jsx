import React from "react";
import styles from "./StoreInformation.module.css";

const StoreInformation = () => {
  return (
    <div className={styles.storeInfo}>
      <div className={styles.imageContainer}>
        <img
          src={`${import.meta.env.BASE_URL}Store.jpg`}
          alt="Store"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3>Our Store</h3>
        <p>
          Founded in 2023, TrendyHub was born from a passion to redefine the
          online shopping experience. We are your ultimate destination for
          premium products that combine quality, style, and innovation. Our
          curated selection caters to every lifestyle, ensuring that you find
          exactly what resonates with your taste and needs. At TrendyHub, we
          believe that shopping should be more than just a transaction—it should
          be an experience filled with discovery, excitement, and satisfaction.
          With fast shipping, responsive support, and a commitment to
          excellence, we strive to make every visit seamless and every purchase
          memorable. Join our growing community of trendsetters and explore a
          world where style meets convenience, and where every choice reflects
          your individuality.
        </p>
      </div>
    </div>
  );
};

export default StoreInformation;
