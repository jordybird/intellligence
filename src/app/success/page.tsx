// src/app/success/page.tsx

import React from 'react';

export default function SuccessPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-green-100'>
      <div className='text-center p-8 bg-white rounded shadow'>
        <h1 className='text-3xl font-bold text-green-600 mb-4'>Payment Successful!</h1>
        <p className='text-gray-700'>
          Thank you for your purchase. You will receive an email confirmation shortly.
        </p>
      </div>
    </div>
  );
}
