import { cn } from "@/lib/utils";
import { Link } from "gatsby";
import { Github, Linkedin } from "lucide-react";
import * as React from "react";

import { ChangeTheme } from "./ChangeTheme";
import { ThemeProvider } from "./ThemeProvider";

export const Layout: React.FC<{
  children: React.ReactNode;
  activePath: string;
}> = ({ children, activePath }) => {
  const links = [
    { href: "/", label: "About" },
    { href: "/articles/", label: "Articles" },
    { href: "/projects/", label: "Projects" },
  ];
  return (
    <main className="flex flex-col justify-center items-center w-full h-full bg-stone-50 dark:bg-stone-900">
      <ThemeProvider defaultTheme="light">
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="flex p-2 justify-between items-center gap-2 w-full border-b border-divider max-w-2xl">
            <div className="flex items-center gap-1">
              {links.map((link, i) => (
                <React.Fragment key={link.href}>
                  {i > 0 && (
                    <span className="text-stone-300 dark:text-stone-600 select-none px-0.5">
                      {"\u00B7"}
                    </span>
                  )}
                  <Link
                    to={link.href}
                    className={cn(
                      "font-medium py-2 px-1",
                      activePath === link.href
                        ? "text-primary underline"
                        : "text-muted-foreground transition-colors hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
            <ChangeTheme />
          </div>
          <div className="flex-1 w-full flex flex-col items-center">
            {children}
          </div>
          <footer className="w-full max-w-2xl px-4 py-6 mt-8 border-t border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-stone-500 dark:text-stone-400">
            <span>© {new Date().getFullYear()} Nikos Oikonomou</span>
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/nikooiko"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikos-oikonomou/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://nikooiko.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <svg
                  viewBox="0 0 1043.63 592.71"
                  className="w-[18px] h-[18px]"
                  aria-label="medium.com icon"
                  fill="currentColor"
                >
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </main>
  );
};
