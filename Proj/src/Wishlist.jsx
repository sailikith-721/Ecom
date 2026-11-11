import { Link } from "react-router-dom";
import { useStore } from "./StoreContext.jsx";
import ProductCard from "./ProductCard.jsx";
import "./Wishlist.css";
export default function Wishlist() {
  const { wishlist } = useStore();
  return <section className="wishlist-page"><div className="page-title"><p className="eyebrow">SAVED FOR LATER</p><h1>Your wishlist</h1></div>{wishlist.length ? <div className="product-grid">{wishlist.map(p=><ProductCard key={p.id} product={p}/>)}</div> : <div className="empty-state"><p>Your wishlist is empty.</p><Link className="button button-dark" to="/products">Discover styles</Link></div>}</section>;
}
