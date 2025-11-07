import { Timeline } from "@/components/ui/timeline";
import { TimelineItem } from "@/components/Timeline";
import { Building2, Trophy, Briefcase } from "lucide-react";

interface AceternityTimelineProps {
  items: TimelineItem[];
}

export default function AceternityTimeline({ items }: AceternityTimelineProps) {
  const timelineData = items.map((item) => ({
    title: item.year,
    content: (
      <div>
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            {item.logo && (
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg p-2 shadow-md">
                <img
                  src={item.logo}
                  alt={item.organization}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {item.type === "project" && (
                  <Building2 className="h-4 w-4 text-blue-600" />
                )}
                {item.type === "milestone" && (
                  <Trophy className="h-4 w-4 text-amber-600" />
                )}
                {item.type === "role" && (
                  <Briefcase className="h-4 w-4 text-green-600" />
                )}
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {item.organization}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                {item.title}
              </h3>
              {item.value && (
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mb-3">
                  {item.value}
                </div>
              )}
            </div>
          </div>
          
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
            {item.description}
          </p>

          {item.highlights && item.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3 uppercase tracking-wide">
                Key Highlights
              </h4>
              <div className="grid gap-2">
                {item.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm"
                  >
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {item.image && (
          <div className="rounded-lg overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </div>
    ),
  }));

  return (
    <Timeline data={timelineData} />
  );
}
