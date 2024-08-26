import React from "react";
import styles from "../css/Footer.module.css"; // Import the CSS module
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>
            PURRS is dedicated to the rescue, care, and rehoming of stray cats.
            Our mission is to ensure every cat finds a loving home.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/about" className={styles.footerLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/animals" className={styles.footerLink}>
                Adoption
              </Link>
            </li>
            <li>
              <Link to="/rescue" className={styles.footerLink}>
                Rescue
              </Link>
            </li>
            <li>
              <Link to="/donations" className={styles.footerLink}>
                Donations
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.footerLink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 PURRS. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
