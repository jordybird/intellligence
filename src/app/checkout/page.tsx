"use client";

import { useEffect, useState } from "react";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function CheckoutResult() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Parse the client_secret from the URL manually
    const urlParams = new URLSearchParams(window.location.search);
    const clientSecretFromUrl = urlParams.get("client_secret");
    setClientSecret(clientSecretFromUrl);
  }, []);

  if (!clientSecret) {
    return <div>Error: No client secret found in URL.</div>;
  }

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
      <div id="checkout" className="w-full h-screen">
        <EmbeddedCheckout />
      </div>
    </EmbeddedCheckoutProvider>
  );
}
