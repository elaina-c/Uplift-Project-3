import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mokcp6q",
        "template_chja1cd",
        form.current,
        "9PuGyR6X7C-YNmCv5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.ContainerCard}>
        <h2>Contact Me</h2>
        <div className={styles.contactInfo}>
          <a
            href="https://gitlab.com/limelaine14"
            target="_blank"
            rel="noreferrer"
          >
            <FaGitlab /> GitLab
          </a>
          <a
            href="https://github.com/elaina-c"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/elaine-lim-014989368/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:limelaine14@gmail.com">
            <FaEnvelope /> Email
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {status && <p className={styles.status}>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
