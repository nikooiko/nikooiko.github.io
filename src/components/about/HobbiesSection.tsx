import React from "react";
import { Cooking } from "./hobbies/Cooking";
import { Gaming } from "./hobbies/Gaming";
import { Traveling } from "./hobbies/Traveling";
import { Writing } from "./hobbies/Writing";

export const HobbiesSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 px-4 py-2 max-w-xl">
      <h2 className="text-2xl font-bold">Hobbies</h2>
      <Traveling />
      <Gaming />
      <Cooking />
      <Writing />
    </section>
  );
};
