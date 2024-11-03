import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { TimelineEntry, TimelineEntryProps } from "../TimelineEntry";

const educationLogoProps = {
  className: "rounded-full",
  width: 48,
};

const education: TimelineEntryProps[] = [
  {
    at: "University of Thessaly",
    logo: (
      <StaticImage
        src="../../images/ece_uth_logo.png"
        alt="ece_uth"
        {...educationLogoProps}
      />
    ),
    logoClasses: "bg-white",
    link: "https://uth.gr",
    skipDuration: true,
    history: [
      {
        as: "M.Sc.",
        end: new Date("2018-09-15T12:00:00.000Z"),
        start: new Date("2012-09-15T12:00:00.000Z"),
        what: (
          <>
            <a
              href="https://www.e-ce.uth.gr/"
              className="hover:underline"
              target="_blank"
            >
              Electrical and Computer Engineering.
            </a>
            <p className="mt-4 text-justify">
              As a student, I was intrigued by software development, especially
              low-level programming. At first, I focused mainly on system-level
              programming (POSIX), distributed systems, computer architecture
              (assembly/Verilog), and high-performance computing (CUDA/OpenMP),
              while at the same time, I started my first steps as a web
              developer by building various web applications. Later, I focused
              on embedded systems and ad hoc wireless sensor networks, which
              allowed me to enter the IoT world and build end-to-end solutions.
            </p>
          </>
        ),
      },
    ],
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section className="px-4 py-2 max-w-xl">
      <h2 className="text-2xl font-bold py-2">Education</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4 pr-4 sm:pr-0">
        {education.map((e, i) => (
          <TimelineEntry key={`edu-${i}`} {...e} />
        ))}
      </ol>
    </section>
  );
};
