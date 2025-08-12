import { CartMain } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartMain>
        <App />
      </CartMain>
    </BrowserRouter>
  </React.StrictMode>
);
