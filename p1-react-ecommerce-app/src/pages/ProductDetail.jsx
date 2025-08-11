import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch product. Please try again later.`);
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div className="Product-Details">
      <h2>{product.title}</h2>
      <img src={product.image} width="100px" alt={product.title} />
      <p>{product.description}</p>
      <p>
        <FontAwesomeIcon icon={faPesoSign} /> {product.price} <br />
        <FontAwesomeIcon icon={faStar} /> {product.rating.rate} <br />
        <FontAwesomeIcon icon={faTruck} /> {product.rating.count}
      </p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
