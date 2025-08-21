import React from "react";
import Intro from "../components/AboutUs/Intro";
import StoreInformation from "../components/AboutUs/StoreInformstion";
import BestDeals from "../components/AboutUs/BestDeals";
import styles from "./AboutUs.module.css";
import BackToTop from "../components/BackToTop/BackToTop";

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <Intro />
      <StoreInformation />
      <BestDeals />
      <BackToTop />
    </div>
  );
};

export default AboutUs;
