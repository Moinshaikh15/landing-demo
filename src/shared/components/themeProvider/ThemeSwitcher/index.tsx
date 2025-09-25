"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center cursor-pointer w-16 h-8 p-1 rounded-full transition-colors ${
        isDark ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full bg-green-500 shadow-md transform transition-transform ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ThemeSwitcher;
