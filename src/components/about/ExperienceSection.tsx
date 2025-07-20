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
          <p className="text-justify">
            After serving as Principal Engineer, I transitioned into the role of
            VP of Engineering to lead the company’s growing technical
            organization. My focus shifted from deep technical involvement to
            high-level engineering management, team scalability, and strategic
            alignment with product and business goals. I now oversee multiple
            squads, guide the engineering vision, and ensure operational
            excellence across projects.
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
            responsibilities.
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
          <p className="text-justify">
            In 2023, I started switching into a less team oriented role, handed
            over the Tech Lead role to another team member and started working
            towards building a second team from the ground up. Together with
            both teams, we are currently working on evolving our technology and
            bringing in more sophisticated features to our platform while
            maintaining a very strong focus on the quality of our code and the
            reliability of our services.
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
            Oversaw the <b>modernization of internal systems</b> and accelerated
            the adoption of <b>security</b>, <b>SEO</b>, and{" "}
            <b>AI-related initiatives</b> across the platform.
          </span>,
        ],
      },
      {
        as: "Tech Lead",
        end: new Date("2023-11-01T12:00:00.000Z"),
        start: new Date("2022-07-15T12:00:00.000Z"),
        what: (
          <p className="text-justify">
            Not much later on, I assumed the role of Tech Lead. My main focus
            was to lead the development of the back-end services and help the
            team build a scalable and reliable platform. I was also responsible
            for the architecture and the design of the back-end services and I
            was working closely with the product team to understand the business
            requirements and translate them into technical requirements.
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
          <p className="text-justify">
            In 2022, I joined Kariera Group as a Senior Backend Engineer. From
            the beginning my role was to contribute on the most challenging and
            not so clearly defined parts of the product development. I took as
            many features as possible in my own hands and lead them to
            completion in the most rapid and efficient way.
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
          <>
            <p className="text-justify">
              In 2021, I became Centaur's Director Of Engineering in charge of
              leading the Centaur's R&D department. I lead the Product
              Development process and orchestrated the entire team's task
              workflow.
            </p>
            <br />
            <p className="text-justify">
              With the help of our team, I started scaling our department by
              adding more members to it and I worked closely with all team leads
              to make sure we identified and understood any personal or team
              problem and tried to resolve it as fast as possible.
            </p>
            <br />
            <p className="text-justify">
              Finally, as I was already experienced with Centaur's cloud
              infrastructure I started working with our DevOps team to identify
              and resolve cluster and deployment issues. To make our cloud more
              stable and easier to monitor and at the same time build my DevOps
              knowledge, I started upgrading our technology to use more modern
              tools and versions and moved our cluster from self-managed to
              provider-managed.
            </p>
          </>
        ),
        hightlights: [
          <span>
            <b>
              <u>Orchestrated Product Development</u>
            </b>{" "}
            and the department’s workflow.
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
        ],
      },
      {
        as: "Senior Software Engineer",
        end: new Date("2021-03-01T12:00:00.000Z"),
        start: new Date("2018-09-01T12:00:00.000Z"),
        what: (
          <>
            <p className="text-justify">
              In 2018, I became a senior software engineer and leader of
              Centaur’s embedded team, and in parallel, I was supporting the web
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
              Occasionally, on the side, I supported the field engineers, and
              sometimes I directly communicated with the clients to resolve
              their issues.
            </p>
          </>
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
              After my first year at Centaur, I started working with IoT devices
              to support the embedded team. I initially participated as a
              secondary developer for the software of the IP-enabled devices but
              I quickly took the lead of all the software and firmware layers
              for such devices.
            </p>
          </>
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
          <p className="text-justify">
            I began my career as an intern at Centaur, collaborating with the
            web application team on front-end and back-end tasks. My
            responsibilities included maintaining and enhancing the testability
            of the existing codebase, with a focus on improving stability and
            performance across various lower-priority projects.
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
    <section className="px-4 mt-4 max-w-xl">
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
