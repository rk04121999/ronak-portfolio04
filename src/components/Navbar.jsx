import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Resume", to: "/resume" },
  { label: "About Me", to: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav style={styles.nav}>
        {/* LEFT */}
        <div style={styles.left}>
          <div style={styles.logo}>RP</div>
          <div>
            <h1 style={styles.name}>Ronak Patel</h1>
            <span style={styles.tag}>CLOUD • DEVOPS</span>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="desktop-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} style={styles.link}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ scale: 1.1, color: "#00b4ff" }}
                  style={{
                    ...styles.linkItem,
                    color: isActive ? "#00b4ff" : "#fff",
                  }}
                >
                  {l.label}
                  {isActive && <div style={styles.underline} />}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* HAMBURGER */}
        <div className="mobile-btn" style={styles.mobileBtn}>
          <button onClick={() => setIsOpen(!isOpen)} style={styles.menuBtn}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={styles.mobileMenu}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                style={styles.mobileLink}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== RESPONSIVE STYLE ===== */}
      <style>
        {`
          .desktop-links {
            display: flex;
            gap: 1.5rem;
          }

          @media (max-width: 768px) {
            .desktop-links {
              display: none;
            }
            .mobile-btn {
              display: block !important;
            }
          }

          body {
            margin: 0;
            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
}

/* ===== STYLES ===== */
const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.7rem 1rem",
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(10px)",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  logo: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#00b4ff",
  },

  name: {
    margin: 0,
    fontSize: "13px",
    color: "#fff",
  },

  tag: {
    fontSize: "10px",
    color: "#aaa",
  },

  link: {
    textDecoration: "none",
  },

  linkItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "0.9rem",
  },

  underline: {
    width: "70%",
    height: "2px",
    marginTop: "4px",
    background: "#00b4ff",
  },

  mobileBtn: {
    display: "none",
  },

  menuBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1.8rem",
    cursor: "pointer",
  },

  mobileMenu: {
    position: "fixed",
    top: "60px",
    left: 0,
    width: "100%",
    height: "calc(100vh - 60px)",
    background: "rgba(0,0,0,0.95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2rem",
    zIndex: 999,
  },

  mobileLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "1rem",
    fontSize: "16px",
    width: "100%",
    textAlign: "center",
  },
};