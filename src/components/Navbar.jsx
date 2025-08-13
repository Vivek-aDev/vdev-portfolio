import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // navbar height offset
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          Vivek<span>Dev</span>
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {["about", "skills", "experience", "projects", "contact"].map(
            (id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? styles.active : ""}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
        <div className={styles.burger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </motion.nav>
  );
}
