import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext(null);
const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

export function StoreProvider({ children }) {
  const [products, setProducts] = useState(() => read("sn-products", [
    { id: "p1", name: "Classic Black Shirt", category: "Shirts", price: 1299, discount: 10, rating: 4.5, sizes: ["S","M","L","XL"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80", description: "A refined everyday shirt with a clean, premium finish." },
    { id: "p2", name: "Premium White T-Shirt", category: "T-Shirts", price: 799, discount: 5, rating: 4.3, sizes: ["S","M","L","XL"], image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80", description: "Soft cotton essentials designed for comfort and style." },
    { id: "p3", name: "Urban Denim Jacket", category: "Jackets", price: 2499, discount: 15, rating: 4.7, sizes: ["M","L","XL"], image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80", description: "A versatile layer for a modern streetwear look." },
    { id: "p4", name: "Everyday Chinos", category: "Trousers", price: 1599, discount: 12, rating: 4.4, sizes: ["30","32","34","36"], image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80", description: "Comfortable chinos that pair effortlessly with your wardrobe." }
  ]));
  const [user, setUser] = useState(() => read("sn-user", null));
  const [users, setUsers] = useState(() => read("sn-users", []));
  const [cart, setCart] = useState(() => read("sn-cart", []));
  const [wishlist, setWishlist] = useState(() => read("sn-wishlist", []));
  const [orders, setOrders] = useState(() => read("sn-orders", []));

  useEffect(() => localStorage.setItem("sn-products", JSON.stringify(products)), [products]);
  useEffect(() => localStorage.setItem("sn-user", JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem("sn-users", JSON.stringify(users)), [users]);
  useEffect(() => localStorage.setItem("sn-cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("sn-wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("sn-orders", JSON.stringify(orders)), [orders]);

  const register = (details) => {
    if (users.some((u) => u.email.toLowerCase() === details.email.toLowerCase())) {
      return { ok: false, message: "An account with this email already exists." };
    }
    const newUser = { ...details, role: "client" };
    setUsers((prev) => [...prev, newUser]);
    setUser(newUser);
    return { ok: true };
  };

  const login = (email, password) => {
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (found) { setUser(found); return { ok: true }; }
    if (email === "admin@sensation.com" && password === "admin123") {
      const admin = { name: "Administrator", email, role: "admin" };
      setUser(admin); return { ok: true };
    }
    return { ok: false, message: "Invalid email or password." };
  };

  const logout = () => setUser(null);
  const addToCart = (product, size, quantity = 1) => setCart((prev) => {
    const match = prev.find((item) => item.id === product.id && item.size === size);
    return match ? prev.map((item) => item.id === product.id && item.size === size ? { ...item, quantity: item.quantity + quantity } : item)
      : [...prev, { ...product, size, quantity }];
  });
  const removeFromCart = (id, size) => setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  const updateQuantity = (id, size, quantity) => setCart((prev) => prev.map((item) => item.id === id && item.size === size ? { ...item, quantity: Math.max(1, quantity) } : item));
  const toggleWishlist = (product) => setWishlist((prev) => prev.some((item) => item.id === product.id) ? prev.filter((item) => item.id !== product.id) : [...prev, product]);
  const placeOrder = () => {
    if (!user) return { ok: false, message: "Please login before placing an order." };
    if (!cart.length) return { ok: false, message: "Your cart is empty." };
    const order = { id: `SN${Date.now()}`, customer: user.email, items: cart, total: cart.reduce((sum, item) => sum + item.price * (1 - (item.discount || 0) / 100) * item.quantity, 0), status: "Placed", date: new Date().toLocaleString() };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    return { ok: true, order };
  };
  const addProduct = (product) => setProducts((prev) => [{ ...product, id: product.id || `p${Date.now()}` }, ...prev]);
  const updateProduct = (product) => setProducts((prev) => prev.map((p) => p.id === product.id ? product : p));
  const deleteProduct = (id) => setProducts((prev) => prev.filter((p) => p.id !== id));
  const updateOrderStatus = (id, status) => setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o));

  return <StoreContext.Provider value={{ products, user, users, cart, wishlist, orders, register, login, logout, addToCart, removeFromCart, updateQuantity, toggleWishlist, placeOrder, addProduct, updateProduct, deleteProduct, updateOrderStatus }}>{children}</StoreContext.Provider>;
}
export const useStore = () => useContext(StoreContext);
