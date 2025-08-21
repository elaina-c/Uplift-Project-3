import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/Cart/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import PopularProducts from "../components/Products/PopularProducts";

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
    <div>
      <Header />
      <PopularProducts />
      <br />
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            className="product-item"
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <img src={product.thumbnail} width="100px" alt={product.title} />
            <h5>{product.title}</h5>
            <p>
              <FontAwesomeIcon icon={faPesoSign} /> {product.price}
              <br />
              <FontAwesomeIcon icon={faStar} /> {product.rating}
              <br />
              <FontAwesomeIcon icon={faTruck} /> {product.stock} in stock
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
