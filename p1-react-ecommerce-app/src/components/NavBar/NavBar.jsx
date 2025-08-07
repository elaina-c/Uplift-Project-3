import { Link } from "react-router-dom";
import Style from "./NavBar.module.css";

function NavBar() {
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
