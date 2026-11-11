import { Routes, Route, Navigate } from "react-router-dom";
import Intro from "./Intro.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Cart from "./Cart.jsx";
import Wishlist from "./Wishlist.jsx";
import Orders from "./Orders.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import ManageProducts from "./ManageProducts.jsx";
import ManageOrders from "./ManageOrders.jsx";
import "./App.css";
import "./responsive.css";

function Protected({ children, admin = false }) {
  const user = JSON.parse(localStorage.getItem("sn-user") || "null");
  if (!user) return <Navigate to="/login" replace />;
  if (admin && user.role !== "admin") return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return <>
    <Intro />
    <Navbar />
    <main className="page-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Protected><Orders /></Protected>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<Protected admin><AdminDashboard /></Protected>} />
        <Route path="/admin/products" element={<Protected admin><ManageProducts /></Protected>} />
        <Route path="/admin/orders" element={<Protected admin><ManageOrders /></Protected>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Footer />
  </>;
}
