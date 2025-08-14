import React from "react";
import { useCart } from "./CartContext.jsx";

const Cart = () => {
  const { cart, removeFromCart, clearCart, addItem, decreaseQuantity } =
    useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>🛒 Your cart is empty</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
          }}
        >
          <div>
            <img src={item.image} width="100px" alt={item.title} />
            <h4>{item.title}</h4>
            <p>Price: ₱{item.price}</p>
            <p>
              Subtotal: ₱{(item.price * item.quantity).toLocaleString(en - PH)}
            </p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div>
            <button
              onClick={() => decreaseQuantity(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              -
            </button>
            <button
              onClick={() => addItem(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ₱{total.toFixed(2)}</h3>
      <button
        onClick={clearCart}
        style={{
          background: "black",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
