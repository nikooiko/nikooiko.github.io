import { cn } from "@/lib/utils";
import { Link } from "gatsby";
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
  ];
  return (
    <main className="flex flex-col justify-center items-center w-full h-full bg-stone-50 dark:bg-stone-900">
      <ThemeProvider defaultTheme="light">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex p-2 justify-between items-center gap-2 w-full border-b border-divider max-w-xl">
            <div className="flex gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "font-medium py-2",
                    activePath === link.href
                      ? "text-primary underline"
                      : "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <ChangeTheme />
          </div>
          {children}
        </div>
      </ThemeProvider>
    </main>
  );
};
