import { Luggage } from "lucide-react";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { cn } from "@/lib/utils";
import AT from "../../../images/countries/at.inline.svg";
import BE from "../../../images/countries/be.inline.svg";
import BG from "../../../images/countries/bg.inline.svg";
import CH from "../../../images/countries/ch.inline.svg";
import DE from "../../../images/countries/de.inline.svg";
import FI from "../../../images/countries/fi.inline.svg";
import FR from "../../../images/countries/fr.inline.svg";
import GB from "../../../images/countries/gb.inline.svg";
import GR from "../../../images/countries/gr.inline.svg";
import HU from "../../../images/countries/hu.inline.svg";
import IT from "../../../images/countries/it.inline.svg";
import MK from "../../../images/countries/mk.inline.svg";
import MT from "../../../images/countries/mt.inline.svg";
import NL from "../../../images/countries/nl.inline.svg";
import NO from "../../../images/countries/no.inline.svg";
import PL from "../../../images/countries/pl.inline.svg";
import RO from "../../../images/countries/ro.inline.svg";
import SE from "../../../images/countries/se.inline.svg";
import SI from "../../../images/countries/si.inline.svg";
import SK from "../../../images/countries/sk.inline.svg";
import HR from "../../../images/countries/hr.inline.svg";
import TR from "../../../images/countries/tr.inline.svg";
import US from "../../../images/countries/us.inline.svg";

// ISO 3166-1 numeric code → country name
const VISITED: Record<string, string> = {
  "300": "Greece",
  "840": "USA",
  "040": "Austria",
  "056": "Belgium",
  "100": "Bulgaria",
  "276": "Germany",
  "246": "Finland",
  "348": "Hungary",
  "380": "Italy",
  "807": "North Macedonia",
  "528": "Netherlands",
  "616": "Poland",
  "642": "Romania",
  "752": "Sweden",
  "756": "Switzerland",
  "703": "Slovakia",
  "470": "Malta",
  "826": "UK",
  "792": "Turkey",
  "250": "France",
  "578": "Norway",
  "705": "Slovenia",
  "191": "Croatia",
};

const countries = [
  { name: "Greece", id: "300", Flag: GR },
  { name: "USA", id: "840", Flag: US },
  { name: "Austria", id: "040", Flag: AT },
  { name: "Belgium", id: "056", Flag: BE },
  { name: "Bulgaria", id: "100", Flag: BG },
  { name: "Germany", id: "276", Flag: DE },
  { name: "Finland", id: "246", Flag: FI },
  { name: "Hungary", id: "348", Flag: HU },
  { name: "Italy", id: "380", Flag: IT },
  { name: "North Macedonia", id: "807", Flag: MK },
  { name: "Netherlands", id: "528", Flag: NL },
  { name: "Poland", id: "616", Flag: PL },
  { name: "Romania", id: "642", Flag: RO },
  { name: "Sweden", id: "752", Flag: SE },
  { name: "Switzerland", id: "756", Flag: CH },
  { name: "Slovakia", id: "703", Flag: SK },
  { name: "Malta", id: "470", Flag: MT },
  { name: "UK", id: "826", Flag: GB },
  { name: "Turkey", id: "792", Flag: TR },
  { name: "France", id: "250", Flag: FR },
  { name: "Norway", id: "578", Flag: NO },
  { name: "Slovenia", id: "705", Flag: SI },
  { name: "Croatia", id: "191", Flag: HR },
];

type WorldMapProps = {
  selected?: string | null;
  onSelect?: (id: string | null) => void;
};

const WorldMap: React.FC<WorldMapProps> = ({ selected = null, onSelect }) => {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <div className="relative w-full">
      <ComposableMap
        projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
        width={800}
        height={380}
        className="w-full"
      >
        <Geographies geography="/countries-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = String(geo.id);
              const isVisited = id in VISITED;
              const isSelected = selected === id;
              const isHovered = hovered === id;

              let fill = "hsl(var(--muted))";
              if (isSelected) fill = "#f59e0b"; // amber-500
              else if (isVisited) fill = "hsl(var(--primary))";
              if (isHovered && isVisited && !isSelected)
                fill = "hsl(var(--primary) / 0.7)";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="hsl(var(--background))"
                  strokeWidth={0.5}
                  onClick={
                    isVisited
                      ? () => onSelect?.(isSelected ? null : id)
                      : undefined
                  }
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    default: {
                      outline: "none",
                      cursor: isVisited ? "pointer" : "default",
                    },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export const Traveling: React.FC = () => {
  const [selected, setSelected] = React.useState<string | null>(null);

  const toggle = (id: string) =>
    setSelected((prev) => (prev === id ? null : id));

  return (
    <div className="flex flex-col rounded-lg shadow dark:shadow-lg bg-card p-2">
      <div className="flex flex-row gap-1 items-center">
        <Luggage className="w-8" />
        <h3 className="text-xl pr-1">Traveling ({countries.length} of 195)</h3>
      </div>
      <p className="text-sm text-muted-foreground mt-1 px-1">
        Exploring diverse cultures and landscapes across Europe and North
        America.
      </p>
      <WorldMap selected={selected} onSelect={setSelected} />
      <div className="flex flex-wrap gap-1 mt-1 px-1">
        {countries.map(({ name, id, Flag }) => (
          <div key={name} className="relative">
            <button
              aria-label={name}
              onClick={() => toggle(id)}
              className={cn(
                "rounded transition-all",
                selected === id
                  ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                  : selected !== null
                  ? "opacity-40 hover:opacity-100"
                  : "hover:opacity-80"
              )}
            >
              <Flag className="h-6 block" />
            </button>
            {selected === id && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded text-xs font-medium bg-popover text-popover-foreground border shadow-sm whitespace-nowrap pointer-events-none">
                {name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
