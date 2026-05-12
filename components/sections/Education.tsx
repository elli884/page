import { GraduationCap } from "lucide-react";
import Card from "../Card";

const items = [
  {
    title:
      "Dual training as a Mathematical-Technical Software Developer (MATSE) in Aachen",
    date: "September 2023 — Present (3 years)",
    current: true,
  },
  {
    title: "Gap Year Abroad",
    date: "July 2022 — August 2023 (1 year)",
  },
  {
    title:
      "Higher Education Entrance Qualification — Technical College Augsburg",
    date: "September 2020 — June 2022 (2 years)",
  },
];

export default function Education() {
  return (
    <Card
      id="education"
      title="Education"
      icon={<GraduationCap className="w-6 h-6" />}
    >
      <div className="relative pl-6 sm:pl-8">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-turquoise via-primary to-transparent" />
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.title} className="relative">
              <span
                className={`absolute -left-[22px] sm:-left-[26px] top-1.5 w-3 h-3 rounded-full border-2 ${
                  item.current
                    ? "bg-turquoise border-turquoise shadow-[0_0_12px_rgba(0,206,209,0.7)] animate-pulse"
                    : "bg-background border-primary"
                }`}
                aria-hidden="true"
              />
              <h3 className="text-base sm:text-lg font-semibold text-text leading-snug">
                {item.title}
              </h3>
              <span className="block mt-1 text-xs sm:text-sm text-turquoise/80 font-mono">
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
