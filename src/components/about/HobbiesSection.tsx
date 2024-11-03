import React from "react";
import { Cooking } from "./hobbies/Cooking";
import { Gaming } from "./hobbies/Gaming";
import { Traveling } from "./hobbies/Traveling";
import { Writing } from "./hobbies/Writing";

export const HobbiesSection: React.FC = () => {
  return (
    <section className="px-4 py-2 max-w-xl">
      <h2 className="text-2xl font-bold py-2">Hobbies</h2>
      <Traveling />
      <Cooking />
      <Gaming />
      <Writing />
    </section>
  );
};
