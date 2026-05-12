import { Languages as LanguagesIcon } from "lucide-react";
import Card from "../Card";

const languages = [
  { flag: "🇩🇪", name: "German", level: "Native language", proficiency: 100 },
  { flag: "🇬🇧", name: "English", level: "Fluent", proficiency: 90 },
];

export default function Languages() {
  return (
    <Card
      id="languages"
      title="Languages"
      icon={<LanguagesIcon className="w-6 h-6" />}
    >
      <ul className="space-y-4">
        {languages.map((lang) => (
          <li key={lang.name} className="space-y-2">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {lang.flag}
                </span>
                <span className="font-semibold text-text">{lang.name}</span>
              </div>
              <span className="text-sm text-turquoise/90">{lang.level}</span>
            </div>
            <div className="h-1.5 w-full bg-secondary/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-turquoise rounded-full"
                style={{ width: `${lang.proficiency}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
