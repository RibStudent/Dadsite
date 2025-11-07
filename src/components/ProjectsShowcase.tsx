import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, DollarSign } from "lucide-react";

const iconicProjects = [
  {
    category: "Nuclear Energy",
    projects: [
      {
        name: "Sizewell B Nuclear Power Station",
        location: "United Kingdom",
        period: "1988-1990",
        role: "Trainee Site Engineer",
        value: "Major National Infrastructure",
        description: "UK's only pressurised water reactor - landmark energy project",
        highlights: ["Foundation engineering", "Nuclear safety protocols", "Complex concrete structures"],
        image: "/sizewell-b-construction.jpg"
      }
    ]
  },
  {
    category: "Religious/Cultural",
    projects: [
      {
        name: "Sheikh Zayed Bin Sultan Al Nayan Mosque",
        location: "Abu Dhabi, UAE",
        period: "2002-2004",
        role: "Planning Manager",
        value: "Cultural Landmark",
        description: "3rd largest mosque in the world",
        highlights: ["Over 50,000m³ concrete", "Precast dome installation", "International coordination"],
        image: "/sheikh-zayed-mosque-construction.jpg"
      }
    ]
  },
  {
    category: "High-Rise Residential",
    projects: [
      {
        name: "Jumeirah Beach Residence",
        location: "Dubai, UAE",
        period: "1997-2002",
        role: "Project Design Manager",
        value: "Multi-billion Development",
        description: "Nine 60-storey residential towers",
        highlights: ["Fast-track design", "Retail podium areas", "Complex coordination"],
        image: "/jumeirah-beach-residence.jpg"
      }
    ]
  },
  {
    category: "Transportation Infrastructure",
    projects: [
      {
        name: "Inland Rail Programme",
        location: "Australia",
        period: "2015-2019",
        role: "Programme Delivery Director",
        value: "Multi-billion Federal Project",
        description: "1,700km transformational freight rail",
        highlights: ["200+ team members", "$300M+ first contract", "Zero harm delivery"],
        image: "/inland-rail-project.jpg"
      },
      {
        name: "Gold Coast Light Rail Stage 3",
        location: "Queensland",
        period: "Various",
        role: "Senior Advisor",
        value: "PPP Model",
        description: "Major urban redevelopment project",
        highlights: ["PPP delivery", "Urban integration", "Stakeholder management"],
        image: "/gold-coast-light-rail.jpg"
      },
      {
        name: "Adani Railway",
        location: "Queensland",
        period: "2019-2020",
        role: "Head of Rail Design & Construction",
        value: "$1.2 Billion",
        description: "210km heavy haul railway with 32 bridges",
        highlights: ["Remote delivery", "Fast-track schedule", "Full design responsibility"],
        image: "/carmichael-rail.jpg"
      }
    ]
  },
  {
    category: "Mining & Resources",
    projects: [
      {
        name: "Wiggins Island Coal Export Terminal",
        location: "Queensland",
        period: "2011-2015",
        role: "Project Director",
        value: "$904M EPCM",
        description: "27MTPA coal export capacity",
        highlights: ["AIPM Award 2014", "Alliance leadership", "HSE excellence"],
        image: "/wiggins-island-terminal.jpg"
      }
    ]
  },
  {
    category: "Water & Civil Infrastructure",
    projects: [
      {
        name: "Sunwater Dam Refurbishment",
        location: "Queensland",
        period: "2022-Present",
        role: "Project Director",
        value: "State Government Project",
        description: "500m+ long, 34m height dam raising",
        highlights: ["18+ million megalitres", "400,000m³ concrete", "4,000,000m³ earthworks"],
        image: "/burdekin-dam-1.jpg"
      }
    ]
  }
];

export default function ProjectsShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Iconic Projects Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From nuclear power stations to world heritage sites, delivering excellence across sectors and continents
          </p>
        </motion.div>

        <div className="space-y-12">
          {iconicProjects.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Badge variant="outline" className="text-lg px-4 py-1">
                  {category.category}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <Card key={projectIndex} className="overflow-hidden hover:shadow-xl transition-shadow">
                    {project.image && (
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <h3 className="text-white font-bold text-lg">{project.name}</h3>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-6">
                      {!project.image && (
                        <h3 className="font-bold text-xl mb-3">{project.name}</h3>
                      )}
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{project.period}</span>
                        </div>
                        {project.value && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <DollarSign className="h-3 w-3" />
                            <span>{project.value}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm">
                          <Building2 className="h-3 w-3 text-primary" />
                          <span className="font-medium text-primary">{project.role}</span>
                        </div>
                      </div>

                      <p className="text-sm mb-3">{project.description}</p>

                      <div className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <p key={i} className="text-xs text-muted-foreground">
                            • {highlight}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-muted/30 rounded-lg"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Concurrent Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Continents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$5B+</div>
            <div className="text-sm text-muted-foreground">Combined Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}