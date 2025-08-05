import { useEffect, useState } from "react";
import {useStripe, useElements} from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    // Submit the form data to Stripe first
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setMessage(submitError.message);
      setIsProcessing(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`, // Adjust the return URL as needed
      },
      redirect: "if_required",
    });

    if (error) {
      // Handle different types of errors
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message);
      } else {
        setMessage('An unexpected error occurred.');
      }
      console.error('Payment error:', error);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage("Payment successful!");
    } else {
      setMessage("Payment processing...");
    }
    
    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="checkout-form">
      <div className="payment-element-container">
        <PaymentElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>
      
      <button 
        disabled={isProcessing || !stripe || !elements} 
        id="submit" 
        className={`pay-button ${isProcessing ? 'processing' : ''}`}
      >
        <span className="button-content">
          {isProcessing ? (
            <>
              <div className="button-spinner"></div>
              Processing...
            </>
          ) : (
            <>
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pay Securely
            </>
          )}
        </span>
      </button>

      {message && (
        <div className={`payment-message ${message.includes('successful') ? 'success' : 'error'}`}>
          <div className="message-content">
            {message.includes('successful') ? (
              <svg className="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {message}
          </div>
        </div>
      )}
    </form>
  );
}