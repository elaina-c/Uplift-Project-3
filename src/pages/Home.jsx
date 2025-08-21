import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/Cart/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import PopularProducts from "../components/Products/PopularProducts";
import WomensSection from "../components/Products/WomensSection";
import MensSection from "../components/Products/MensSection";
import styles from "./Home.module.css";
import BackToTop from "../components/BackToTop/BackToTop";
import LaptopSection from "../components/Products/LaptopSection";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load products. Please try again later.`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products.length) return <p>No product found.</p>;

  return (
    <div className={styles.home}>
      <Header />
      <PopularProducts />
      <LaptopSection />
      <WomensSection />
      <MensSection />
      <BackToTop />

      <h2 className={styles.sectionTitle}>Other Products</h2>
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
                <p className={styles.productMeta}>
                  <FontAwesomeIcon icon={faStar} /> {product.rating} <br />
                  <FontAwesomeIcon icon={faTruck} /> {product.stock} in stock
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
