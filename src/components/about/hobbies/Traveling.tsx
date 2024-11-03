import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Luggage } from "lucide-react";
import React from "react";
import AT from "../../../images/countries/at.inline.svg";
import BE from "../../../images/countries/be.inline.svg";
import BG from "../../../images/countries/bg.inline.svg";
import CH from "../../../images/countries/ch.inline.svg";
import DE from "../../../images/countries/de.inline.svg";
import FI from "../../../images/countries/fi.inline.svg";
import GR from "../../../images/countries/gr.inline.svg";
import HU from "../../../images/countries/hu.inline.svg";
import IT from "../../../images/countries/it.inline.svg";
import MK from "../../../images/countries/mk.inline.svg";
import NL from "../../../images/countries/nl.inline.svg";
import PL from "../../../images/countries/pl.inline.svg";
import RO from "../../../images/countries/ro.inline.svg";
import SE from "../../../images/countries/se.inline.svg";
import SK from "../../../images/countries/sk.inline.svg";
import US from "../../../images/countries/us.inline.svg";

const countries = [
  {
    name: "Greece",
    Flag: GR,
  },
  {
    name: "USA",
    Flag: US,
  },
  {
    name: "Austria",
    Flag: AT,
  },
  {
    name: "Belgium",
    Flag: BE,
  },
  {
    name: "Bulgaria",
    Flag: BG,
  },
  {
    name: "Germany",
    Flag: DE,
  },
  {
    name: "Finland",
    Flag: FI,
  },
  {
    name: "Hungary",
    Flag: HU,
  },
  {
    name: "Italy",
    Flag: IT,
  },
  {
    name: "North Macedonia",
    Flag: MK,
  },
  {
    name: "Netherlands",
    Flag: NL,
  },
  {
    name: "Poland",
    Flag: PL,
  },
  {
    name: "Romania",
    Flag: RO,
  },
  {
    name: "Sweden",
    Flag: SE,
  },
  {
    name: "Switzerland",
    Flag: CH,
  },
  {
    name: "Slovakia",
    Flag: SK,
  },
];

export const Traveling: React.FC = () => {
  return (
    <>
      <div className="flex flex-row gap-1 items-center">
        <Luggage className="w-8" />
        <h3 className="text-xl pr-1">Traveling ({countries.length} of 195)</h3>
      </div>
      <div className="flex flex-wrap gap-1 pt-1 pl-1">
        {countries.map(({ name, Flag }) => (
          <TooltipProvider key={name}>
            <Tooltip>
              <TooltipTrigger aria-label="Show country name">
                <Flag className="h-6" />
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="py-0 px-2 dark:bg-gray-500 dark:text-white"
              >
                {name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </>
  );
};
