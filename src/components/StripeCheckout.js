import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import "../css/StripeCheckout.module.css"

/* Public Key */
const stripePromise = loadStripe(
  "pk_test_51PrtYzDRtkMaVwJKVd3vK7wiBA7Pjk8RmD1EgUyceJWStuB2OrtQp66UFtpZw1USS8xdqlrIndwaFIrLbWCOqlg300lGNI8Wwg"
);

function StripeCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default StripeCheckout;