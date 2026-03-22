import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import * as React from "react";

export type ProjectCardProps = {
  name: string;
  tagline: string;
  url: string;
  description: React.ReactNode;
  techStack: string[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  tagline,
  url,
  description,
  techStack,
}) => {
  return (
    <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4 flex flex-col gap-3 min-h-48">
      <div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 group"
        >
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
            {name}
          </h3>
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </div>
      <p className="text-sm">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
