import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Agents from "./pages/Agents";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
const titles = {
  "/": "Banking, closer to home",
  "/about": "About us",
  "/services": "Our services",
  "/become-agent": "Become an agent",
  "/contact": "Contact us",
  "/faq": "Frequently asked questions",
};
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${titles[pathname] || "Page not found"} | Gue Moni`;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="become-agent" element={<Agents />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
