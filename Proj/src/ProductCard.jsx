import { Link } from "react-router-dom";
import { useStore } from "./StoreContext.jsx";
import "./ProductCard.css";
export default function ProductCard({ product }) {
  const { toggleWishlist, wishlist } = useStore();
  const wished = wishlist.some((p) => p.id === product.id);
  const price = Math.round(product.price * (1 - (product.discount || 0) / 100));
  return <article className="product-card">
    <div className="product-image"><Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} /></Link><button className={`wish-button ${wished ? "active" : ""}`} onClick={() => toggleWishlist(product)}>{wished ? "♥" : "♡"}</button>{product.discount > 0 && <span className="discount-tag">{product.discount}% OFF</span>}</div>
    <div className="product-info"><p className="product-category">{product.category}</p><Link className="product-name" to={`/product/${product.id}`}>{product.name}</Link><p className="product-rating">★ {product.rating || "4.5"}</p><div className="price-line"><strong>₹{price.toLocaleString("en-IN")}</strong>{product.discount > 0 && <del>₹{product.price.toLocaleString("en-IN")}</del>}</div></div>
  </article>;
}
