// import React, { useRef, useState } from "react";
// import styles from "../styles/Contact.module.css";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { public_key, service_id, template_id } from "../utils/constants/email";

// export default function Contact() {
//   const form = useRef();
//   const [sent, setSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(service_id, template_id, form.current, public_key)
//       .then(() => {
//         setSent(true);
//         form.current.reset();
//         setTimeout(() => setSent(false), 4000);
//       })
//       .catch((err) => {
//         console.error("EmailJS Error:", err);
//       });
//   };

//   return (
//     <section id="contact" className={styles.contact}>
//       <motion.div
//         className={styles.container}
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2>Contact Me</h2>
//         <form ref={form} onSubmit={sendEmail} className={styles.form}>
//           <input
//             type="text"
//             name="from_name"
//             placeholder="Your Name"
//             required
//           />
//           <input
//             type="email"
//             name="from_email"
//             placeholder="Your Email"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="6"
//             required
//           />
//           <button type="submit">Send Message</button>
//           {sent && (
//             <p className={styles.success}>
//               Thank you! Your message has been sent.
//             </p>
//           )}
//         </form>
//       </motion.div>
//     </section>
//   );
// }

import React, { useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { public_key, service_id, template_id } from "../utils/constants/email";
import contactIllustration from "../assets/images/contact-us.svg";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, public_key)
      .then(() => {
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <section id="contact" className={styles.contact}>

      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className={styles.wrapper}>
        {/* Left Side Illustration */}
        <motion.div
          className={styles.illustration}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={contactIllustration} alt="Contact" />
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>

            <AnimatePresence>
              {sent && (
                <motion.p
                  className={styles.success}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Thank you! Your message has been sent.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
