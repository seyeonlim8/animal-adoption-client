import useScript from "./UseScript";

function DonationStripeCheckout() {
  const [loading, error] = useScript("https://js.stripe.com/v3/buy-button.js");
  if (error) return <p>Error loading Stripe Checkout: {error}</p>;
  if (loading) return <p>Loading Stripe Checkout...</p>;

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1Pt29xDRtkMaVwJK1TE61I1H"
      publishable-key="pk_test_51PrtYzDRtkMaVwJKVd3vK7wiBA7Pjk8RmD1EgUyceJWStuB2OrtQp66UFtpZw1USS8xdqlrIndwaFIrLbWCOqlg300lGNI8Wwg"
    ></stripe-buy-button>
  );
}

export default DonationStripeCheckout;
