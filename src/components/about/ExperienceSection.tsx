import { OrderDirection } from "@/components/OrderByButton";
import { cn } from "@/lib/utils";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { OrderByButton } from "../OrderByButton";
import { TimelineEntry, TimelineEntryProps } from "../TimelineEntry";

const experienceLogoProps = {
  className: "rounded-full",
  width: 48,
};
const technologiesIconProps = {
  className: "rounded-full w-12 sm:w-16",
  width: 64,
};
const experience: TimelineEntryProps[] = [
  {
    at: "Kariera Group",
    industry: "HR Solutions",
    logo: (
      <StaticImage
        src="../../images/kariera_group_logo.png"
        alt="kariera group"
        {...experienceLogoProps}
      />
    ),
    logoClasses: "bg-white",
    link: "https://www.karieragroup.com/",
    technologies: [
      {
        link: "https://nodejs.org/",
        icon: (
          <StaticImage
            src="../../images/technologies/nodejs_logo.png"
            alt="NodeJS"
            {...technologiesIconProps}
          />
        ),
        name: "NodeJS",
      },
      {
        link: "https://nestjs.com/",
        icon: (
          <StaticImage
            src="../../images/technologies/nestjs_logo.png"
            alt="NestJS"
            {...technologiesIconProps}
          />
        ),
        name: "NestJS",
      },
      {
        link: "https://www.postgresql.org/",
        icon: (
          <StaticImage
            src="../../images/technologies/postgres_logo.png"
            alt="postgres"
            {...technologiesIconProps}
          />
        ),
        name: "PostgreSQL",
      },
      {
        link: "https://nextjs.org/",
        icon: (
          <div className="dark:m-2 dark:bg-stone-100 rounded-full">
            <StaticImage
              src="../../images/technologies/nextjs_logo.png"
              alt="nextjs"
              {...technologiesIconProps}
              className={cn(
                technologiesIconProps.className,
                "dark:w-8 sm:dark:w-12"
              )}
            />
          </div>
        ),
        name: "NextJS",
      },
      {
        link: "https://kafka.apache.org/",
        icon: (
          <div className="dark:m-2 dark:p-1 dark:bg-stone-100 rounded-full">
            <StaticImage
              src="../../images/technologies/kafka_logo.png"
              alt="kafka"
              {...technologiesIconProps}
              className={cn(
                technologiesIconProps.className,
                "dark:w-6 sm:dark:w-10"
              )}
            />
          </div>
        ),
        name: "Kafka",
      },
      {
        link: "https://www.elastic.co/",
        icon: (
          <StaticImage
            src="../../images/technologies/elastic_logo.png"
            alt="elastic"
            {...technologiesIconProps}
          />
        ),
        name: "Elastic",
      },
      {
        link: "https://kubernetes.io/",
        icon: (
          <StaticImage
            src="../../images/technologies/k8s_logo.png"
            alt="k8s"
            {...technologiesIconProps}
          />
        ),
        name: "Kubernetes",
      },
    ],
    history: [
      {
        as: "VP of Engineering",
        start: new Date("2025-01-01T12:00:00.000Z"),
        what: (
          <p>
            Led the shift from individual technical contribution to
            organizational leadership, overseeing multiple squads, driving
            engineering vision, and aligning technical strategy with product and
            business goals.
          </p>
        ),
        hightlights: [
          <span>
            Formed a{" "}
            <b>
              <u>cross-squad leadership structure</u>
            </b>{" "}
            by empowering senior engineers as Tech Leads and establishing a
            third{" "}
            <b>
              <u>innovation-focused team</u>
            </b>{" "}
            with{" "}
            <b>
              <u>architectural oversight</u>
            </b>{" "}
            responsibilities, overseeing{" "}
            <b>
              <u>3 engineering squads</u>
            </b>{" "}
            and{" "}
            <b>
              <u>15+ developers</u>
            </b>
            .
          </span>,
          <span>
            Collaborated closely with{" "}
            <b>
              <u>Product and Design leadership</u>
            </b>{" "}
            to align{" "}
            <b>
              <u>roadmap priorities</u>
            </b>{" "}
            with long-term{" "}
            <b>
              <u>technical strategy</u>
            </b>
            , balancing{" "}
            <b>
              <u>speed</u>
            </b>
            ,{" "}
            <b>
              <u>maintainability</u>
            </b>
            , and{" "}
            <b>
              <u>scalability</u>
            </b>{" "}
            across{" "}
            <b>
              <u>multiple high-impact projects</u>
            </b>
            .
          </span>,
        ],
      },
      {
        as: "Principal Engineer",
        start: new Date("2023-11-01T12:00:00.000Z"),
        end: new Date("2025-01-01T12:00:00.000Z"),
        what: (
          <p>
            Stepped back from direct team leadership to scale the organization,
            building a second team from the ground up while keeping a cross-team
            focus on code quality, platform evolution, and service reliability.
          </p>
        ),
        hightlights: [
          <span>
            Established{" "}
            <b>
              <u>best practice guidelines</u>
            </b>{" "}
            (GitOps, naming conventions, code structure) for the engineering
            team and collaborated with tech leads to{" "}
            <b>
              <u>
                maintain a unified architecture and resolve workflow challenges
              </u>
            </b>
            .
          </span>,
          <span>
            Led recruiting{" "}
            <b>
              <u>tech task preparation</u>
            </b>{" "}
            and managed{" "}
            <b>
              <u>hiring</u>
            </b>{" "}
            to expand the team.
          </span>,
          <span>
            Oversaw the{" "}
            <b>
              <u>modernization of internal systems</u>
            </b>{" "}
            and accelerated the adoption of{" "}
            <b>
              <u>security</u>
            </b>
            , <b>SEO</b>, and{" "}
            <b>
              <u>AI-related initiatives</u>
            </b>{" "}
            across the platform.
          </span>,
        ],
      },
      {
        as: "Tech Lead",
        end: new Date("2023-11-01T12:00:00.000Z"),
        start: new Date("2022-07-15T12:00:00.000Z"),
        what: (
          <p>
            Led backend service development and architecture, translating
            business requirements into technical specifications while guiding
            the team toward a scalable and reliable platform.
          </p>
        ),
        hightlights: [
          <span>
            <b>
              <u>Mentored</u>
            </b>{" "}
            team members to take on more{" "}
            <b>
              <u>responsibility</u>
            </b>
            , emphasizing{" "}
            <b>
              <u>code reviews</u>
            </b>{" "}
            and{" "}
            <b>
              <u>constructive feedback</u>
            </b>{" "}
            for team growth.
          </span>,
          <span>
            Created{" "}
            <b>
              <u>technical documentation</u>
            </b>{" "}
            for{" "}
            <b>
              <u>KPI-critical features</u>
            </b>{" "}
            to support productive review and evaluation cycles for upcoming
            functionalities.
          </span>,
        ],
      },
      {
        as: "Senior Backend Engineer",
        end: new Date("2022-07-15T12:00:00.000Z"),
        start: new Date("2022-01-15T12:00:00.000Z"),
        what: (
          <p>
            Owned the most challenging and undefined areas of product
            development, delivering mission-critical features and third-party
            integrations quickly and efficiently.
          </p>
        ),
        hightlights: [
          <span>
            Led{" "}
            <b>
              <u>mission-critical</u>
            </b>{" "}
            feature development, managing{" "}
            <b>
              <u>tight deadlines</u>
            </b>{" "}
            and{" "}
            <b>
              <u>third-party integration</u>
            </b>
            .
          </span>,
          <span>
            Built{" "}
            <b>
              <u>core search functionality</u>
            </b>{" "}
            using{" "}
            <b>
              <u>Azure Cognitive Search</u>
            </b>{" "}
            developed a{" "}
            <b>
              <u>fair scoring system</u>
            </b>
            , established{" "}
            <b>
              <u>regression testing</u>
            </b>
            , and{" "}
            <b>
              <u>documented</u>
            </b>{" "}
            thoroughly for clarity.
          </span>,
        ],
      },
    ],
  },
  {
    at: "Centaur Analytics",
    industry: "AgTech IoT & Analytics",
    logo: (
      <StaticImage
        src="../../images/centaur_logo.png"
        alt="centaur"
        {...experienceLogoProps}
      />
    ),
    logoClasses: `bg-[#3a3a3c]`,
    link: "https://www.centaur.ag/",
    technologies: [
      {
        link: "https://nodejs.org/",
        icon: (
          <StaticImage
            src="../../images/technologies/nodejs_logo.png"
            alt="nodejs"
            {...technologiesIconProps}
          />
        ),
        name: "NodeJS",
      },
      {
        link: "https://loopback.io/lb3",
        icon: (
          <div className="dark:m-2 dark:bg-stone-100 rounded-full">
            <StaticImage
              src="../../images/technologies/lb_logo.png"
              alt="loopback"
              {...technologiesIconProps}
              className={cn(
                technologiesIconProps.className,
                "dark:w-8 sm:dark:w-12"
              )}
            />
          </div>
        ),
        name: "Loopback",
      },
      {
        link: "https://www.mongodb.com/",
        icon: (
          <div className="dark:m-2 dark:bg-stone-100 rounded-full">
            <StaticImage
              src="../../images/technologies/mongodb_logo.png"
              alt="mongodb"
              {...technologiesIconProps}
              className={cn(
                technologiesIconProps.className,
                "dark:w-8 sm:dark:w-12"
              )}
            />
          </div>
        ),
        name: "MongoDB",
      },
      {
        link: "https://angularjs.org/",
        icon: (
          <StaticImage
            src="../../images/technologies/angularjs_logo.png"
            alt="angularjs"
            {...technologiesIconProps}
          />
        ),
        name: "AngularJS",
      },
      {
        link: "https://kubernetes.io/",
        icon: (
          <StaticImage
            src="../../images/technologies/k8s_logo.png"
            alt="k8s"
            {...technologiesIconProps}
          />
        ),
        name: "Kubernetes",
      },
      {
        link: "https://www.zephyrproject.org/",
        icon: (
          <StaticImage
            src="../../images/technologies/zephyr_logo.png"
            alt="zephyr"
            {...technologiesIconProps}
          />
        ),
        name: "ZephyrOS",
      },
    ],
    history: [
      {
        as: "Director of Engineering",
        end: new Date("2022-01-15T12:00:00.000Z"),
        start: new Date("2021-03-01T12:00:00.000Z"),
        what: (
          <p>
            Led the R&D department, scaling the team and streamlining product
            development workflows. Collaborated with DevOps to modernize the
            cloud stack, migrating to a provider-managed Kubernetes cluster for
            improved stability and observability.
          </p>
        ),
        hightlights: [
          <span>
            <b>
              <u>Orchestrated Product Development</u>
            </b>{" "}
            and the department's workflow.
          </span>,
          <span>
            <b>
              <u>Led the hiring process</u>
            </b>
            , added team members, closely{" "}
            <b>
              <u>mentored</u>
            </b>{" "}
            them,{" "}
            <b>
              <u>assisted with solution design</u>
            </b>
            , and{" "}
            <b>
              <u>reviewed their work</u>
            </b>
            .
          </span>,
          <span>
            <b>
              <u>Modernized cloud infrastructure</u>
            </b>{" "}
            by upgrading technology stack and migrating from{" "}
            <b>
              <u>self-managed to provider-managed</u>
            </b>{" "}
            Kubernetes cluster for improved stability and monitoring.
          </span>,
        ],
      },
      {
        as: "Senior Software Engineer",
        end: new Date("2021-03-01T12:00:00.000Z"),
        start: new Date("2018-09-01T12:00:00.000Z"),
        what: (
          <p>
            Led Centaur's embedded team while supporting the web team, building
            end-to-end solutions from firmware to client applications. Managed
            the backlog, coordinated the team, and directly engaged with field
            engineers and clients to resolve issues.
          </p>
        ),
        hightlights: [
          <span>
            Refactored the initial back-end API{" "}
            <b>
              <u>from monolith to microservices architecture</u>
            </b>
            , learning from mistakes to build a{" "}
            <b>
              <u>scalable</u>
            </b>{" "}
            and{" "}
            <b>
              <u>stable distributed system</u>
            </b>
            .
          </span>,

          <span>
            Led the development of a new{" "}
            <b>
              <u>IoT platform</u>
            </b>
            , including low-level{" "}
            <b>
              <u>Linux system development</u>
            </b>
            , sensor management, and{" "}
            <b>
              <u>device-to-device communication</u>
            </b>{" "}
            (e.g.,{" "}
            <b>
              <u>MQTT</u>
            </b>
            ,{" "}
            <b>
              <u>802.15.4</u>
            </b>
            ).
          </span>,

          <span>
            Took initiatives to{" "}
            <b>
              <u>assist the DevOps team</u>
            </b>
            , upgraded third-party tools (e.g.,{" "}
            <b>
              <u>Grafana</u>
            </b>
            ,{" "}
            <b>
              <u>Kibana</u>
            </b>
            ,{" "}
            <b>
              <u>Prometheus</u>
            </b>
            ), and migrated the platform from a{" "}
            <b>
              <u>self-managed K8S cluster</u>
            </b>{" "}
            (AWS+Kops) to{" "}
            <b>
              <u>EKS</u>
            </b>
            .
          </span>,
        ],
      },
      {
        as: "Software Engineer",
        end: new Date("2018-09-01T12:00:00.000Z"),
        start: new Date("2016-09-01T12:00:00.000Z"),
        what: (
          <p>
            Joined as a full-stack developer focused on backend architecture and
            microservices migration. Expanded into IoT device development after
            the first year, quickly taking ownership of all software and
            firmware layers for IP-enabled devices.
          </p>
        ),
        hightlights: [
          <span>
            Designed and developed software from scratch for both{" "}
            <b>
              <u>back-end</u>
            </b>{" "}
            and{" "}
            <b>
              <u>front-end</u>
            </b>
            .
          </span>,

          <span>
            Built complete{" "}
            <b>
              <u>CI/CD procedures</u>
            </b>{" "}
            from scratch using Gitlab CI and Bash, integrating complex build
            systems (e.g.{" "}
            <b>
              <u>Yocto</u>
            </b>
            ).
          </span>,

          <span>
            Developed{" "}
            <b>
              <u>end-to-end solutions</u>
            </b>{" "}
            by taking on entire features to relieve the team{" "}
            <b>
              <u>during critical deadlines</u>
            </b>
            .
          </span>,
        ],
      },
      {
        as: "Software Engineer Intern",
        end: new Date("2016-09-01T12:00:00.000Z"),
        start: new Date("2016-07-01T12:00:00.000Z"),
        what: (
          <p>
            Collaborated with the web team on frontend and backend tasks,
            improving codebase testability, stability, and performance.
          </p>
        ),
      },
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  const [experienceOrder, setExperienceOrder] =
    React.useState<OrderDirection>("desc");
  const finalExperience = React.useMemo(() => {
    return experienceOrder === "desc"
      ? experience.slice()
      : experience
          .slice()
          .reverse()
          .map((e) => ({ ...e, history: e.history.slice().reverse() }));
  }, [experienceOrder]);
  return (
    <section className="px-4 mt-4 max-w-2xl">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold py-2">Work Experience</h2>
        <OrderByButton
          onOrderChange={(order) => {
            setExperienceOrder(order);
          }}
        />
      </div>
      <ol
        className={
          "relative border-s border-stone-200 dark:border-stone-700 ml-4 pr-4 sm:pr-0"
        }
      >
        {finalExperience.map((e, i) => (
          <TimelineEntry key={`exp-${i}`} {...e} />
        ))}
      </ol>
    </section>
  );
};
