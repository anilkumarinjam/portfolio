"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const words = (typeof text === "string" ? text : "").split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 flex h-[40vh] max-w-4xl items-center bg-transparent px-[1rem] py-5">
        <p className="flex flex-wrap text-2xl font-bold text-black/20 dark:text-white/20 md:text-3xl lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            // Adjust start and end for better transition timing
            const start = i / words.length; // Start the current word's transition
            const end = (i + 1) / words.length; // End the current word's transition

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  // Use the scroll progress to determine opacity
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="relative mx-1 lg:mx-2.5 font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"
    >
      {children}
    </motion.span>
  );
};

export default TextRevealByWord;
