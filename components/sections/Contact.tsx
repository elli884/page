import { Mail } from "lucide-react";
import Card from "../Card";

const emails = [
  "elisabeth.nejedli@alumni.fh-aachen.de",
  "elisabeth.nejedli@rwth-aachen.de",
];

export default function Contact() {
  return (
    <Card id="contact" title="Contact" icon={<Mail className="w-6 h-6" />}>
      <ul className="space-y-3">
        {emails.map((email) => (
          <li key={email}>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 hover:border-turquoise/60 transition-all duration-300 hover:translate-x-1"
            >
              <Mail className="w-4 h-4 text-turquoise group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base text-text group-hover:text-turquoise transition-colors break-all">
                {email}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
