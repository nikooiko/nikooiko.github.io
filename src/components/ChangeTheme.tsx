import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import * as React from "react";
import { useTheme } from "./ThemeProvider";

export const ChangeTheme: React.FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Change theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Change theme</span>
    </Button>
  );
};
