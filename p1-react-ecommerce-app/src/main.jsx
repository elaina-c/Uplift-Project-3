import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartMain } from "./components/Cart/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartMain>
        <App />
      </CartMain>
    </BrowserRouter>
  </React.StrictMode>
);
