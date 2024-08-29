import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../css/Donation.module.css";
import qr from "../assets/payment-link-test-qr.png";

function Donation() {
  return (
    <div className={styles.donationContainer}>
      <Navbar />

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <h1>Your Support Matters</h1>
          <p>
            Every donation helps us provide essential resources for the care and
            management of feral cats. Your generosity makes a real difference.
          </p>
        </section>

        <section className={styles.formSection}>
          <div className={styles.card}>
            <h2>Thank You for Your Support!</h2>
            <h3>
              Your generosity directly impacts the lives of feral cats in need.
            </h3>
            <p>
              All donations are used to support our TNR (Trap-Neuter-Return)
              programs, provide medical care, and ensure that feral cats live
              healthier, happier lives. We are grateful for your compassion and
              commitment to making a difference.
            </p>
            <div className={styles.qrCodeSection}>
              <img src={qr} alt="QR Code" className={styles.qrCode} />
            </div>
            <div className={styles.donationInfo}>
              <p>
                Scan the QR code to make a quick donation. Your contribution is invaluable to us.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Donation;
