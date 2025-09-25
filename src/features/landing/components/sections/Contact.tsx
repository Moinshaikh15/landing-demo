import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="px-6 py-12 max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form ready for Postmark integration");
        }}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 rounded border text-white  dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 rounded border text-white bg-gray-50 dark:bg-gray-800"
          required
        />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 rounded border text-white bg-gray-50 dark:bg-gray-800"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
