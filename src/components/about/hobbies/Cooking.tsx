import { ChefHat } from "lucide-react";
import React from "react";

export const Cooking: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg shadow dark:shadow-lg bg-card p-2">
      <div className="flex flex-row gap-1 items-center">
        <ChefHat className="w-8" />
        <h3 className="text-xl pr-1">Cooking</h3>
      </div>
      <p className="text-sm text-muted-foreground mt-1 px-1">
        As a Greek, I'm well-versed in Mediterranean cuisine, but my true
        passion lies in Italian cooking—especially crafting traditional dishes
        from scratch.
      </p>
    </div>
  );
};
