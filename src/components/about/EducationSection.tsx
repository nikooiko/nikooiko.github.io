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
              My academic journey focused on <b>low-level programming</b> and{" "}
              <b>distributed systems</b>, starting with system-level programming
              (POSIX) and computer architecture. I specialized in
              <b> embedded systems</b> and <b>wireless sensor networks</b>,
              which led me into the IoT domain and enabled me to build
              comprehensive end-to-end solutions. This foundation continues to
              influence my approach to scalable, reliable software architecture.
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
      <ol className="relative border-s border-stone-200 dark:border-stone-700 ml-4 pr-4 sm:pr-0">
        {education.map((e, i) => (
          <TimelineEntry key={`edu-${i}`} {...e} />
        ))}
      </ol>
    </section>
  );
};
