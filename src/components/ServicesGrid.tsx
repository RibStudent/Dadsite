"use client";

import { Building2, Users, Award, Shield, TrendingUp, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Project Management",
    description: "End-to-end delivery of major infrastructure projects with proven expertise in billion-dollar developments.",
    icon: Building2,
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
  },
  {
    title: "Strategic Advisory",
    description: "High-level consulting for government and private sector clients on complex infrastructure challenges.",
    icon: Users,
    gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
  },
  {
    title: "Contract Strategy",
    description: "Procurement planning, contract negotiation, and risk management for large-scale projects.",
    icon: Award,
    gradient: "from-orange-500/20 via-amber-500/20 to-orange-600/20",
  },
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies for infrastructure projects.",
    icon: Shield,
    gradient: "from-green-500/20 via-emerald-500/20 to-green-600/20",
  },
  {
    title: "Programme Delivery",
    description: "Multi-project programme management with focus on strategic outcomes and value delivery.",
    icon: TrendingUp,
    gradient: "from-rose-500/20 via-red-500/20 to-rose-600/20",
  },
  {
    title: "Stakeholder Engagement",
    description: "Strategic stakeholder management and community engagement for complex infrastructure developments.",
    icon: Target,
    gradient: "from-indigo-500/20 via-violet-500/20 to-indigo-600/20",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-muted/30" aria-labelledby="services-heading">
      <div className="container">
        <div className="text-center mb-16 fade-in">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive infrastructure consulting services for government and private sector clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        <div className="text-center fade-in delay-3">
          <Link href="/services">
            <Button size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
