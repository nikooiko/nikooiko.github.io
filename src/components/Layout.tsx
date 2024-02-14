import { cn } from "@/lib/utils";
import * as React from "react";

export const Layout: React.FC<{
  children: React.ReactNode;
  activePath: string;
}> = ({ children, activePath }) => {
  const links = [
    { href: "/", label: "About" },
    { href: "/articles/", label: "Articles" },
  ];
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full flex flex-col justify-center items-center max-w-xl">
        <div className="flex p-2 gap-2 w-full border-b border-divider">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium py-2",
                activePath === link.href
                  ? "text-primary underline"
                  : "text-muted-foreground transition-colors hover:text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
        {children}
      </div>
    </main>
  );
};
