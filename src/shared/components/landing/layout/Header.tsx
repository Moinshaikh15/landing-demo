"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../../themeProvider/ThemeSwitcher";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-xl font-bold">Social Dating</h1>
      </header>
    );
  }

  return (
    <header className=" flex justify-between items-center px-6 py-4 shadow">
      <h1
        className="text-xl font-bold"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Social Dating
      </h1>

      <ThemeSwitcher />
    </header>
  );
}
