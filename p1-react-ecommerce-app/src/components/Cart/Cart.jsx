import React from "react";
import { useCart } from "../Cart/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } =
    useCart();

  const formatPrice = (price) =>
    `₱${price.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <div className={styles.empty}>Your cart is empty 🛒</div>;
  }

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <table className={styles.cartTable} border={1}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                {" "}
                <img src={item.thumbnail} width="100px" alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{formatPrice(item.price)}</td>
              <td>
                {item.quantity} <br />
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
              </td>
              <td>{formatPrice(item.price * item.quantity)}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: {formatPrice(totalPrice)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
