import { EducationSection } from "@/components/about/EducationSection";
import { ExperienceSection } from "@/components/about/ExperienceSection";
import { HobbiesSection } from "@/components/about/HobbiesSection";
import { PersonalDetailsSection } from "@/components/about/PersonalDetailsSection";
import { Layout } from "@/components/Layout";
import { type PageProps } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout activePath={location.pathname}>
      <PersonalDetailsSection />
      <ExperienceSection />
      <EducationSection />
      <HobbiesSection />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>About - Nikos Oikonomou</title>
    <meta
      name="description"
      content="Personal page of Nikos Oikonomou. Provides information about the experience, education, skills, hobbies, and interests."
    />
  </>
);
