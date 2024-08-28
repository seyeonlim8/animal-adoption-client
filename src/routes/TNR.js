import React from "react";
import styles from "../css/TNR.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import largeImage from "../assets/tnr-main.jpg";
import alleyCatAllies from "../assets/alley-cat-allies.jpg";
import aspca from "../assets/aspca.png";
import humaneSociety from "../assets/humane-society.jpg";
import neighborhoodCats from "../assets/neighborhood-cats.png";

function TNR() {
  return (
    <div className={styles.tnrContainer}>
      <Navbar />
      <div className={styles.mainImageContainer}>
        <img src={largeImage} alt="TNR Main" className={styles.mainImage} />
        <div className={styles.imageOverlay}>
          <h1 className={styles.mainTitle}>Trap-Neuter-Return (TNR)</h1>
          <p className={styles.mainSubtitle}>
            Helping Cats Live Healthier Lives
          </p>
        </div>
      </div>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>What is TNR?</h2>
          <p>
            Trap-Neuter-Return (TNR) is a humane method of managing and reducing
            the feral cat population. In a TNR program, cats are humanely
            trapped, spayed or neutered, and then returned to their original
            location. This process helps control the population of feral cats
            while allowing them to live out their lives in their familiar
            environment.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why TNR is Important - Benefits of TNR</h2>
          <br />
          <h3>1. Prevention of Overpopulation</h3>
          <p>
            Feral cats are territorial animals, and when there are too many cats
            in the same area, it often leads to stress, aggression, and
            fighting. Overpopulation can create significant challenges both for
            the cats and for the community. TNR is a proactive approach to
            address these issues in a way that is compassionate and effective.
          </p>
          <h3>2. Improved Health and Well-being</h3>
          <p>
            Female cats no longer have to endure the constant cycle of
            pregnancy, which can take a toll on their health. TNR also improves
            the overall health of the cats, reducing the spread of diseases and
            injuries that commonly afflict unneutered feral cats. This leads to
            an increase in life expectancy, allowing the cats to live healthier
            and more stable lives.
          </p>
          <h3>3. Reduction in Unwanted Behaviors</h3>
          <p>
            Feral cats often mark their territory with urine or feces, which can
            lead to unpleasant odors and unsanitary conditions in neighborhoods.
            Neutering reduces these behaviors, leading to a cleaner and more
            harmonious living environment for both humans and cats.
          </p>
        </section>

        <section className={styles.noticeSection}>
          <h2>Important Considerations</h2>
          <br />
          <h3>1. Ensure the Cat's Health</h3>
          <p>
            It's crucial that the cat is in good health before undergoing TNR.
            Cats that are too young, sick, or frail may face increased risks
            during or after the procedure, including the possibility of
            worsening their condition or even death.
          </p>
          <h3>2. Use the Right Equipment</h3>
          <p>
            To safely trap the cat without causing harm, it's essential to use a
            humane and appropriate trap. For detailed information on how to rent
            a suitable trap, please click here.
          </p>
          <h3>3. Ongoing Care After TNR</h3>
          <p>
            After returning the cat to its original location post-TNR, it is
            your responsibility to continue providing food, water, and necessary
            care to ensure its well-being.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Support TNR Programs</h2>
          <p>
            Several organizations are dedicated to supporting TNR programs. By
            collaborating with these groups, we can ensure that feral cats
            receive the care and attention they need. Below are some
            organizations you can support or contact for TNR assistance:
          </p>
          <section className={styles.supportOrgsSection}>
            <h2>Organizations Supporting TNR Programs</h2>
            <div className={styles.orgLogosContainer}>
              <a
                href="https://www.alleycat.org/our-work/trap-neuter-return/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orgLogo}
              >
                <img src={alleyCatAllies} alt="Alley Cat Allies" />
                <p>Alley Cat Allies</p>
              </a>
              <a
                href="https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender/closer-look-community-cats"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orgLogo}
              >
                <img src={aspca} alt="ASPCA" />
                <p>ASPCA</p>
              </a>
              <a
                href="https://www.humanesociety.org/resources/outdoor-cats-faq"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orgLogo}
              >
                <img src={humaneSociety} alt="Humane Society" />
                <p>Humane Society</p>
              </a>
              <a
                href="https://www.neighborhoodcats.org/how-to-tnr/getting-started/what-is-tnr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orgLogo}
              >
                <img src={neighborhoodCats} alt="Neighborhood Cats" />
                <p>Neighborhood Cats</p>
              </a>
            </div>
          </section>
        </section>

        <section className={styles.section}>
          <h2>Find TNR Clinics Near You</h2>
          <p>
            Looking for veterinary clinics or hospitals that support TNR
            programs? Use the link below to find TNR facilities near you.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=tnr+clinics+near+me"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find TNR Clinics
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TNR;
