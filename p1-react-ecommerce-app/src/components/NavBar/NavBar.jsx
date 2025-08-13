import React from "react";
import { Link } from "react-router-dom";
import Style from "./NavBar.module.css";
import { useCart } from "../Cart/CartContext.jsx";

function NavBar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={Style.navbar}>
      <Link to="/">Home</Link>
      <Link to="/category">Categories</Link>
      <Link to="/about">About Us</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default NavBar;
