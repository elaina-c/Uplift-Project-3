import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign } from "@fortawesome/free-solid-svg-icons";
import styles from "./CategoryProducts.module.css";
import Category from "../../pages/Category";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryName]);

  return (
    <div className={styles.categoryPage}>
      <Category />
      <h2 className={styles.categoryTitle}>Products in {categoryName}</h2>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className={styles.productGrid}>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.productCard}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={styles.productImage}
                />
                <div className={styles.productInfo}>
                  <h5 className={styles.productName}>{product.title}</h5>
                  <p className={styles.productPrice}>
                    <FontAwesomeIcon icon={faPesoSign} /> {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
