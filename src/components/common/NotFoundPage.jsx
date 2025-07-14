import { motion } from 'framer-motion';
import React from 'react';

export default function NotFoundPage() {
  return (
    
<section class="text-center">
<div class="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
  <h1 class="text-6xl font-extrabold text-gray-800 mb-4">404</h1>

  <div class="w-full max-w-md mb-6">
    <img
      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      alt="Lost Caveman"
      class="w-full h-auto object-contain"
    />
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mb-2">
    Look like you're lost
  </h2>
  <p class="text-sm text-gray-600 mb-6">
    The page you are looking for is not available!
  </p>

  <a
    href="/"
    class="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
  >
    Go to Home
  </a>
</div>
</section>
  );
}
