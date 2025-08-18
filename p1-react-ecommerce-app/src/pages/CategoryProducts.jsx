import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryName]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products in {categoryName}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
            }}
          >
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <strong>{product.title}</strong> - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
