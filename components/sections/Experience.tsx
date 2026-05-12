import { Briefcase } from "lucide-react";
import Card from "../Card";

const worked = [
  { icon: "🍽️", label: "Gastronomy" },
  { icon: "📦", label: "Warehouse work" },
  { icon: "📚", label: "Tutoring" },
];

const internships = [
  { icon: "🌸", label: "Gardening" },
  { icon: "⚕️", label: "Pharmacy" },
  { icon: "📏", label: "Surveying technician" },
  { icon: "🏠", label: "Roofing" },
  { icon: "🐾", label: "Animal shelter" },
  { icon: "👮", label: "Police" },
  { icon: "🥛", label: "Dairy" },
  { icon: "🍰", label: "Confectionery" },
  { icon: "🤝", label: "Social work" },
];

function BadgeList({ items }: { items: { icon: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map(({ icon, label }) => (
        <li
          key={label}
          className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 border border-secondary/50 hover:border-turquoise/60 hover:bg-secondary/50 transition-all duration-300 cursor-default"
        >
          <span className="text-base group-hover:scale-110 transition-transform" aria-hidden="true">
            {icon}
          </span>
          <span className="text-xs sm:text-sm whitespace-nowrap">{label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <Card
      id="experience"
      title="Experience & Internships"
      icon={<Briefcase className="w-6 h-6" />}
    >
      <div className="space-y-6">
        <div>
          <p className="text-sm text-text/70 mb-3 font-medium uppercase tracking-wider">
            Worked in
          </p>
          <BadgeList items={worked} />
        </div>
        <div>
          <p className="text-sm text-text/70 mb-3 font-medium uppercase tracking-wider">
            Internships
          </p>
          <BadgeList items={internships} />
        </div>
      </div>
    </Card>
  );
}
