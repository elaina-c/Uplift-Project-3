import React, { useParams } from "react";
import Products from "../api/products";

const ProductDetail = () => {
  const { id } = useParams;
  return (
    <div>
      <Products />
    </div>
  );
};

export default ProductDetail;
