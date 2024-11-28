// src/app/api/stripe/checkout-session/route.ts

import Stripe from "stripe";
import { NextResponse } from "next/server";

// Ensure STRIPE_SECRET_KEY is set
if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "Missing") {
  console.error("STRIPE_SECRET_KEY is not set correctly in environment variables.");
  throw new Error("STRIPE_SECRET_KEY is not set correctly.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia", // Use the appropriate Stripe API version
});

interface ProductPrices {
  [key: string]: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();

    // Define a mapping between product IDs and their corresponding price IDs
    const productPrices: ProductPrices = {
      prod_RI6V6MTbIWRCoD: "price_1QPWIuBRMlOkSU7QVPcgAPzb", // Starter Package Price ID
      prod_RI6W7WxJ2mDI0b: "price_1QPWIuBRMlOkSU7QvAS8LDLo", // Growth Package Price ID
      prod_RI6WYHQqXrHnhZ: "price_1QPWIuBRMlOkSU7Qx9XzEIpa", // Elite Package Price ID
    };

    // Extract productId from the request body
    const { productId } = body;

    // Validate that the productId exists in the mapping
    if (!productPrices[productId]) {
      console.error(`Invalid product ID: ${productId}`);
      return NextResponse.json(
        { error: `Invalid product ID: ${productId}` },
        { status: 400 }
      );
    }

    // Retrieve the corresponding price ID
    const priceId = productPrices[productId];

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription", // Use subscription mode for recurring payments
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1, // Default to 1 unit
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      // Additional options can be added here
    });

    // Respond with the client secret for the session
    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error: any) {
    // Log the error for debugging
    console.error("Error creating Stripe session:", error.message);

    // Return an error response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
