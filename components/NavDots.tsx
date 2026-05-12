"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "contact", label: "Contact" },
  { id: "profile", label: "Profile" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "languages", label: "Languages" },
  { id: "hobbies", label: "Hobbies" },
  { id: "awards", label: "Awards" },
];

export default function NavDots() {
  const [active, setActive] = useState<string>("contact");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3"
    >
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3 justify-end"
          aria-label={`Jump to ${label}`}
        >
          <span className="opacity-0 group-hover:opacity-100 text-xs text-turquoise transition-opacity">
            {label}
          </span>
          <span
            className={`block w-2.5 h-2.5 rounded-full border border-turquoise/60 transition-all duration-300 ${
              active === id
                ? "bg-turquoise scale-125 shadow-[0_0_12px_rgba(0,206,209,0.8)]"
                : "bg-transparent group-hover:bg-turquoise/40"
            }`}
          />
        </a>
      ))}
    </motion.nav>
  );
}
