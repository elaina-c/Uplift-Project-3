import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load products. Please try again later.`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products) return <p>No product found.</p>;

  return (
    <div>
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
            <img src={product.image} width="100px" />
            <h5> {product.title}</h5>
            <p>
              <FontAwesomeIcon icon={faPesoSign} />
              {product.price} <br />
              <FontAwesomeIcon icon={faStar} />
              {product.rating.rate} <br />
              <FontAwesomeIcon icon={faTruck} />
              {product.rating.count}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Home;
