import { useEffect } from "react";

function DonationStripeCheckout() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1Pt29xDRtkMaVwJK1TE61I1H"
      publishable-key="pk_test_51PrtYzDRtkMaVwJKVd3vK7wiBA7Pjk8RmD1EgUyceJWStuB2OrtQp66UFtpZw1USS8xdqlrIndwaFIrLbWCOqlg300lGNI8Wwg"
    ></stripe-buy-button>
  );
}

export default DonationStripeCheckout;
