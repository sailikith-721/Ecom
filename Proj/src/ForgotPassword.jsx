import { Link } from "react-router-dom";
import "./Auth.css";
export default function ForgotPassword() {
  return <section className="auth-page"><form className="auth-card" onSubmit={e=>{e.preventDefault();alert("For this frontend demo, contact the administrator to reset your password.");}}><p className="eyebrow">ACCOUNT SUPPORT</p><h1>Forgot password?</h1><p className="auth-subtitle">Enter your email to request account support.</p><label>Email<input type="email" required/></label><button className="button button-dark full-button">Request reset</button><p className="auth-bottom"><Link to="/login">Back to login</Link></p></form></section>;
}
