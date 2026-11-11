import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link to="/" className="brand">SENSATION<span>FEEL THE FASHION</span></Link><p>Modern menswear. Timeless confidence.</p></div><div><h4>Explore</h4><Link to="/products">Shop all</Link><Link to="/orders">Your orders</Link><Link to="/wishlist">Wishlist</Link></div><div><h4>Help</h4><a href="mailto:support@sensation.example">Contact support</a><span>Easy returns</span><span>Secure shopping</span></div></div><div className="footer-bottom">© {new Date().getFullYear()} SENSATION. Feel the fashion.</div></footer>;
}
