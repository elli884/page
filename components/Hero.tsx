"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative w-full overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary/40 to-transparent pointer-events-none" />

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-turquoise/10 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center pt-24 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-turquoise to-primary blur-2xl opacity-60 animate-pulse" />
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-turquoise to-blue-400 animate-gradient-x [background-size:200%_200%]" />
            <Image
              src="/images/See.png"
              alt="Elisabeth Nejedli"
              width={230}
              height={230}
              priority
              className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide text-gradient text-center"
        >
          Elisabeth Nejedli
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-sm sm:text-base text-text/70 max-w-md text-center"
        >
          MATSE Trainee · Software Developer · AI Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown
              className="w-6 h-6 text-turquoise/60"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
