import React, { useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../assets/hero.png";
import { greetings } from "../utils/constants/greetings";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const title = "Frontend Developer";

const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // delay between each letter
    },
  },
};

const typingLetter = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(interval); // stop the loop
          return 0; // reset to first greeting
        }
        return prev + 1; // go to next greeting
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.span
                key={greetings[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                {greetings[index]},
              </motion.span>
            </AnimatePresence>
            I'm <span>Vivekananda</span>
          </motion.h1>

          <motion.h2
            variants={typingContainer}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", gap: "2px" }}
          >
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={typingLetter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p variants={itemVariants}>
            I build modern, responsive, and performant web apps using React and
            JavaScript.
          </motion.p>
          <motion.a
            href="#projects"
            className={styles.cta}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ rotate: 0 }}
          animate={{
            y: [0, -12, 0, -8, 0],
            x: [0, 4, 0, -4, 0],
            rotate: [0, 270, 0],
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: {
              duration: 12,
              repeat: Infinity,
              repeatDelay: 10,
              ease: "easeInOut",
            },
          }}
        >
          <img
            src={heroImage}
            alt="Vivekananda Sahu"
            className={styles.heroImage}
          />
        </motion.div>
      </div>
    </section>
  );
}
