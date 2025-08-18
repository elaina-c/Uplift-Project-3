import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Categories</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((category, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <Link
              to={`/category/${category.slug}`}
              style={{
                textDecoration: "none",
                background: "#eee",
                padding: "10px",
                display: "inline-block",
                borderRadius: "6px",
              }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
