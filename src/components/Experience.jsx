// import React from "react";
// import styles from "../styles/Experience.module.css";
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     company: "XYZ Tech Solutions",
//     title: "Frontend Developer",
//     duration: "Mar 2023 – Present",
//     description:
//       "Working on modern web apps with a focus on performance, accessibility, and user experience.",
//     tech: ["React", "JavaScript", "Vite", "Framer Motion"],
//   },
//   {
//     company: "ABC Innovations",
//     title: "Jr. Frontend Developer",
//     duration: "Jul 2022 – Feb 2023",
//     description:
//       "Built UI components, fixed bugs, and collaborated with backend teams to deliver features.",
//     tech: ["React", "Redux", "SCSS"],
//   },
// ];

// export default function Experience() {
//   return (
//     <section id="experience" className={styles.experience}>
//       <motion.div
//   className={styles.container}
//   initial={{ opacity: 0, y: -40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, ease: "easeOut" }}
//   viewport={{ once: true }}
// >
//   <motion.h2
//     initial={{ opacity: 0, y: -20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: 0.2 }}
//   >
//     Experience
//   </motion.h2>

//   <div className={styles.timeline}>
//     {experiences.map((exp, idx) => (
//       <motion.div
//         key={idx}
//         className={styles.item}
//         initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{
//           duration: 0.6,
//           delay: idx * 0.2 + 0.3,
//           ease: "easeOut",
//         }}
//         viewport={{ once: true }}
//       >
//         <motion.div
//           className={styles.badge}
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{
//             delay: idx * 0.2 + 0.4,
//             type: "spring",
//             stiffness: 300,
//           }}
//         />
//         <div className={styles.content}>
//           <h3>
//             {exp.title} <span>@ {exp.company}</span>
//           </h3>
//           <p className={styles.duration}>{exp.duration}</p>
//           <p className={styles.desc}>{exp.description}</p>
//           <motion.div
//             className={styles.tech}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: {},
//               visible: {
//                 transition: { staggerChildren: 0.1, delayChildren: idx * 0.2 + 0.5 },
//               },
//             }}
//           >
//             {exp.tech.map((t, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {t}
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </motion.div>

//     </section>
//   );
// }

import React from "react";
import styles from "../styles/Experience.module.css";
import { motion } from "framer-motion";
import { experiences } from "../utils/constants/experiences";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className={styles.grid}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`${styles.card} ${styles[exp.type]}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            viewport={{ once: true }}
          >
            <h3>{exp.title}</h3>
            <span className={styles.company}>
              @{" "}
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                {exp.company}
              </a>
            </span>

            <p className={styles.duration}>{exp.duration}</p>
            <p className={styles.desc}>{exp.description}</p>
            <div className={styles.tech}>
              {exp.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
