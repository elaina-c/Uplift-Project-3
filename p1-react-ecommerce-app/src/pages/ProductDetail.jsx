import React, { useParams } from "react";
import Products from "../api/products";
import { useState } from "react";

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
        setProducts(data);
        console.log(data);

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
    <div>
      <h5> {product.title}</h5>
      <img src={product.image} width="200px" />
      <p>
        {product.description} <br />
        <FontAwesomeIcon icon={faPesoSign} />
        {product.price} <br />
        <FontAwesomeIcon icon={faStar} />
        {product.rating.rate} <br />
        <FontAwesomeIcon icon={faTruck} />
        {product.rating.count}
      </p>
    </div>
  );
};

export default ProductDetail;
