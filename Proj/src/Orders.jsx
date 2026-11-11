import { useStore } from "./StoreContext.jsx";
import "./Orders.css";
export default function Orders() {
  const { orders, user } = useStore();
  const mine = orders.filter(o=>user?.role==="admin" || o.customer===user?.email);
  return <section className="orders-page"><div className="page-title"><p className="eyebrow">YOUR PURCHASES</p><h1>Order history</h1></div>{mine.length ? <div className="orders-list">{mine.map(order=><article className="order-card" key={order.id}><div><span className="order-id">{order.id}</span><p>{order.date}</p><p>{order.items.length} item(s)</p></div><div><strong>₹{Math.round(order.total).toLocaleString("en-IN")}</strong><span className={`status status-${order.status.toLowerCase()}`}>{order.status}</span></div></article>)}</div> : <p className="empty-state">No orders placed yet.</p>}</section>;
}
