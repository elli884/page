import { Sparkles } from "lucide-react";
import Card from "../Card";

const hobbies = [
  { icon: "🎶", label: "Music" },
  { icon: "🏋️‍♂️", label: "Powerlifting" },
  { icon: "📚", label: "Reading" },
  { icon: "🏞️", label: "Outdoor activities" },
  { icon: "👨‍🍳", label: "Cooking" },
];

export default function Hobbies() {
  return (
    <Card id="hobbies" title="Hobbies" icon={<Sparkles className="w-6 h-6" />}>
      <ul className="flex flex-wrap gap-3">
        {hobbies.map(({ icon, label }) => (
          <li
            key={label}
            className="group flex flex-col items-center justify-center gap-1.5 w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary/40 to-card-bg/50 border border-secondary/40 hover:border-turquoise/70 hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <span
              className="text-3xl group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              {icon}
            </span>
            <span className="text-xs font-medium text-center px-1">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
