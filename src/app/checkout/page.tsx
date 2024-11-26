import CheckoutClient from "./CheckoutClient";

export default function CheckoutPage({ searchParams }: { searchParams: { client_secret?: string } }) {
  const clientSecret = searchParams.client_secret;

  if (!clientSecret) {
    return <div>Error: No client secret found in URL.</div>;
  }

  return (
    <CheckoutClient clientSecret={clientSecret} />
  );
}
