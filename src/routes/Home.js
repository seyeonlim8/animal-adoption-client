import React from "react";
import styles from "../App.module.css"; // Import the CSS module
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.homeContainer}>
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

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Support Stray Cats</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={styles.ctaButton}>Find Nearest Shelters</button>
          <div className={styles.quoteSection}>
            <blockquote>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt."
            </blockquote>
            <cite>Maria Lopez, VP of Design at Mehsley</cite>
          </div>
        </section>

        <section className={styles.supportSection}>
          <h2>How You Can Support Stray Cats</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className={styles.supportOptions}>
            <div className={styles.supportOption}>
              <div className={styles.imagePlaceholder}></div>
              <h3>Help rescued cats waiting for a new home at the shelter</h3>
              <a href="#learn-more1" className={styles.learnMore}>
                Learn More
              </a>
            </div>
            <div className={styles.supportOption}>
              <div className={styles.imagePlaceholder}></div>
              <h3>Found a stray cat? Let us know. We can help you.</h3>
              <a href="#learn-more2" className={styles.learnMore}>
                Learn More
              </a>
            </div>
            <div className={styles.supportOption}>
              <div className={styles.imagePlaceholder}></div>
              <h3>Support hospitals for TNR (Trap-Neuter-Return) Programs</h3>
              <a href="#learn-more3" className={styles.learnMore}>
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
