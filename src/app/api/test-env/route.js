export async function GET() {
    return new Response(
      JSON.stringify({
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? "Present" : "Missing",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  