import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";


const Header: React.FC = () => {
  const loc = useLocation().pathname;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={styles.header}
    >
      <div className={styles.logo}>
        <Link to="/">
          <p>To-do List</p>
        </Link>
      </div>
      <div className={styles.links}>
        <Link className={loc === "/" ? styles.active : ""} to="/">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
