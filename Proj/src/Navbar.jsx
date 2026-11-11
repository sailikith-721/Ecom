import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStore } from "./StoreContext.jsx";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout, cart, wishlist } = useStore();
  const navigate = useNavigate();
  const count = cart.reduce((n, item) => n + item.quantity, 0);
  return <header className="site-header">
    <Link to="/" className="brand">SENSATION<span>FEEL THE FASHION</span></Link>
    <nav className="main-nav">
      <NavLink to="/">Home</NavLink><NavLink to="/products">Shop</NavLink>
      <NavLink to="/orders">Orders</NavLink>
    </nav>
    <div className="header-actions">
      <Link to="/wishlist" aria-label="Wishlist">♡ <small>{wishlist.length}</small></Link>
      <Link to="/cart" aria-label="Cart">Bag <small>{count}</small></Link>
      {user ? <button className="text-button" onClick={() => { logout(); navigate("/"); }}>Logout</button> : <Link to="/login">Login</Link>}
      {user?.role === "admin" && <Link to="/admin">Admin</Link>}
    </div>
  </header>;
}
