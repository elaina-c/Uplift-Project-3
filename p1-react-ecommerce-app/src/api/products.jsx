import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  return (
    <div>
      <h1>Products List</h1>
      {loading ? (
        <h3>loading... </h3>
      ) : error ? (
        <h3> Error: {error}</h3>
      ) : (
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="product-item"
              style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => setSelectedProduct(product)}
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
          ))}

          {selectedProduct && (
            <div className="Product-Details">
              <h2>{selectedProduct.title}</h2>
              <img src={selectedProduct.image} width="100px" />
              <h5> {selectedProduct.title}</h5>
              <p>
                {selectedProduct.description} <br />
                <FontAwesomeIcon icon={faPesoSign} />
                {selectedProduct.price} <br />
                <FontAwesomeIcon icon={faStar} />
                {selectedProduct.rating.rate} <br />
                <FontAwesomeIcon icon={faTruck} />
                {selectedProduct.rating.count}{" "}
              </p>
              <button onClick={() => setSelectedProduct(null)}>Close</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Products;
