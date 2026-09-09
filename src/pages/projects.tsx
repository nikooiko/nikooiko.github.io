import { Layout } from "@/components/Layout";
import {
  ProjectCard,
  ProjectCardProps,
} from "@/components/projects/ProjectCard";
import { type PageProps } from "gatsby";
import * as React from "react";
import brandoorLogo from "../images/projects/brandoor.svg";
import gsatelierLogo from "../images/projects/gsatelier.png";
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
    name: "GS Atelier",
    tagline: "Handcrafted art, made with time and attention.",
    url: "https://gsatelier.gr",
    description:
      "An artisan portfolio and shop for Gianna Sovanterli, a Greek maker who crafts jewelry, home decor, and paintings by hand. Each piece is one-of-a-kind, using cotton, wood, and natural materials.",
    highlights: [
      "Original jewelry, home decor, paintings, and custom commissions",
      "Built for a solo artisan to showcase and sell handmade work",
    ],
    logo: gsatelierLogo,
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
      content="Side projects built by Nikos Oikonomou, including Brandoor (curated remote job board), Mnemi (AI memory companion), and GS Atelier (handcrafted art shop)."
    />
  </>
);
