import React from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";
import resumePDF from "../assets/vivek_resume.pdf";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.image}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={aboutImg} alt="Profile" />
        </motion.div>

        <motion.div className={styles.content} variants={itemVariants}>
          <h2>About Me</h2>

          <motion.p variants={itemVariants}>
            I'm <strong>Vivekananda Sahu</strong>, a passionate frontend
            developer experienced in building responsive and interactive UIs
            using <strong>React</strong>, <strong>JavaScript</strong>, and
            modern web technologies.
          </motion.p>

          <motion.p variants={itemVariants}>
            I love crafting smooth UX, working on performance optimization, and
            collaborating in team environments. I'm always learning new
            technologies and aiming to grow as a professional developer.
          </motion.p>

          <motion.a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
