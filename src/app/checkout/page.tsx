// src/app/checkout/page.tsx
import CheckoutClient from "./CheckoutClient";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  const clientSecret = resolvedSearchParams.client_secret;

  if (!clientSecret || Array.isArray(clientSecret)) {
    return <div>Error: No client secret found in the URL.</div>;
  }

  return <CheckoutClient clientSecret={clientSecret} />;
}
