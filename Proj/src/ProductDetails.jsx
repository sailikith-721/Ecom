import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useStore } from "./StoreContext.jsx";
import "./ProductDetails.css";
export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart, toggleWishlist, wishlist } = useStore();
  const product = products.find(p => p.id === id);
  const [size, setSize] = useState(product?.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  if (!product) return <section className="empty-state"><h2>Product not found</h2><Link to="/products">Back to shop</Link></section>;
  const wished = wishlist.some(p=>p.id===product.id);
  return <section className="details-page"><div className="details-image"><img src={product.image} alt={product.name}/></div><div className="details-copy"><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="detail-rating">★ {product.rating || "4.5"} / 5</p><div className="detail-price"><strong>₹{Math.round(product.price*(1-(product.discount||0)/100)).toLocaleString("en-IN")}</strong>{product.discount>0 && <del>₹{product.price.toLocaleString("en-IN")}</del>}</div><p>{product.description}</p><label className="field-label">Select size</label><div className="size-options">{(product.sizes||["S","M","L","XL"]).map(s=><button key={s} className={size===s?"selected":""} onClick={()=>setSize(s)}>{s}</button>)}</div><label className="field-label">Quantity</label><div className="quantity-control"><button onClick={()=>setQuantity(q=>Math.max(1,q-1))}>−</button><span>{quantity}</span><button onClick={()=>setQuantity(q=>q+1)}>+</button></div><div className="detail-actions"><button className="button button-dark" onClick={()=>addToCart(product,size,quantity)}>Add to bag</button><button className="button button-outline" onClick={()=>toggleWishlist(product)}>{wished?"♥ Wishlisted":"♡ Wishlist"}</button></div><p className="detail-note">Secure checkout · Easy returns · Premium essentials</p></div></section>;
}
