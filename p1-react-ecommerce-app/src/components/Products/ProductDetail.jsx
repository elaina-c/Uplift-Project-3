import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Cart/CartContext.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { cart, addToCart, decreaseQuantity } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    console.log("Fetching product with ID:", id);
    fetch(`https://dummyjson.com/products/${id}`)
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

  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="Product-Details">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} width="100px" alt={product.title} />
      <p>{product.description}</p>
      <p>
        <FontAwesomeIcon icon={faPesoSign} /> {product.price} <br />
        <FontAwesomeIcon icon={faStar} /> {product.rating} <br />
        <FontAwesomeIcon icon={faTruck} /> {product.stock}
      </p>

      <div>
        {(() => {
          const inCart = cart.find((item) => item.id === product.id);
          return (
            <div>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
              {inCart ? <p>In cart: {inCart.quantity}</p> : <p>In cart: 0</p>}
            </div>
          );
        })()}
        <br />
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
