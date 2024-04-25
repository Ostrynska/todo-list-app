import React from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  const loc = useLocation().pathname;

  return (
    <header
      className={styles.header}>
      <p className={styles.logo}>To-do List</p>
      <div className={styles.links}>
        <Link className={loc === "/" ? styles.active : ""} to="/">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
