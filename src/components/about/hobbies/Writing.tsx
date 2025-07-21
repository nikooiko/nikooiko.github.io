import { NotebookPen } from "lucide-react";
import React from "react";

export const Writing: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg shadow dark:shadow-lg bg-card p-2">
      <div className="flex flex-row gap-1 items-center">
        <NotebookPen className="w-8" />
        <h3 className="text-xl pr-1">
          <a href="/articles" className="hover:underline">
            Writing
          </a>
        </h3>
      </div>
      <p className="text-sm text-muted-foreground mt-1 px-1">
        Sharing insights on software engineering, leadership, and technology
        through technical articles.
      </p>
    </div>
  );
};
