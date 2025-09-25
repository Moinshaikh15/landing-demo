import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 border-t dark:border-gray-700">
      <p>© {new Date().getFullYear()} Social Dating. All rights reserved.</p>
    </footer>
  );
}
