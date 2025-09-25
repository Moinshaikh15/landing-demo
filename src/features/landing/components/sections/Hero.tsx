import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <h2 className="text-4xl font-extrabold mb-4">Find Your Perfect Match</h2>
      <p className="mb-6 text-lg text-gray-200 dark:text-gray-500">
        Join our community and discover meaningful connections.
      </p>
      <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600">
        Get Started
      </button>
    </section>
  );
}
