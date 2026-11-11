import "./Services.css";
const services = [
  ["✦", "Premium Quality", "Carefully selected fabrics and finishes."],
  ["↗", "Fast Delivery", "Reliable shipping to your doorstep."],
  ["◇", "Easy Returns", "Simple returns for a smooth experience."],
  ["▣", "Secure Checkout", "Your shopping experience matters."]
];
export default function Services() {
  return <section className="services-section"><div className="section-heading"><p className="eyebrow">THE SENSATION PROMISE</p><h2>Shopping, made better</h2></div><div className="service-grid">{services.map(([icon,title,desc])=><article className="service-card" key={title}><span>{icon}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>;
}
