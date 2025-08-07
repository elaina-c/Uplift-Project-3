import React, { useParams } from "react";
import Products from "../api/products";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  return (
    <div>
      <Products />
    </div>
  );
};

export default ProductDetail;
