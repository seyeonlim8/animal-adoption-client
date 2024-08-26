import React, { useEffect } from "react";
import styles from "../css/Home.module.css"; // Import the CSS module
import image1 from "../assets/cat1.jpg";
import image2 from "../assets/cat2.jpg";
import image3 from "../assets/cat3.jpg";
import image4 from "../assets/cat4.jpg";
import image5 from "../assets/cat5.jpg";
import image6 from "../assets/cat6.jpg";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Home() {
  useEffect(() => {
    const images = [image1, image2, image3];
    let currentIndex = 0;
    const changeBackgroundImage = () => {
      const heroSection = document.querySelector(`.${styles.hero}`);
      if (heroSection) {
        heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
      }
    };
    changeBackgroundImage();
    const intervalId = setInterval(changeBackgroundImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Navbar />

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <h1>Support Stray Cats</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=animal+shelters+near+me"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find Nearest Shelters
          </a>
          <div className={styles.quoteSection}>
            <blockquote>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt."
            </blockquote>
            Maria Lopez, VP of Design at Mehsley
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
              <img alt="adoption" src={image4} className={styles.imageFormat} />
              <div className={styles.supportOptionText}>
                Help rescued cats waiting for a new home at the shelter.
              </div>
              <a href="/animals" className={styles.ctaButton}>
                Learn More
              </a>
            </div>
            <div className={styles.supportOption}>
              <img alt="rescue" src={image5} className={styles.imageFormat} />
              <div className={styles.supportOptionText}>
                Found a stray cat? Let us know. We can help you.
              </div>
              <a href="/rescue" className={styles.ctaButton}>
                Learn More
              </a>
            </div>
            <div className={styles.supportOption}>
              <img alt="tnr" src={image6} className={styles.imageFormat} />
              <div className={styles.supportOptionText}>
                Support hospitals for TNR (Trap-Neuter-Return) Programs.
              </div>
              <a href="/donations" className={styles.ctaButton}>
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
