"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme, theme } = useTheme();

  // Set default theme to light when component mounts
  React.useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <div className={className} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-center p-4 px-6 hover:bg-pink-300 border-x-2 border-gray-600 relative">
            {/* Show Sun icon by default in light mode */}
            <Sun
              className={`h-[1.2rem] w-[1.2rem] transition-all ${
                theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
              }`}
            />
            {/* Hide Moon icon by default */}
            <Moon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
              }`}
            />
            <span className="sr-only">Toggle theme</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className={theme === "light" ? "bg-accent" : ""}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className={theme === "dark" ? "bg-accent" : ""}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className={theme === "system" ? "bg-accent" : ""}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
