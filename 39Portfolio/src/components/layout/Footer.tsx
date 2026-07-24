import { NavLink, type NavLinkRenderProps } from "react-router-dom";

const navLinkStyle = ({ isActive }:NavLinkRenderProps) =>
  isActive
    ? "text-blue-400 font-medium"
    : "text-gray-400 hover:text-white transition-colors duration-300";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-800 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-start">
          {/* Copyright */}
          <div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sohan Achhami.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <nav className="flex flex-wrap gap-6">
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkStyle}>
                About
              </NavLink>

              <NavLink to="/contact" className={navLinkStyle}>
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <p className="text-gray-400">
              sohan@example.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;