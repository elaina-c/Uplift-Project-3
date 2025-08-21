import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./LaptopSection.module.css";

const LaptopSection = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => {
        const topLaptops = data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 10);
        setProducts(topLaptops);
      })
      .catch((err) => console.error("Error fetching laptops:", err));
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
      <h2 className={styles.title}>TOP LAPTOPS</h2>

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

export default LaptopSection;
