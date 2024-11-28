// app/api/checkout_sessions/route.js

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key and specify the API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15', // Ensure this matches your Stripe API version
});

// Define a mapping between product IDs and their corresponding price IDs
const productPrices = {
  prod_RI6V6MTbIWRCoD: 'price_1QPWIuBRMlOkSU7QVPcgAPzb', // Starter Package Price ID (Recurring)
  prod_RI6W7WxJ2mDI0b: 'price_1QPWIuBRMlOkSU7QvAS8LDLo', // Growth Package Price ID (Recurring)
  prod_RI6WYHQqXrHnhZ: 'price_1QPWIuBRMlOkSU7Qx9XzEIpa', // Elite Package Price ID (Recurring)
};

// Export the POST handler
export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const { productId } = await request.json();

    // Validate that productId is provided
    if (!productId) {
      return NextResponse.json(
        { error: 'Missing productId in request body.' },
        { status: 400 }
      );
    }

    // Retrieve the corresponding priceId from the mapping
    const priceId = productPrices[productId];

    // Validate that the priceId exists for the given productId
    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid productId provided.' },
        { status: 400 }
      );
    }

    // Create a Stripe Checkout Session with 'subscription' mode
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription', // Changed from 'payment' to 'subscription'
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=true`,
    });

    // Respond with the session URL for redirection
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Error creating Stripe Checkout Session:', err);

    // Handle Stripe-specific errors
    if (err.type === 'StripeCardError') {
      return NextResponse.json(
        { error: err.message },
        { status: err.statusCode || 500 }
      );
    }

    // Handle generic errors
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
