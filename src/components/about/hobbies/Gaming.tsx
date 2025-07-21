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
    description: "Skyrim",
  },
];

export const Gaming: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg shadow dark:shadow-lg bg-card p-2">
      <div className="flex flex-row gap-1 items-center">
        <Gamepad2 className="w-8" />
        <h3 className="text-xl pr-1">Gaming</h3>
      </div>
      <p className="text-sm text-muted-foreground mt-1 px-1">
        Passionate about challenging RPGs and immersive storytelling
        experiences.
      </p>
      <div className="grid grid-cols-2 gap-2 px-1 mt-2 text-sm">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col">
            <div className="flex gap-2 items-center">
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
