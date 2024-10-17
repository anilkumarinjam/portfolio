import React from "react";
import { cn } from "@/lib/utils";

export default function RainbowButton({ children, className, ...props }) {
  const customGradient = "linear-gradient(to right, #2b3790,#6841b1,#e987e9)"; // Your custom colors
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-transform duration-300 ease-in-out",
        
        // before styles for the animated shadow below the button
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(10px)]",

        // light mode colors
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        // dark mode colors
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        className
      )}
      style={{
        color:"white",
        transform: "scale(1)", // Default scale
        transition: "transform 0.3s ease-in-out", // Ensure smooth transition on hover
        background: customGradient, // Set a default gradient background
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.3)"; // Apply scale(1.3) on hover
        //e.currentTarget.style.background = 'linear-gradient(to right, purple, pink, yellow)'; // Ensure the background is applied
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Revert to scale(1) when hover is removed
        //e.currentTarget.style.background = ''; // Reset background to original
      }}
      {...props}
    >
      {children}
    </button>
  );
}
