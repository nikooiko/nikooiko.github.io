import { OrderDirection } from "@/components/OrderByButton";
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
          <StaticImage
            src="../../images/technologies/nextjs_logo.png"
            alt="nextjs"
            {...technologiesIconProps}
          />
        ),
        name: "NextJS",
      },
      {
        link: "https://kafka.apache.org/",
        icon: (
          <StaticImage
            src="../../images/technologies/kafka_logo.png"
            alt="kafka"
            {...technologiesIconProps}
          />
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
        as: "Principal Engineer",
        start: new Date("2023-11-01T12:00:00.000Z"),
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
      },
      {
        as: "Tech Lead",
        end: new Date("2023-11-01T12:00:00.000Z"),
        start: new Date("2022-07-15T12:00:00.000Z"),
        what: (
          <p className="text-justify">
            Not much later on, I assumed the role of Tech Lead. My main focus
            was to lead the development of the backend services and help the
            team build a scalable and reliable platform. I was also responsible
            for the architecture and the design of the backend services and I
            was working closely with the product team to understand the business
            requirements and translate them into technical requirements.
          </p>
        ),
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
      },
    ],
  },
  {
    at: "Centaur Analytics",
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
          <StaticImage
            src="../../images/technologies/lb_logo.png"
            alt="lb"
            {...technologiesIconProps}
          />
        ),
        name: "Loopback",
      },
      {
        link: "https://www.mongodb.com/",
        icon: (
          <StaticImage
            src="../../images/technologies/mongodb_logo.png"
            alt="mongodb"
            {...technologiesIconProps}
          />
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
              to make sure we identify and understand any personal or team
              problem and try to resolve it as fast as possible.
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
      },
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
            console.log("change-order", order);
            setExperienceOrder(order);
          }}
        />
      </div>
      <ol
        className={
          "relative border-s border-gray-200 dark:border-gray-700 ml-4 pr-4 sm:pr-0"
        }
      >
        {finalExperience.map((e, i) => (
          <TimelineEntry key={`exp-${i}`} {...e} />
        ))}
      </ol>
    </section>
  );
};
