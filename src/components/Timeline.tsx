import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Briefcase, Calendar } from "lucide-react";
import "../timeline.css";

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "project" | "milestone" | "role";
  value?: string;
  image?: string;
  logo?: string;
  highlights?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: "vertical" | "horizontal";
}

export default function Timeline({ items, variant = "vertical" }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case "project":
        return Building2;
      case "milestone":
        return Award;
      case "role":
        return Briefcase;
      default:
        return Calendar;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "project":
        return "bg-primary text-primary-foreground";
      case "milestone":
        return "bg-accent text-accent-foreground";
      case "role":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  if (variant === "horizontal") {
    return (
      <div className="timeline-horizontal">
        <div className="timeline-track">
          <div className="timeline-progress" style={{ width: "100%" }} />
        </div>
        <div className="timeline-items-horizontal">
          {items.map((item, index) => {
            const Icon = getIcon(item.type);
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                className={`timeline-item-horizontal ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="timeline-dot-container">
                  <div className={`timeline-dot ${getTypeColor(item.type)}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="timeline-year">{item.year}</div>
                </div>
                
                <Card className={`timeline-card-horizontal ${isActive ? "elevated" : ""}`}>
                  <CardContent className="p-4">
                    <Badge className={`mb-2 ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{item.organization}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.value && (
                      <div className="mt-2 text-sm font-semibold text-primary">
                        {item.value}
                      </div>
                    )}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start">
                            <span className="mr-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="timeline-vertical">
      {items.map((item, index) => {
        const Icon = getIcon(item.type);
        const isActive = activeIndex === index;
        const isLeft = index % 2 === 0;
        
        return (
          <div
            key={index}
            className={`timeline-item-vertical ${isLeft ? "left" : "right"} ${isActive ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="timeline-content">
              <Card className={`timeline-card-vertical ${isActive ? "elevated" : ""}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={`${item.organization} logo`}
                            className="h-8 w-auto object-contain"
                          />
                        )}
                        <Badge className={getTypeColor(item.type)}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-sm text-primary font-medium">{item.organization}</p>
                    </div>
                    <div className={`timeline-icon ${getTypeColor(item.type)}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  
                  {item.value && (
                    <div className="mb-3 text-lg font-bold text-primary">
                      {item.value}
                    </div>
                  )}
                  
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-2 border-t border-border pt-3">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 text-primary">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {item.image && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-32 object-cover hover-zoom"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="timeline-center">
              <div className={`timeline-dot-vertical ${getTypeColor(item.type)}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="timeline-year-vertical">{item.year}</div>
            </div>
          </div>
        );
      })}
      <div className="timeline-line" />
    </div>
  );
}
