import { Layout } from "@/components/Layout";
import {
  ProjectCard,
  ProjectCardProps,
} from "@/components/projects/ProjectCard";
import { type PageProps } from "gatsby";
import * as React from "react";

const projects: ProjectCardProps[] = [
  {
    name: "brandoor.io",
    tagline: "Curated Remote Job Board",
    url: "https://brandoor.io",
    description:
      "A curated remote job board focused on quality over quantity. Job seekers can search, filter, and bookmark remote jobs from vetted companies, with full-text search, multi-dimension filters, URL-shareable state, and saved searches with email alerts. Companies are community-rated via upvotes/downvotes, and users can follow them to get notified when new roles appear. Automated crawlers keep listings fresh, and an AI pipeline continuously discovers and enriches new companies.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Gemini",
    ],
  },
  {
    name: "mnemi.app",
    tagline: "AI Memory Companion",
    url: "https://mnemi.app",
    description:
      "A private journaling app that uses AI to help you capture moments, track commitments, and revisit your past. Write or speak freely (voice recording included), and the app organizes what matters: each entry is analyzed automatically, generating a summary, extracting keywords, and identifying action items with due dates. A built-in chat lets you query your own history conversationally via semantic search.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "OpenAI",
      "Stripe",
    ],
  },
];

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout activePath={location.pathname}>
      <section className="px-4 mt-4 max-w-2xl w-full">
        <h2 className="text-2xl font-bold py-2">Projects</h2>
        <div className="flex flex-col gap-4">
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
      content="Side projects built by Nikos Oikonomou, including brandoor.io (curated remote job board) and mnemi.app (AI memory companion)."
    />
  </>
);
