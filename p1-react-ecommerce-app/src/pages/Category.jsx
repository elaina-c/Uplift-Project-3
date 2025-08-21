import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import BackToTop from "../components/BackToTop/BackToTop";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(Array.isArray(data) ? data : []);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className={styles.categoryContainer}>
      <h2 className={styles.categoryTitle}>Shop by Category</h2>
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.slug}`}
            className={styles.categoryCard}
          >
            <p className={styles.categoryName}>{category.name}</p>
          </Link>
        ))}
      </div>
      <BackToTop />
    </div>
  );
};

export default Category;
