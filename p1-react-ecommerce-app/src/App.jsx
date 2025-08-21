import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import CategoryProducts from "./components/Category/CategoryProducts";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/Products/ProductDetail";
import ContactInfo from "./pages/ContactInfo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/category" element={<Category />} />
            <Route
              path="/category/:categoryName"
              element={<CategoryProducts />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactInfo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
