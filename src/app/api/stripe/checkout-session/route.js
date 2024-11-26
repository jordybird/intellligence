import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    // Define a mapping between product IDs and their corresponding price IDs
    const productPrices = {
      prod_RI6V6MTbIWRCoD: "price_1QPWIuBRMlOkSU7QVPcgAPzb", // Starter Package Price ID
      prod_RI6W7WxJ2mDI0b: "price_1QPWJQBRMlOkSU7QvAS8LDLo", // Growth Package Price ID
      prod_RI6WYHQqXrHnhZ: "price_1QPWJoBRMlOkSU7Qx9XzEIpa", // Elite Package Price ID
    };

    // Extract productId from the request body
    const { productId } = body;

    // Validate that the productId exists in the mapping
    if (!productPrices[productId]) {
      console.error(`Invalid product ID: ${productId}`);
      return new Response(
        JSON.stringify({ error: `Invalid product ID: ${productId}` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Retrieve the corresponding price ID
    const priceId = productPrices[productId];

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded", // Specify embedded UI mode
      line_items: [
        {
          price: priceId,
          quantity: 1, // Default to 1 unit
        },
      ],
      mode: "subscription", // Use subscription mode for recurring payments
      redirect_on_completion: "never", // Disable redirection for embedded Checkout
    });

    // Respond with the client secret for the session
    return new Response(
      JSON.stringify({ clientSecret: session.client_secret }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Log the error for debugging
    console.error("Error creating Stripe session:", error);

    // Return an error response
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
