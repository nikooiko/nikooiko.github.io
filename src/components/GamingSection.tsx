import {
  BuildingIcon,
  ClockIcon,
  Gamepad2,
  Gem,
  HeartIcon,
} from "lucide-react";
import React from "react";

const items = [
  {
    icon: HeartIcon,
    title: "Favorite Genre",
    description: "RPGs",
  },
  {
    icon: Gem,
    title: "Favorite Game",
    description: "Dark Souls 1",
  },
  {
    icon: BuildingIcon,
    title: "Favorite Company",
    description: "FromSoftware",
  },
  {
    icon: ClockIcon,
    title: "Most Played Game",
    description: "Skyrim (500+ hours)",
  },
];

export const GamingSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-1 items-center">
        <Gamepad2 className="w-8" />
        <h3 className="text-xl pr-1">Gaming</h3>
      </div>
      <div className="flex flex-wrap gap-2 px-2">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col rounded-lg shadow p-2">
            <div className="flex gap-2 py-1 items-center">
              <item.icon className="h-5 w-5 text-muted-foreground" />
              <h4 className="font-semibold">{item.title}</h4>
            </div>
            <div className="flex gap-2 items-center">
              <item.icon className="h-5 w-5 invisible" />
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
