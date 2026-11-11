import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "./StoreContext.jsx";
import "./Auth.css";
export default function Register() {
  const { register }=useStore();const navigate=useNavigate();const [form,setForm]=useState({name:"",email:"",password:""});const [error,setError]=useState("");
  const change=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=e=>{e.preventDefault();const result=register(form);if(result.ok)navigate("/");else setError(result.message);};
  return <section className="auth-page"><form className="auth-card" onSubmit={submit}><p className="eyebrow">JOIN SENSATION</p><h1>Create account</h1><p className="auth-subtitle">A better wardrobe starts here.</p>{error&&<p className="form-error">{error}</p>}<label>Full name<input name="name" value={form.name} onChange={change} required/></label><label>Email<input name="email" type="email" value={form.email} onChange={change} required/></label><label>Password<input name="password" type="password" minLength="6" value={form.password} onChange={change} required/></label><button className="button button-dark full-button">Create account</button><p className="auth-bottom">Already registered? <Link to="/login">Login</Link></p></form></section>;
}
