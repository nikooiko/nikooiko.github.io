import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import * as React from "react";

export type ProjectCardProps = {
  name: string;
  tagline: string;
  url: string;
  description: React.ReactNode;
  highlights: string[];
  logo: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  tagline,
  url,
  description,
  highlights,
  logo,
}) => {
  return (
    <div className="border border-stone-200 dark:border-stone-700 rounded-xl p-6 flex flex-col gap-4 bg-background shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden">
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-primary">{tagline}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      <ul className="flex flex-col gap-1.5">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-0.5 flex-shrink-0">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div>
        <Button variant="outline" size="sm" asChild>
          <a href={url} target="_blank">
            Visit {name}
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};
