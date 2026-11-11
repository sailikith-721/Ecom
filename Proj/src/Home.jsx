import { Link } from "react-router-dom";
import { useStore } from "./StoreContext.jsx";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import ProductCard from "./ProductCard.jsx";
import "./Home.css";
export default function Home() {
  const { products } = useStore();
  return <div className="home-page"><Hero /><section className="featured-section"><div className="section-heading row-heading"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Featured collection</h2></div><Link to="/products" className="view-link">View all →</Link></div><div className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div></section><Services /><section className="newsletter"><p className="eyebrow">JOIN THE SENSATION</p><h2>Make room for better style.</h2><p>Explore pieces that bring confidence to every day.</p><Link to="/products" className="button button-dark">Shop now</Link></section></div>;
}
