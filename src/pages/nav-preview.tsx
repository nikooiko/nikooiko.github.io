import { cn } from "@/lib/utils";
import { Link } from "gatsby";
import * as React from "react";
import { ChangeTheme } from "@/components/ChangeTheme";
import { ThemeProvider } from "@/components/ThemeProvider";

const links = [
  { href: "/", label: "About" },
  { href: "/articles/", label: "Articles" },
  { href: "/projects/", label: "Projects" },
];

const activeHref = "/projects/";

// 1. Dot separators
const NavDotSeparators: React.FC = () => (
  <div className="flex p-2 justify-between items-center gap-2 w-full border-b border-stone-200 dark:border-stone-700 max-w-2xl">
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
              activeHref === link.href
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
);

// 2. Tab style (bottom border indicator)
const NavTabStyle: React.FC = () => (
  <div className="flex p-2 justify-between items-center gap-2 w-full border-b border-stone-200 dark:border-stone-700 max-w-2xl">
    <div className="flex items-center gap-1">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            "py-2 px-3 text-sm font-medium transition-colors relative",
            activeHref === link.href
              ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
              : "text-muted-foreground hover:text-primary hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
    <ChangeTheme />
  </div>
);

// 3. Small caps + tracking
const NavSmallCaps: React.FC = () => (
  <div className="flex p-2 justify-between items-center gap-2 w-full border-b border-stone-200 dark:border-stone-700 max-w-2xl">
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            "py-2 text-xs tracking-widest uppercase font-semibold transition-colors",
            activeHref === link.href
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
    <ChangeTheme />
  </div>
);

// 4. Increased spacing + divider before theme toggle
const NavSpacedDivider: React.FC = () => (
  <div className="flex p-2 justify-between items-center w-full border-b border-stone-200 dark:border-stone-700 max-w-2xl">
    <div className="flex items-center gap-5">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            "font-medium py-2 text-sm transition-colors",
            activeHref === link.href
              ? "text-primary underline underline-offset-4 decoration-2"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
    <div className="flex items-center gap-3">
      <div className="w-px h-5 bg-stone-200 dark:bg-stone-700" />
      <ChangeTheme />
    </div>
  </div>
);

const NavPreviewPage: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <main className="min-h-screen bg-stone-50 dark:bg-stone-900 flex flex-col items-center gap-10 py-10 px-4">
        <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
          Navbar Style Preview
        </h1>
        <p className="text-sm text-muted-foreground -mt-6">
          "Projects" is set as the active link in all variants.
        </p>

        {[
          { label: "1. Dot separators", Component: NavDotSeparators },
          { label: "2. Tab style", Component: NavTabStyle },
          { label: "3. Small caps + tracking", Component: NavSmallCaps },
          { label: "4. Spaced + divider before toggle", Component: NavSpacedDivider },
        ].map(({ label, Component }) => (
          <div key={label} className="w-full max-w-2xl flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              {label}
            </span>
            <div className="border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
              <Component />
            </div>
          </div>
        ))}

        <p className="text-xs text-stone-400 mt-4">
          Delete <code>src/pages/nav-preview.tsx</code> once you have decided.
        </p>
      </main>
    </ThemeProvider>
  );
};

export default NavPreviewPage;
