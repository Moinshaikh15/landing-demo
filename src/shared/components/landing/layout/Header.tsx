"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../../themeProvider/ThemeSwitcher";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // While mounting, you can return null or a placeholder
    return (
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-xl font-bold">Social Dating</h1>
      </header>
    );
  }

  // Use either theme or resolvedTheme (depending on next-themes version)
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow">
      <h1 className="text-xl font-bold">Social Dating</h1>

      <ThemeSwitcher />
    </header>
  );
}
