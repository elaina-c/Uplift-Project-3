import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../components/Cart/CartContext";
import styles from "../components/ProductCard/ProductCard.module.css";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryName]);

  const formatPrice = (price) => {
    return price.toLocaleString("en-PH", {
      style: "currency",
      currency: "PHP",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{categoryName.toUpperCase()}</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.productImage}
            />
            <h3>{product.title}</h3>
            <p>{formatPrice(product.price)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
