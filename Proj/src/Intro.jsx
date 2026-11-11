import { useEffect, useState } from "react";
import "./Intro.css";

export default function Intro() {
  const [show, setShow] = useState(() => !sessionStorage.getItem("sn-intro"));
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => { setShow(false); sessionStorage.setItem("sn-intro", "1"); }, 1900);
    return () => clearTimeout(timer);
  }, [show]);
  if (!show) return null;
  return <div className="intro-screen"><div className="intro-word">SENSATION</div><div className="intro-tag">FEEL THE FASHION</div></div>;
}
