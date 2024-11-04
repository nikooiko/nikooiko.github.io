import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { format, formatDuration, intervalToDuration } from "date-fns";
import * as React from "react";

export type TimelineEntryProps = {
  link: string;
  logo: React.ReactNode;
  logoClasses?: string;
  at: string;
  industry?: string;
  skipDuration?: boolean;
  technologies?: { link: string; icon: React.ReactNode; name: string }[];
  history: { as: string; start: Date; end?: Date; what: React.ReactNode }[];
};

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  skipDuration,
  at,
  industry,
  logo,
  logoClasses,
  link,
  technologies,
  history,
}) => {
  const { start, end, as, what } = history[0];
  const rest = history.slice(1);
  return (
    <li className="mb-4 ms-8">
      <span
        className={cn(
          `absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 mt-3 bg-stone-200 shadow-lg `,
          logoClasses
        )}
      >
        {logo}
      </span>
      <time className="mb-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-400">
        {format(start, "MMM. yyyy")} -{" "}
        {end ? format(end, "MMM. yyyy") : "Present"}
        {!skipDuration &&
          ` (${formatDuration(
            intervalToDuration({ start: start, end: end ?? new Date() }),
            {
              format: ["months", "years"],
            }
          )})`}
      </time>
      <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
        {as} @{" "}
        <a href={link} className="hover:underline" target="_blank">
          {at}
        </a>
      </h3>
      {industry && (
        <h4 className="text-sm font-light leading-tight text-justify text-stone-900 dark:text-stone-200">
          {industry}
        </h4>
      )}
      {technologies && (
        <div className="flex flex-row gap-1 flex-wrap justify-between">
          {technologies.map(({ link, icon, name }) => (
            <TooltipProvider key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={link} target="_blank" aria-label="Show technology">
                    {icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="py-0 px-2 dark:bg-stone-700 dark:text-stone-100"
                >
                  {name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      )}
      <div className="text-base font-normal text-stone-500 dark:text-stone-300">
        {what}
      </div>
      {rest.map((h) => (
        <React.Fragment key={h.start.toISOString()}>
          <div className="h-4" />
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-8 -start-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
          <time className="mb-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-500">
            {format(h.start, "MMM. yyyy")} -{" "}
            {h.end ? format(h.end, "MMM. yyyy") : "Present"} (
            {formatDuration(
              intervalToDuration({
                start: h.start,
                end: h.end ?? new Date(),
              }),
              {
                format: ["years", "months"],
              }
            )}
            )
          </time>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
            {h.as}
          </h3>
          <div className=" text-base font-normal text-stone-500 dark:text-stone-300">
            {h.what}
          </div>
        </React.Fragment>
      ))}
    </li>
  );
};
