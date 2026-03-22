import { Layout } from "@/components/Layout";
import {
  ProjectCard,
  ProjectCardProps,
} from "@/components/projects/ProjectCard";
import { type PageProps } from "gatsby";
import * as React from "react";
import brandoorLogo from "../images/projects/brandoor.svg";
import mnemiLogo from "../images/projects/mnemi.png";

const projects: ProjectCardProps[] = [
  {
    name: "Brandoor",
    tagline: "Remote jobs at companies that matter.",
    url: "https://brandoor.io",
    description:
      "A curated collection of remote opportunities at recognizable, respected companies that strengthen your career credibility. No ads, no paid placements, just honest job discovery.",
    highlights: [
      "Curated, vetted companies for reputation and remote culture",
      "Independent & ad-free platform",
    ],
    logo: brandoorLogo,
  },
  {
    name: "Mnemi",
    tagline: "Your private AI memory companion.",
    url: "https://mnemi.app",
    description:
      "Capture moments, revisit memories, find meaning. Write or speak to capture memories, get AI-powered insights, and chat with your past self to discover patterns.",
    highlights: [
      "Voice and text memory capture with instant transcription",
      "AI-powered summaries, keywords, and action items",
      "Private by design with secure authentication",
    ],
    logo: mnemiLogo,
  },
];

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout activePath={location.pathname}>
      <section className="px-4 mt-4 max-w-2xl w-full">
        <div className="flex flex-col gap-4 mt-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Projects by Nikos Oikonomou</title>
    <meta
      name="description"
      content="Side projects built by Nikos Oikonomou, including Brandoor (curated remote job board) and Mnemi (AI memory companion)."
    />
  </>
);
