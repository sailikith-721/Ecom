import { useStore } from "./StoreContext.jsx";
import "./Admin.css";
export default function ManageOrders() {
  const { orders, updateOrderStatus }=useStore();
  return <section className="admin-page"><p className="eyebrow">FULFILLMENT</p><h1>Manage orders</h1>{orders.length ? <div className="admin-table">{orders.map(o=><div className="admin-row order-admin-row" key={o.id}><div><strong>{o.id}</strong><p>{o.customer}</p><small>{o.date}</small></div><strong>₹{Math.round(o.total).toLocaleString("en-IN")}</strong><select value={o.status} onChange={e=>updateOrderStatus(o.id,e.target.value)}><option>Placed</option><option>Processing</option><option>Shipped</option><option>Delivered</option><option>Cancelled</option></select></div>)}</div>:<p className="empty-state">No orders to manage.</p>}</section>;
}
