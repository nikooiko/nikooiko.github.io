import { NotebookPen } from "lucide-react";
import React from "react";

export const Writing: React.FC = () => {
  return (
    <div className="flex flex-row gap-1 items-center rounded-lg shadow dark:shadow-lg bg-card p-2">
      <NotebookPen className="w-8" />
      <h3 className="text-xl pr-1">
        <a href="/articles" className="hover:underline">
          Writing
        </a>
      </h3>
    </div>
  );
};
