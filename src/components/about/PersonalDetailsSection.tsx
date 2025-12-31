import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import * as React from "react";
import Me from "../../images/me.jpeg";

export const PersonalDetailsSection: React.FC = () => {
  return (
    <section className="p-4 flex flex-col sm:flex-row justify-start sm:justify-center items-center gap-4 sm:gap-8 max-w-xl">
      <div className="flex flex-col justify-center w-fit h-fit">
        <Avatar className="h-36 w-36">
          <AvatarImage src={Me} alt="Me" />
          <AvatarFallback>Me</AvatarFallback>
        </Avatar>
        <div className="flex flex-row justify-around mt-4">
          <a
            href="https://github.com/nikooiko"
            target="_blank"
            arial-label="Navigate to github page"
          >
            <Github size="32" aria-label="github icon" />
          </a>
          <a
            href="https://nikooiko.medium.com"
            target="_blank"
            arial-label="Navigate to medium.com page"
            className="w-8 h-8 dark:text-white"
          >
            <svg
              viewBox="0 0 1043.63 592.71"
              className="w-8 h-8"
              aria-label="medium.com icon"
              fill="none"
            >
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <path
                    fill="currentColor"
                    d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nikos-oikonomou/"
            target="_blank"
            arial-label="Navigate to linkedin page"
          >
            <Linkedin size="32" aria-label="linkedin icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-fit">
        <h1 className="text-xl">
          Hello I'm <b>Nikos Oikonomou</b>!
        </h1>
        <p className="text-justify">
          I'm a <b>Software Engineer</b> with over a decade of experience
          building scalable software solutions. I specialize in{" "}
          <b>backend development</b> and <b>distributed systems</b>, with a
          passion for
          <b> IoT platforms</b> and <b>cloud infrastructure</b>. Currently
          leading engineering teams at Kariera Group, I focus on delivering
          high-impact solutions that scale from startup to enterprise.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <Button asChild>
            <a
              href="https://www.linkedin.com/in/nikos-oikonomou/"
              target="_blank"
            >
              Get in touch
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/CV.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
