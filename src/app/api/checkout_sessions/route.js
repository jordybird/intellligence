// app/api/checkout_sessions/route.js

export async function POST(request) {
    try {
      console.log('Received request to create checkout session');
  
      const { productId } = await request.json();
      console.log(`Product ID received: ${productId}`);
  
      if (!productId) {
        console.error('Missing productId in request body.');
        return NextResponse.json(
          { error: 'Missing productId in request body.' },
          { status: 400 }
        );
      }
  
      const priceId = productPrices[productId];
      console.log(`Mapped Price ID: ${priceId}`);
  
      if (!priceId) {
        console.error('Invalid productId provided.');
        return NextResponse.json(
          { error: 'Invalid productId provided.' },
          { status: 400 }
        );
      }
  
      // Temporarily log if STRIPE_SECRET_KEY is defined
      if (!process.env.STRIPE_SECRET_KEY) {
        console.error('STRIPE_SECRET_KEY is undefined');
        return NextResponse.json(
          { error: 'Internal Server Error: Stripe Secret Key is missing.' },
          { status: 500 }
        );
      } else {
        console.log('STRIPE_SECRET_KEY is defined');
      }
  
      // Continue with session creation
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=true`,
      });
  
      console.log(`Checkout Session created: ${session.id}`);
  
      return NextResponse.json({ url: session.url });
    } catch (err) {
      console.error('Error creating Stripe Checkout Session:', err);
  
      // Handle Stripe-specific errors
      if (err.type === 'StripeCardError' || err.type === 'StripeInvalidRequestError') {
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
  