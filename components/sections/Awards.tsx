import { Trophy, ExternalLink } from "lucide-react";
import Card from "../Card";

const awards = [
  {
    title: "Winner of the Smart City Hackathon Aachen 2025",
    url: "https://blogs.mathworks.com/student-lounge/2025/08/25/designing-a-quieter-future-how-a-student-team-from-fh-aachen-won-the-smart-city-aachen-hackathon/",
    year: "2025",
  },
];

export default function Awards() {
  return (
    <Card id="awards" title="Awards" icon={<Trophy className="w-6 h-6" />}>
      <ul className="space-y-3">
        {awards.map((award) => (
          <li key={award.title}>
            <a
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start sm:items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 via-secondary/30 to-card-bg/30 border border-yellow-500/20 hover:border-yellow-400/60 hover:from-yellow-500/20 transition-all duration-300"
            >
              <span className="text-3xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                🏆
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-medium text-text group-hover:text-yellow-300 transition-colors">
                  {award.title}
                </p>
                <span className="text-xs text-turquoise/70 mt-0.5 block">
                  {award.year}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-text/40 group-hover:text-yellow-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
