import React from "react";
import styles from "../css/Rescue.module.css";
import Navbar from "../components/Navbar";
import StripeCheckout from "../components/StripeCheckout";
import Footer from "../components/Footer";

function Rescue() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Email failed to send.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Email failed to send - error occurred.");
    }
  };

  return (
    <div className={styles.rescueContainer}>
      <Navbar />

      <main className={styles.mainContent}>
        <section className={styles.intro}>
          <h1>Rescue and TNR Support</h1>
          <p>
            Found a feral cat that needs urgent help or TNR? Borrow a trap from
            us to help out.
          </p>
        </section>

        <section className={styles.videoSection}>
          <div className={styles.card}>
            <h2>How to Properly Trap Feral Cats</h2>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/aSpdujzaEa0"
              title="How to Trap Feral Cats"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className={styles.noticeSection}>
          <div className={styles.noticeCard}>
            <h3>Important Notice for Trap Rentals</h3>
            <p>
              1. The trap is intended solely for the safe rescue of feral cats in need of urgent medical treatment or TNR. Please describe in detail your reason for renting the trap.
            </p>
            <p>
              2. Only one trap may be rented at a time.
            </p>
            <p>
              3. The trap must be returned within one month. It should be clean and sanitized prior to return.
            </p>
            <p>
              4. To receive your security deposit back, please email us with the following information:
            </p>
            <ul>
              <li>Your name and the phone number used for payment</li>
              <li>A picture taken immediately after rescuing the cat</li>
              <li>A picture taken immediately after returning the cat to its original location (It is crucial that the cat is returned to where it was found)</li>
              <li>Your bank account details for the deposit refund</li>
            </ul>
            <p>
              Please note that the deposit will only be refunded upon proof of proper and safe use of the trap.
            </p>
            <p>
              5. If you were unable to rescue the cat, please inform us and return the trap promptly.
            </p>
            <p>
              6. For cancellations, please contact us via email.
            </p>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.card}>
            <h2>Request a Trap</h2>
            <h3>Step 1: Fill out the form below</h3>
            <form className={styles.trapForm} onSubmit={handleSubmit}>
              <label>
                First Name:
                <input type="text" name="firstName" required />
              </label>
              <label>
                Last Name:
                <input type="text" name="lastName" required />
              </label>
              <label>
                Date of Birth:
                <input type="date" name="dob" required />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number."
                />
              </label>
              <label>
                Address:
                <input type="text" name="address" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Why do you need the trap?
                <textarea name="reason" required></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className={styles.card}>
            <h3>Step 2: Pay the Security Deposit</h3>
            <p>A $100 security deposit is required to borrow a trap.</p>
            <div className={styles.paymentButton}>
              <StripeCheckout />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Rescue;
