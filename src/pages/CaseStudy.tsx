import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react";
import "../pages/home-animations.css";

export interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  location: string;
  duration: string;
  value: string;
  sectors: string[];
  image: string;
  overview: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  outcomes: {
    title: string;
    description: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface CaseStudyProps {
  caseStudy: CaseStudyData;
  index: number;
}

export default function CaseStudy({ caseStudy, index }: CaseStudyProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.sectors.map((sector, idx) => (
            <Badge key={idx} variant="secondary">{sector}</Badge>
          ))}
        </div>
        <h2 className="text-4xl font-bold mb-4">{caseStudy.title}</h2>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Client</div>
            <div className="font-semibold">{caseStudy.client}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Location</div>
            <div className="font-semibold">{caseStudy.location}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Duration</div>
            <div className="font-semibold">{caseStudy.duration}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Project Value</div>
            <div className="font-semibold text-primary">{caseStudy.value}</div>
          </div>
        </div>
      </div>

      {/* Image and Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className={isEven ? "" : "md:order-2"}>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl floating-card">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover hover-zoom"
            />
          </div>
        </div>
        <div className={isEven ? "" : "md:order-1"}>
          <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
          <p className="text-muted-foreground leading-relaxed">
            {caseStudy.overview}
          </p>
        </div>
      </div>

      {/* Challenge, Solution, Outcomes */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Challenge */}
        <Card className="floating-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                <Target className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold">{caseStudy.challenge.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {caseStudy.challenge.description}
            </p>
            <ul className="space-y-2">
              {caseStudy.challenge.points.map((point, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="floating-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">{caseStudy.solution.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {caseStudy.solution.description}
            </p>
            <ul className="space-y-2">
              {caseStudy.solution.points.map((point, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Outcomes */}
        <Card className="floating-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">{caseStudy.outcomes.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {caseStudy.outcomes.description}
            </p>
            <div className="space-y-3">
              {caseStudy.outcomes.metrics.map((metric, idx) => (
                <div key={idx} className="border-l-2 border-green-600 dark:border-green-400 pl-3">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <Card className="bg-primary/5 border-primary/20 floating-card">
          <CardContent className="pt-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg italic mb-4">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="font-semibold">{caseStudy.testimonial.author}</div>
              <div className="text-sm text-muted-foreground">
                {caseStudy.testimonial.position}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
