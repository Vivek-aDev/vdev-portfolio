import React, { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { button } from "framer-motion/client";
import { BiSolidArrowToTop } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__text}>
          © {year} Vivekananda Sahu. All rights reserved.
        </p>

        {isVisible && (
          <button className={styles.scroll_top_btn} onClick={scrollToTop}>
            <BiSolidArrowToTop />
          </button>
        )}

        <div className={styles.footer__socials}>
          <a
            href="mailto:vivekanandasahu.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/vivekadev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Vivek-aDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
