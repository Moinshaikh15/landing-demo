import React from "react";

export default function Features() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h4 className="text-xl font-semibold mb-2">Create a Profile</h4>
          <p>Sign up and set up your dating profile in minutes.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Discover Matches</h4>
          <p>Swipe and connect with people who share your interests.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Start Chatting</h4>
          <p>Message your matches directly and build connections.</p>
        </div>
      </div>
    </section>
  );
}
