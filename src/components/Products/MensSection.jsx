import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MensSection.module.css";

const MensSection = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Fetch men categories (shirts + shoes for variety)
    Promise.all([
      fetch("https://dummyjson.com/products/category/mens-shirts").then((res) =>
        res.json()
      ),
      fetch("https://dummyjson.com/products/category/mens-shoes").then((res) =>
        res.json()
      ),
    ])
      .then(([shirtsData, shoesData]) => {
        const combined = [...shirtsData.products, ...shoesData.products]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 10); // top 10
        setProducts(combined);
      })
      .catch((err) => console.error("Error fetching men's products:", err));
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 250;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>MEN'S FASHION</h2>

      <button
        className={`${styles.scrollBtn} ${styles.left}`}
        onClick={() => scroll("left")}
      >
        {"<"}
      </button>

      <div ref={containerRef} className={styles.container}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className={styles.cardLink}
          >
            <div className={styles.card}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className={styles.image}
              />
              <h4 className={styles.name}>{product.title}</h4>
              <p className={styles.price}>₱{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <button
        className={`${styles.scrollBtn} ${styles.right}`}
        onClick={() => scroll("right")}
      >
        {">"}
      </button>
    </div>
  );
};

export default MensSection;
