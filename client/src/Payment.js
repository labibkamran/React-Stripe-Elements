import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js"; 
import  CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import "./Payment.css";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch("/config").then(async (response) => {
      const { publishableKey } = await response.json();
      const stripe = await loadStripe(publishableKey);
      setStripePromise(stripe);
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    });
  }, []);
  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        <div className="payment-header">
          <h1 className="payment-title">Secure Payment</h1>
          <p className="payment-subtitle">Complete your purchase safely and securely</p>
        </div>
        
        {stripePromise && clientSecret ? (
          <div className="payment-form-container">
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          </div>
        ) : (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">
              {!stripePromise ? "Initializing secure payment..." : "Preparing payment form..."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
