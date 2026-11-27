import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Icon from "./Icon";
export function Brand({ compact = false }) {
  return (
    <Link to="/" className={`brand${compact ? ' brand-horizontal' : ''}`} aria-label="Gue Moni home">
      <img
        className="brand-logo"
        src="/brand/guemoni-eagle.svg"
        alt=""
        width={1428}
        height={890}
      />
      <span className="brand-wordmark">gue<span>moni</span><small>Banking. Within reach.</small></span>
    </Link>
  );
}
const links = [
  ["/", "Home"],
  ["/about", "About us"],
  ["/services", "Our services"],
  ["/become-agent", "Become an agent"],
  ["/contact", "Contact"],
];
export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand compact />
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
          <nav
            id="main-nav"
            className={open ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="button button-small"
            >
              Find an agent <Icon size={16} />
            </Link>
          </nav>
        </div>
      </header>
      <main id="main" key={location.pathname} tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Brand />
            <p>
              Everyday banking. Local people.
              <br />
              More possibilities for our communities.
            </p>
            <span className="footer-registration">
              Gue Moni Limited · RC 9853276
            </span>
          </div>
          <div>
            <h3>Explore</h3>
            <Link to="/about">About Gue Moni</Link>
            <Link to="/services">Our services</Link>
            <Link to="/become-agent">Become an agent</Link>
          </div>
          <div>
            <h3>Here to help</h3>
            <Link to="/contact">Find our agent point</Link>
            <Link to="/faq">Frequently asked questions</Link>
            <a href="mailto:info@guemoni.com">info@guemoni.com</a>
          </div>
          <div>
            <h3>Let’s talk</h3>
            <a className="footer-phone" href="tel:+2349041157068">
              0904 115 7068
            </a>
            <p>
              Opposite PDP office,
              <br />
              Wannune 981107, Benue State, Nigeria
            </p>
            <a href="https://www.guegroup.com" target="_blank" rel="noreferrer">
              Visit Gue Group ↗
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Gue Moni Limited. All rights reserved.
          </span>
          <span>Agency banking through the UBA Moni network.</span>
        </div>
      </footer>
    </>
  );
}
