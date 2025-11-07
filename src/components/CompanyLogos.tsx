"use client";

import { memo } from "react";
import { BlurredInfiniteSlider } from "@/components/ui/infinite-slider";

const companies = [
  { name: "Sunwater", logo: "/logo-sunwater.png" },
  { name: "GoldlinQ", logo: "/logo-goldlinq.jpg" },
  { name: "ARTC", logo: "/logo-artc.png" },
  { name: "Aurizon", logo: "/logo-aurizon.jpg" },
  { name: "Adani Australia", logo: "/logo-adani.jpg" },
  { name: "Worley", logo: "/logo-worley.jpg" },
  { name: "KBR", logo: "/logo-kbr.jpg" },
  { name: "COWI", logo: "/logo-cowi.png" },
  { name: "Hill International", logo: "/logo-hill.png" },
  { name: "Hyder Consulting", logo: "/logo-hyder.gif" },
  { name: "Laing O'Rourke", logo: "/logo-laing-orourke.png" },
];

function CompanyLogosComponent() {
  return (
    <section className="w-full bg-muted/30 py-16" aria-labelledby="clients-heading">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 id="clients-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground">
              35+ years delivering excellence for major infrastructure clients worldwide
            </p>
          </div>

          <div className="w-full py-6">
            <BlurredInfiniteSlider speedOnHover={20} speed={40} gap={80} fadeWidth={80}>
              {companies.map((company) => (
                <div key={company.name} className="flex items-center justify-center">
                  <img
                    className="h-12 w-auto object-contain transition-all duration-300 hover:scale-110"
                    src={company.logo}
                    alt={`${company.name} logo`}
                    loading="lazy"
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

// Memoize to prevent unnecessary re-renders
export const CompanyLogos = memo(CompanyLogosComponent);
export default CompanyLogos;
