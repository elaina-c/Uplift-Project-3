import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign } from "@fortawesome/free-solid-svg-icons";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Category Products:", data);
        setProducts(data.products || []);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryName]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products in {categoryName}</h2>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "15px",
          }}
        >
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#fafafa",
                textAlign: "center",
              }}
            >
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={product.thumbnail}
                  width="150"
                  alt={product.title}
                  style={{ borderRadius: "6px", marginBottom: "10px" }}
                />
                <div>
                  <strong>{product.title}</strong>
                </div>
                <div style={{ color: "green", marginTop: "5px" }}>
                  <FontAwesomeIcon icon={faPesoSign} /> {product.price}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryProducts;
