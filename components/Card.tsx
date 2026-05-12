"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardProps = {
  id?: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  delay?: number;
};

export default function Card({
  id,
  title,
  icon,
  children,
  delay = 0,
}: CardProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40 transition-all duration-300 hover:shadow-turquoise/10 hover:shadow-2xl scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-primary/30">
        {icon && (
          <span className="text-2xl text-turquoise" aria-hidden="true">
            {icon}
          </span>
        )}
        <h2 className="text-xl sm:text-2xl font-semibold text-gradient-cyan">
          {title}
        </h2>
      </div>
      <div className="text-text/90 text-left">{children}</div>
    </motion.section>
  );
}
