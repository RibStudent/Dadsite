"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CaseProps {
  title?: string;
  items: {
    name: string;
    logo: string;
  }[];
  autoScrollInterval?: number;
}

function Case({ title = "Trusted by thousands of businesses worldwide", items, autoScrollInterval = 3000 }: CaseProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, autoScrollInterval);

    return () => clearTimeout(timeout);
  }, [api, current, isPaused, autoScrollInterval]);

  return (
    <div
      className="w-full py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl md:text-3xl tracking-tight lg:max-w-xl font-bold text-left">
            {title}
          </h2>
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            aria-label="Client company logos carousel"
            aria-live="polite"
          >
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6" key={index}>
                  <div
                    className="flex rounded-lg bg-card border border-border aspect-square items-center justify-center p-6 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                    role="group"
                    aria-label={`${item.name} client logo`}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} company logo`}
                      className="max-w-full max-h-full object-contain transition-all hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
