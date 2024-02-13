import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { format, formatDuration, intervalToDuration } from "date-fns";
import { type PageProps } from "gatsby";
import { Github, Linkedin } from "lucide-react";
import * as React from "react";
import CentaurLogo from "../images/centaur_logo.png";
import UthLogo from "../images/ece_uth_logo.png";
import KarieraLogo from "../images/kariera_group_logo.png";
import Me from "../images/me.jpeg";
import AngularJS from "../images/technologies/angularjs_logo.png";
import Kubernetes from "../images/technologies/k8s_logo.png";
import Loopback from "../images/technologies/lb_logo.png";
import MongoDB from "../images/technologies/mongodb_logo.png";
import NestJS from "../images/technologies/nestjs_logo.png";
import NextJS from "../images/technologies/nextjs_logo.png";
import NodeJS from "../images/technologies/nodejs_logo.png";
import PostgreSQL from "../images/technologies/postgres_logo.png";
import Zephyr from "../images/technologies/zephyr_logo.png";

type TimelineEntryProps = {
  link: string;
  logo: string;
  logoClasses?: string;
  as: string;
  at: string;
  end?: Date;
  start: Date;
  skipDuration?: boolean;
  what: React.ReactNode;
  technologies?: { link: string; icon: string; name: string }[];
  history?: { as: string; start: Date; end: Date; what: React.ReactNode }[];
};

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  end,
  start,
  skipDuration,
  as,
  at,
  what,
  logo,
  logoClasses,
  link,
  technologies,
  history,
}) => {
  return (
    <li className="mb-4 ms-8">
      <span
        className={cn(
          `absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 mt-3 bg-gray-200 shadow-lg `,
          logoClasses
        )}
      >
        <img className="rounded-full" src={logo} alt="Logo" />
      </span>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {format(start, "MMM. yyyy")} -{" "}
        {end ? format(end, "MMM. yyyy") : "Present"}
        {!skipDuration &&
          ` (${formatDuration(
            intervalToDuration({ start: start, end: end ?? new Date() }),
            {
              format: ["months", "years"],
            }
          )})`}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {as} @{" "}
        <a href={link} className="hover:underline" target="_blank">
          {at}
        </a>
      </h3>
      {technologies && (
        <div className="flex flex-row gap-2 flex-wrap justify-between">
          {technologies.map(({ link, icon, name }) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={link} target="_blank">
                    <img
                      className="rounded-full w-16 h-16"
                      src={icon}
                      alt={link}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="py-0 px-2 dark:bg-gray-500 dark:text-white"
                >
                  {name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      )}
      <div className="text-base font-normal text-gray-500 dark:text-gray-400">
        {what}
      </div>
      {history?.map((h) => (
        <>
          <div className="h-4" />
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-8 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {format(h.start, "MMM. yyyy")} - {format(h.end, "MMM. yyyy")} (
            {formatDuration(
              intervalToDuration({ start: h.start, end: h.end }),
              {
                format: ["years", "months"],
              }
            )}
            )
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {h.as}
          </h3>
          <div className=" text-base font-normal text-gray-500 dark:text-gray-400">
            {h.what}
          </div>
        </>
      ))}
    </li>
  );
};

const experience: TimelineEntryProps[] = [
  {
    as: "Director of Engineering",
    at: "Kariera Group",
    logo: KarieraLogo,
    logoClasses: "bg-white",
    start: new Date("2023-11-01T12:00:00.000Z"),
    what: (
      <p className="text-justify">
        In 2023, I started switching into a less team oriented role, handed over
        the Tech Lead role to another team member and started working towards
        building a second team from the ground up. Together with both teams, we
        are currently working on evolving our technology and bringing in more
        sophisticated features to our platform while maintaining a very strong
        focus on the quality of our code and the reliability of our services.
      </p>
    ),
    link: "https://www.karieragroup.com/",
    technologies: [
      {
        link: "https://nodejs.org/",
        icon: NodeJS,
        name: "NodeJS",
      },
      {
        link: "https://nestjs.com/",
        icon: NestJS,
        name: "NestJS",
      },
      {
        link: "https://www.postgresql.org/",
        icon: PostgreSQL,
        name: "PostgreSQL",
      },
      {
        link: "https://nextjs.org/",
        icon: NextJS,
        name: "NextJS",
      },
      {
        link: "https://kubernetes.io/",
        icon: Kubernetes,
        name: "Kubernetes",
      },
    ],
    history: [
      {
        as: "Tech Lead",
        end: new Date("2023-11-01T12:00:00.000Z"),
        start: new Date("2022-07-01T12:00:00.000Z"),
        what: (
          <p className="text-justify">
            Not much later on, I assumed the role of Tech Lead. My main focus
            was to lead the development of the backend services and to help the
            team to build a scalable and reliable platform. I was also
            responsible for the architecture and the design of the backend
            services and I was working closely with the product team to
            understand the business requirements and to translate them into
            technical requirements.
          </p>
        ),
      },
      {
        as: "Senior Backend Engineer",
        end: new Date("2022-07-01T12:00:00.000Z"),
        start: new Date("2022-01-15T12:00:00.000Z"),
        what: (
          <p className="text-justify">
            In 2022, I joined Kariera Group as a Senior Backend Engineer. From
            the beginning my role was to contribute on the most challenging and
            not so clearly defined parts of the product development. I took as
            many features as possible in my own hands and lead them to
            completion in the most rapid and efficient way.
          </p>
        ),
      },
    ],
  },
  {
    as: "Director of Engineering",
    at: "Centaur Analytics",
    logo: CentaurLogo,
    logoClasses: `bg-[#3a3a3c]`,
    end: new Date("2022-01-15T12:00:00.000Z"),
    start: new Date("2021-03-01T12:00:00.000Z"),
    what: (
      <>
        <p className="text-justify">
          In 2021, I became Centaur's Director Of Engineering in charge of
          leading the Centaur's R&D department. I lead the Product Development
          process and orchestrated the entire team's task workflow.
        </p>
        <br />
        <p className="text-justify">
          With the help of our team, I started scaling our department by adding
          more members to it and I worked closely with all team leads to make
          sure we identify and understand any personal or team problem and try
          to resolve it as fast as possible.
        </p>
        <br />
        <p className="text-justify">
          Finally, as I was already experienced with Centaur's cloud
          infrastructure I started working with our DevOps team to identify and
          resolve cluster and deployment issues. To make our cloud more stable
          and easier to monitor and at the same time build my DevOps knowledge,
          I started upgrading our technology to use more modern tools and
          versions and moved our cluster from self-managed to provider-managed.
        </p>
      </>
    ),
    link: "https://www.centaur.ag/",
    technologies: [
      {
        link: "https://nodejs.org/",
        icon: NodeJS,
        name: "NodeJS",
      },
      {
        link: "https://loopback.io/lb3",
        icon: Loopback,
        name: "Loopback",
      },
      {
        link: "https://www.mongodb.com/",
        icon: MongoDB,
        name: "MongoDB",
      },
      {
        link: "https://angularjs.org/",
        icon: AngularJS,
        name: "AngularJS",
      },
      {
        link: "https://kubernetes.io/",
        icon: Kubernetes,
        name: "Kubernetes",
      },
      {
        link: "https://www.zephyrproject.org/",
        icon: Zephyr,
        name: "ZephyrOS",
      },
    ],
    history: [
      {
        as: "Senior Software Engineer",
        end: new Date("2021-03-01T12:00:00.000Z"),
        start: new Date("2018-09-01T12:00:00.000Z"),
        what: (
          <>
            <p className="text-justify">
              In 2018, I became a senior software engineer and leader of
              Centaur’s embedded team and in parallel I was supporting the web
              team by taking some load off of their hands when a critical
              deadline approached. This allowed me to rapidly create truly
              end-to-end solutions, ranging from the embedded device to the
              client application.
            </p>
            <br />
            <p className="text-justify">
              I was also responsible for managing the backlog, coordinating the
              team, and interviewing/training new team members.
            </p>
            <br />
            <p className="text-justify">
              Occasionally, on the side, I was supporting the field engineers,
              and sometimes I directly communicated with the clients to resolve
              their issues.
            </p>
          </>
        ),
      },
      {
        as: "Software Engineer",
        end: new Date("2018-09-01T12:00:00.000Z"),
        start: new Date("2016-07-01T12:00:00.000Z"),
        what: (
          <>
            <p className="text-justify">
              In 2016 I joined the web app team, as a full-stack developer, to
              work with Centaur’s cloud services. My responsibilities included
              both back-end and front-end development, but I focused more on the
              back-end working with its architecture and migrating from monolith
              to microservices to build a more scalable cloud infrastructure.
            </p>
            <br />
            <p className="text-justify">
              After my first year at centaur, I started working with IoT devices
              to support the embedded team. I initially participated as a
              secondary developer for the software of the IP-enabled devices but
              I quickly took the lead of all the software and firmware layers
              for such devices.
            </p>
          </>
        ),
      },
    ],
  },
];

const education: TimelineEntryProps[] = [
  {
    as: "M.Sc.",
    at: "University of Thessaly",
    logo: UthLogo,
    logoClasses: "bg-white",
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
          while at the same time, I started my first steps as a web developer by
          building various web applications. Later, I focused on embedded
          systems and ad hoc wireless sensor networks, which allowed me to enter
          the IoT world and build end-to-end solutions.
        </p>
      </>
    ),
    link: "https://uth.gr",
    skipDuration: true,
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full flex flex-col justify-center items-center max-w-xl">
        <section className="p-8 flex flex-col sm:flex-row justify-start sm:justify-center items-center gap-4 sm:gap-8 sm:my-8">
          <div className="flex flex-col justify-center w-fit h-fit">
            <Avatar className="h-36 w-36">
              <AvatarImage src={Me} />
              <AvatarFallback>NO</AvatarFallback>
            </Avatar>
            <div className="flex flex-row justify-around mt-4">
              <a href="https://github.com/nikooiko" target="_blank">
                <Github size="32" />
              </a>
              <a href="https://medium.com/@nikoikonomou92" target="_blank">
                <svg viewBox="0 0 1043.63 592.71" className="w-8 h-8">
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nikos-oikonomou/"
                target="_blank"
              >
                <Linkedin size="32" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 h-fit">
            <h1 className="text-xl">
              Hello I'm <b>Nikos Oikonomou</b>!
            </h1>
            <p className="text-justify">
              I'm an seasoned software engineer with a strong background in Web
              Development and IoT. I'm more focused on the back-end but I like
              to contribute to any part of the stack. I'm currently working as a
              Director of Engineering leading the engineering teams of Kariera
              Group, a global HR solution provider.
            </p>
            <Button asChild className="mt-2">
              <a
                href="https://www.linkedin.com/in/nikos-oikonomou/"
                target="_blank"
              >
                GET IN TOUCH
              </a>
            </Button>
          </div>
        </section>
        <section className="p-4 pr-8">
          <h2 className="text-2xl font-bold py-2">Work Experience</h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4">
            {experience.map((e, i) => (
              <TimelineEntry key={i} {...e} />
            ))}
          </ol>
          <h2 className="text-2xl font-bold py-2 mt-8">Education</h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4">
            {education.map((e, i) => (
              <TimelineEntry key={i} {...e} />
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Nikos Oikonomou</title>;
