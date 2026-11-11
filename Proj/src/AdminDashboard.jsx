import { Link } from "react-router-dom";
import { useStore } from "./StoreContext.jsx";
import "./Admin.css";
export default function AdminDashboard() {
  const { products, orders, users }=useStore();
  return <section className="admin-page"><p className="eyebrow">SENSATION CONTROL</p><h1>Admin dashboard</h1><div className="admin-stats"><article><span>Products</span><strong>{products.length}</strong></article><article><span>Orders</span><strong>{orders.length}</strong></article><article><span>Registered clients</span><strong>{users.length}</strong></article></div><div className="admin-links"><Link className="button button-dark" to="/admin/products">Manage products</Link><Link className="button button-outline" to="/admin/orders">Manage orders</Link></div></section>;
}
