import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    // Map product IDs to price IDs
    const productPrices = {
      prod_RI6V6MTbIWRCoD: "price_1QPWIuBRMlOkSU7QVPcgAPzb", // Starter Package Price ID
      prod_RI6W7WxJ2mDI0b: "price_1QPWJQBRMlOkSU7QvAS8LDLo", // Growth Package Price ID
      prod_RI6WYHQqXrHnhZ: "price_1QPWJoBRMlOkSU7Qx9XzEIpa", // Elite Package Price ID
    };

    const { productId } = body;

    // Validate productId
    if (!productPrices[productId]) {
      console.error(`No price found for product ID: ${productId}`);
      throw new Error(`No price found for product ID: ${productId}`);
    }

    // Get the corresponding price ID
    const priceId = productPrices[productId];

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      redirect_on_completion: "never", // Disables redirection for embedded Checkout
    });

    // Return the client secret
    return new Response(
      JSON.stringify({ clientSecret: session.client_secret }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating session:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
