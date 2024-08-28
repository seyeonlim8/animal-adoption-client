import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.purrs}>
          P<span className={styles.ur}>UR</span>RS
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <Link to="/animals">Adoption</Link>
        <a href="/rescue">Rescue</a>
        <a href="/tnr">TNR</a>
        <a href="#link4">Donations</a>
      </nav>
    </header>
  );
}

export default Navbar;
