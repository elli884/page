"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Card from "../Card";

type Skill = {
  icon: string;
  name: string;
  level: number;
};

const skills: Skill[] = [
  { icon: "🔍", name: "Java & GUI Development", level: 3 },
  { icon: "🐍", name: "Python, LLMs & Machine Learning", level: 4 },
  { icon: "⚙️", name: "Mechatronics & Electronics", level: 1 },
];

export default function Skills() {
  return (
    <Card id="skills" title="Skills" icon={<Code2 className="w-6 h-6" />}>
      <ul className="space-y-5">
        {skills.map((skill, idx) => (
          <li key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="flex items-center gap-2 text-sm sm:text-base">
                <span className="text-xl" aria-hidden="true">
                  {skill.icon}
                </span>
                <span className="font-medium">{skill.name}</span>
              </span>
              <span className="text-xs text-text/60 tabular-nums">
                {skill.level}/5
              </span>
            </div>
            <div className="relative h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-turquoise to-blue-400 rounded-full shadow-[0_0_8px_rgba(0,206,209,0.6)]"
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
