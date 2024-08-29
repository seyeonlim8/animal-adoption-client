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
import RandomCatFactCard from "../components/RandomCatFactCard.js";

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
          <h1>Make a Difference in the Lives of Feral Cats</h1>
          <p>
            Join us in making a real difference by supporting initiatives that
            help manage and improve the lives of these resilient animals.
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
              "The greatness of a nation and its moral progress can be judged by
              the way its animals are treated."
            </blockquote>
            <cite>- Mahatma Gandhi</cite>
          </div>
        </section>

        <section className={styles.supportSection}>
          <h2>How You Can Support Feral Cats</h2>
          <p>
            Your involvement can change the lives of feral cats for the better.
            Whether through adoption, rescue, or supporting TNR programs, every
            effort counts. Here’s how you can help:
          </p>
          <div className={styles.supportOptions}>
            <div className={styles.supportOption}>
              <img alt="adoption" src={image4} className={styles.imageFormat} />
              <div className={styles.supportOptionText}>
                <strong>Adopt a Rescued Cat</strong>
                <p>
                  Give a feral cat a second chance by adopting. Many of these
                  cats are waiting for a loving home where they can thrive. Your
                  home could be their sanctuary.
                </p>
              </div>
              <a href="/animals" className={styles.ctaButton}>
                Learn More
              </a>
            </div>
            <div className={styles.supportOption}>
              <img alt="rescue" src={image5} className={styles.imageFormat} />
              <div className={styles.supportOptionText}>
                <strong>Rescue and Provide Care</strong>
                <p>
                  If you find a feral cat in distress, we’re here to help. We
                  provide resources and support to ensure these cats receive the
                  care they need.
                </p>
              </div>
              <a href="/rescue" className={styles.ctaButton}>
                Learn More
              </a>
            </div>
            <div className={styles.supportOption}>
              <img alt="tnr" src={image6} className={styles.imageFormat} />
              <div className={styles.supportOptionText}>
                <strong>Support TNR Programs</strong>
                <p>
                  Trap-Neuter-Return is a humane and effective way to manage the
                  feral cat population. Help improve the quality of life for
                  those already on the street.
                </p>
              </div>
              <a href="/donations" className={styles.ctaButton}>
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section>
          <RandomCatFactCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
