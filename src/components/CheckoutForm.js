import {
  AddressElement,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const totalPrice = 10000;

const CheckoutForm = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [address, setAddress] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  // Create a payment intent
  useEffect(() => {
    fetch("http://localhost:3001/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: totalPrice }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {},
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      sendEmail(address);
    }
  };

  // Send email to confirm payment
  const sendEmail = async (address) => {
    try {
      const response = await fetch("http://localhost:3001/send-payment-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
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
    <form id="payment-form" onSubmit={handleSubmit}>
      {/* Shipping information */}
      <h3>Shipping Information</h3>
      <h4>Please enter the address you wrote in Step 1.</h4>
      <AddressElement
        options={{
          mode: "shipping",
          fields: {
            phone: "always",
          },
          validation: {
            phone: {
              required: "always",
            },
          },
        }}
        onChange={(event) => {
          const address = event.value.address;
          setAddress(address);
        }}
      />

      {/* Card information */}
      <br />
      <h3>Card Information</h3>
      <h4>Please enter your card information.</h4>
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}

      {/* Show success message only if payment succeeded */}
      {succeeded && (
        <p className={`result-message`}>
          Payment succeeded! We will send you a confirmation email once your
          request is reviewed.
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
