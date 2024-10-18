"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Ensure text is a string; if not, default to an empty string
  const words = (typeof text === "string" ? text : "").split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]">
        <p className="flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={i} progress={scrollYProgress} range={[end, start]}>
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
  // Change the opacity transformation to start from 0 to 1
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="relative mx-1 lg:mx-2.5 font-bold text-blue-800 dark:text-gray-300"
    >
      {children}
    </motion.span>
  );
};

export default TextRevealByWord;
