import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
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
            href="https://medium.com/@nikoikonomou92"
            target="_blank"
            arial-label="Navigate to medium.com page"
          >
            <svg
              viewBox="0 0 1043.63 592.71"
              className="w-8 h-8"
              aria-label="medium.com icon"
            >
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
          I'm a seasoned software engineer with a strong Web Development and IoT
          background. I'm more focused on the back end but I like contributing
          to any part of the stack. I'm currently a Principal Engineer leading
          the engineering teams of Kariera Group, a global HR solution provider.
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
  );
};
