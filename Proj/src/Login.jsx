import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "./StoreContext.jsx";
import "./Auth.css";
export default function Login() {
  const { login } = useStore(); const navigate=useNavigate();
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState("");
  const submit=e=>{e.preventDefault();const result=login(email,password);if(result.ok)navigate(result.role==="admin"?"/admin":"/");else setError(result.message);};
  return <section className="auth-page"><form className="auth-card" onSubmit={submit}><p className="eyebrow">WELCOME BACK</p><h1>Sign in</h1><p className="auth-subtitle">Continue your SENSATION experience.</p>{error&&<p className="form-error">{error}</p>}<label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label><div className="auth-links"><Link to="/forgot-password">Forgot password?</Link></div><button className="button button-dark full-button">Login</button><p className="auth-bottom">New here? <Link to="/register">Create an account</Link></p><p className="admin-hint">Demo admin: admin@sensation.com / admin123</p></form></section>;
}
