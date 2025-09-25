"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "../../icons/SunIcon";
import { MoonIcon } from "../../icons/MoonIcon";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center cursor-pointer w-16 h-8 p-1 rounded-full transition-colors ${
        isDark ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      {/* Sun Icon (left) */}
      <div className="absolute left-1 top-1 w-6 h-6 flex items-center justify-center text-yellow-400">
        <SunIcon />
      </div>

      {/* Moon Icon (right) */}
      <div className="absolute right-1 top-1 w-6 h-6 flex items-center justify-center ">
        <MoonIcon />
      </div>

      {/* Thumb */}
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ThemeSwitcher;
