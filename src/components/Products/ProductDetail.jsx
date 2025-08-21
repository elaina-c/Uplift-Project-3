import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Cart/CartContext.jsx";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { cart, addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch product.");
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className={styles.loading}>Loading . . .</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageSection}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.image}
          />
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.details}>
            <p>
              <FontAwesomeIcon icon={faPesoSign} /> {product.price}
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} /> {product.rating}
            </p>
            <p>
              <FontAwesomeIcon icon={faTruck} /> {product.stock} in stock
            </p>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.addBtn}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            {inCart && (
              <p className={styles.inCart}>In cart: {inCart.quantity}</p>
            )}

            <Link to="/category" className={styles.backLink}>
              <button className={styles.backBtn}>← Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
