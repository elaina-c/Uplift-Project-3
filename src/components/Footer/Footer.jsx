import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink}>
            <h2 className={styles.logo}>TrendyHub</h2>
          </Link>
          <p>
            Your style, your choice. We’d love to hear your feedback to make
            your experience even better!
          </p>
        </div>

        <div>
          <div className={styles.contacts}>
            <Link to="/contact" className={styles.contactMe}>
              <h2 className={styles.contactTitle}>Contact Me</h2>
            </Link>

            <div className={styles.contactCards}>
              <div className={styles.card}>
                <a
                  href="https://gitlab.com/limelaine14"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconLink}
                >
                  <FaGitlab className={styles.icon} />
                </a>
                <span>GitLab</span>
              </div>

              <div className={styles.card}>
                <a
                  href="https://github.com/elaina-c"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconLink}
                >
                  <FaGithub className={styles.icon} />
                </a>
                <span>GitHub</span>
              </div>

              <div className={styles.card}>
                <a
                  href="https://www.linkedin.com/in/elaine-lim-014989368/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconLink}
                >
                  <FaLinkedin className={styles.icon} />
                </a>
                <span>LinkedIn</span>
              </div>

              <div className={styles.card}>
                <a
                  href="mailto:limelaine14@gmail.com"
                  className={styles.iconLink}
                >
                  <FaEnvelope className={styles.icon} />
                </a>
                <span>Email</span>
              </div>

              <div className={styles.card}>
                <a href="tel:+639368195756" className={styles.iconLink}>
                  <FaPhone className={styles.icon} />
                </a>
                <span>+63 9368195756</span>
              </div>
            </div>
          </div>

          <div className={styles.feedback}>
            <Link to="/contact" className={styles.feedbackLink}>
              <h2 className={styles.feedbackTitle}>Feedback</h2>
            </Link>
            <Link to="/contact">
              <button className={styles.messageBtn}>Message Me</button>
            </Link>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} TrendyHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
