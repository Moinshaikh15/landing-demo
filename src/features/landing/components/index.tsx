"use client";

import Footer from "@/shared/components/landing/layout/Footer";
import Header from "@/shared/components/landing/layout/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Features from "./sections/Features";

export default function landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
