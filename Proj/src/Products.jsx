import { useMemo, useState } from "react";
import { useStore } from "./StoreContext.jsx";
import ProductCard from "./ProductCard.jsx";
import "./Products.css";
export default function Products() {
  const { products } = useStore();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(products.map(p => p.category))];
  const filtered = useMemo(() => products.filter(p => (category === "All" || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase())), [products, category, search]);
  return <section className="catalog-page"><div className="catalog-heading"><p className="eyebrow">SENSATION STORE</p><h1>All collections</h1><p>Find your signature style.</p></div><div className="catalog-controls"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products..." aria-label="Search products"/><select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></div><div className="product-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>{filtered.length===0 && <p className="empty-state">No products found.</p>}</section>;
}
