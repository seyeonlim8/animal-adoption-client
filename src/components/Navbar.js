import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar.module.css"; 

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">PURRS</Link>
      </div>
      <nav className={styles.navLinks}>
        <Link to="/animals">Adoption</Link>
        <a href="#link2">Rescue</a>
        <a href="#link3">TNR</a>
        <a href="#link4">Donations</a>
      </nav>
    </header>
  );
}

export default Navbar;
