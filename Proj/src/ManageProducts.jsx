import { useState } from "react";
import { useStore } from "./StoreContext.jsx";
import "./Admin.css";
export default function ManageProducts() {
  const { products, addProduct, deleteProduct }=useStore();
  const [form,setForm]=useState({name:"",category:"Shirts",price:"",discount:"0",image:"",description:"",sizes:"S,M,L,XL"});
  const change=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=e=>{e.preventDefault();addProduct({...form,price:Number(form.price),discount:Number(form.discount),rating:4.5,sizes:form.sizes.split(",").map(s=>s.trim()).filter(Boolean)});setForm({name:"",category:"Shirts",price:"",discount:"0",image:"",description:"",sizes:"S,M,L,XL"});};
  return <section className="admin-page"><p className="eyebrow">INVENTORY</p><h1>Manage products</h1><form className="admin-form" onSubmit={submit}><input name="name" placeholder="Product name" value={form.name} onChange={change} required/><input name="category" placeholder="Category" value={form.category} onChange={change} required/><input name="price" type="number" min="1" placeholder="Price (₹)" value={form.price} onChange={change} required/><input name="discount" type="number" min="0" max="100" placeholder="Discount %" value={form.discount} onChange={change}/><input name="image" type="url" placeholder="Image URL" value={form.image} onChange={change} required/><input name="sizes" placeholder="Sizes (comma separated)" value={form.sizes} onChange={change}/><textarea name="description" placeholder="Description" value={form.description} onChange={change}/><button className="button button-dark">Add product</button></form><div className="admin-table">{products.map(p=><div className="admin-row" key={p.id}><span>{p.name}</span><span>₹{p.price}</span><button className="remove-button" onClick={()=>deleteProduct(p.id)}>Delete</button></div>)}</div></section>;
}
