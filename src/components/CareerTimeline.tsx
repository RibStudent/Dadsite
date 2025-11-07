import { motion } from "framer-motion";
import { Calendar, MapPin, Building, Award } from "lucide-react";

const timelineData = [
  {
    phase: "Current Era",
    years: "2020-Present",
    title: "Senior Advisory & State Infrastructure",
    items: [
      {
        year: "2022-Present",
        role: "Project Director",
        company: "Sunwater Dam Refurbishment",
        location: "Queensland",
        highlights: [
          "State Government corporation project",
          "500m+ long, 34m height dam",
          "18+ million megalitres capacity",
          "400,000m³ concrete, 4,000,000m³ earthworks"
        ],
        icon: <Building className="h-5 w-5" />
      },
      {
        year: "2023-Present",
        role: "Part Time Lecturing Fellow",
        company: "Bond University",
        location: "Gold Coast, Queensland",
        highlights: [
          "Teaching Project Management",
          "Sharing real-world expertise",
          "Academic contribution"
        ],
        icon: <Award className="h-5 w-5" />
      },
      {
        year: "2020-Present",
        role: "Principal Consultant",
        company: "Simon Thomas Advisory",
        location: "Queensland",
        highlights: [
          "Expert Witness assignments",
          "Construction litigation consulting",
          "Major infrastructure advisory"
        ],
        icon: <Award className="h-5 w-5" />
      }
    ]
  },
  {
    phase: "Federal & Mining Infrastructure",
    years: "2015-2020",
    title: "Programme Leadership",
    items: [
      {
        year: "2019-2020",
        role: "Head of Rail Design & Construction",
        company: "Adani Mining Pty",
        location: "Townsville",
        highlights: [
          "$1.2 Billion project value",
          "210km heavy haul railway",
          "32 bridges construction",
          "Fast-track remote delivery"
        ],
        icon: <Building className="h-5 w-5" />
      },
      {
        year: "2015-2019",
        role: "Programme Delivery Director",
        company: "Inland Rail - ARTC",
        location: "Federal Government",
        highlights: [
          "Led concept and reference designs",
          "Built team of 200+ professionals",
          "Awarded $300M+ first major contract",
          "Zero harm delivery"
        ],
        icon: <Award className="h-5 w-5" />
      }
    ]
  },
  {
    phase: "Major Programme Leadership",
    years: "2006-2015",
    title: "Award-Winning Project Direction",
    items: [
      {
        year: "2011-2015",
        role: "Project Director",
        company: "Wiggins Island Rail - Aurizon",
        location: "Queensland",
        highlights: [
          "$904M EPCM project",
          "AIPM Project Director of the Year 2014",
          "Alliance Leadership Team member",
          "Overall HSE responsibility"
        ],
        icon: <Award className="h-5 w-5" />
      },
      {
        year: "2006-2011",
        role: "Various Senior Roles",
        company: "Major Queensland Infrastructure",
        location: "Queensland",
        highlights: [
          "Design consultancy operations",
          "Major rail projects",
          "Infrastructure boom participation"
        ],
        icon: <Building className="h-5 w-5" />
      }
    ]
  },
  {
    phase: "International Expansion",
    years: "1997-2006",
    title: "Middle East Mega-Projects",
    items: [
      {
        year: "2002-2004",
        role: "Planning Manager",
        company: "Sheikh Zayed Mosque",
        location: "Abu Dhabi, UAE",
        highlights: [
          "3rd largest mosque in the world",
          "Over 50,000m³ of concrete",
          "Precast dome sections installation"
        ],
        icon: <Building className="h-5 w-5" />
      },
      {
        year: "1997-2002",
        role: "Project Design Manager",
        company: "Jumeirah Beach Residence",
        location: "Dubai, UAE",
        highlights: [
          "Nine 60-storey residential towers",
          "Fast-track design and tender",
          "Retail podium areas"
        ],
        icon: <Building className="h-5 w-5" />
      }
    ]
  },
  {
    phase: "Foundation",
    years: "1988-1997",
    title: "UK Infrastructure & Nuclear",
    items: [
      {
        year: "1990-1997",
        role: "Various Engineering Roles",
        company: "UK Infrastructure Projects",
        location: "United Kingdom",
        highlights: [
          "Bridge construction mastery",
          "Water treatment expertise",
          "Construction management development"
        ],
        icon: <Building className="h-5 w-5" />
      },
      {
        year: "1988-1990",
        role: "Trainee Site Engineer",
        company: "Sizewell B Nuclear Power Station",
        location: "United Kingdom",
        highlights: [
          "UK's only pressurised water reactor",
          "Landmark energy project",
          "Foundation engineering principles"
        ],
        icon: <Building className="h-5 w-5" />
      }
    ]
  }
];

export default function CareerTimeline() {
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
            Career Evolution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            37+ years of continuous excellence, innovation, and leadership in civil and structural engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {timelineData.map((phase) => (
            <div key={phase.phase} className="mb-16">
              {/* Phase Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.years}</p>
                </div>
              </motion.div>

              {/* Timeline Items */}
              {phase.items.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative mb-8 ${
                    index % 2 === 0 
                      ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-[calc(50%-2rem)]' 
                      : 'md:pl-8 md:text-left md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] md:translate-x-[calc(100%+4rem)]'
                  } ml-16`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-48px] md:left-auto md:right-[-48px] top-8 w-4 h-4 bg-background border-2 border-primary rounded-full" />
                  
                  {/* Content card */}
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <h4 className="font-semibold text-lg mb-1">{item.role}</h4>
                        <p className="text-primary font-medium">{item.company}</p>
                        <div className={`flex items-center gap-2 text-sm text-muted-foreground mt-1 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Calendar className="h-3 w-3" />
                          <span>{item.year}</span>
                          <MapPin className="h-3 w-3 ml-2" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className={`space-y-1 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {item.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}