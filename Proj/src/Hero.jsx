import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return <section className="hero">
    <div className="hero-copy"><p className="eyebrow">THE NEW MEN'S COLLECTION</p><h1>Style that speaks.<br/><em>Confidence that lasts.</em></h1><p>Discover elevated essentials and timeless pieces made for your everyday.</p><Link className="button button-gold" to="/products">Explore Collection</Link></div>
    <div className="hero-art"><div className="hero-art-label">S / 26<br/>NEW SEASON</div></div>
  </section>;
}
