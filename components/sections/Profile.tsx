import { User } from "lucide-react";
import Card from "../Card";

export default function Profile() {
  return (
    <Card id="profile" title="Profile" icon={<User className="w-6 h-6" />}>
      <div className="space-y-4 leading-relaxed">
        <p className="text-base">
          Great passion for{" "}
          <span className="text-turquoise font-semibold">technology</span>,{" "}
          <span className="text-turquoise font-semibold">math</span>, and{" "}
          <span className="text-turquoise font-semibold">computer science</span>
          .
        </p>
        <p className="text-base">
          During my dual training as a software developer, I mainly work on{" "}
          <span className="text-primary font-medium">Java</span>,{" "}
          <span className="text-primary font-medium">Python</span>, and{" "}
          <span className="text-primary font-medium">AI projects</span>.
        </p>
        <p className="text-base italic text-text/80 border-l-2 border-turquoise/60 pl-4 mt-2">
          My goal: to expand my skills and help shape the future of AI.
        </p>
      </div>
    </Card>
  );
}
