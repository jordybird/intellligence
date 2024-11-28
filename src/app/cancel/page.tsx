// src/app/cancel/page.tsx

import React from 'react';

export default function CancelPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-red-100'>
      <div className='text-center p-8 bg-white rounded shadow'>
        <h1 className='text-3xl font-bold text-red-600 mb-4'>Payment Canceled</h1>
        <p className='text-gray-700'>
          Your payment was canceled. You can continue browsing and try again when you're ready.
        </p>
      </div>
    </div>
  );
}
