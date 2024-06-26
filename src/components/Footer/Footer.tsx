import React from "react";

import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
      <footer className={styles.footer}>
        <p>Ostrynska Kateryna 2024</p>
      <div className={styles.right}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/k_ostrynska/"
          aria-label="Instagram"
        >
          <FaInstagram size={18}/>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://t.me/kateryna_ostrynska"
          aria-label="Telegram"
        >
          <FaTelegramPlane size={18}/>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/kateryna-ostrynska-9155b0151/"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
