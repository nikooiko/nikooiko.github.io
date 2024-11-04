import { ChefHat } from "lucide-react";
import React from "react";

export const Cooking: React.FC = () => {
  return (
    <div className="flex flex-row gap-1 items-center rounded-lg shadow dark:shadow-lg bg-card p-2 ">
      <ChefHat className="w-8" />
      <h3 className="text-xl pr-1">Cooking</h3>
    </div>
  );
};
