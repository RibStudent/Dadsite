import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Award, Globe, Users, Lightbulb, CheckCircle } from "lucide-react";

const careerPhases = [
  {
    phase: "Phase 1",
    title: "Foundation Excellence",
    years: "1988-1997",
    description: "Started on the most technically challenging project possible—nuclear power construction",
    achievements: [
      "Rigorous technical standards",
      "Safety-first mindset",
      "Large-scale concrete placement expertise",
      "Foundation for long-term success"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    phase: "Phase 2",
    title: "International Expansion",
    years: "1997-2006",
    description: "Strategic move to Middle East mega-projects",
    achievements: [
      "Dubai high-rise boom",
      "Cultural landmark projects (Grand Mosque)",
      "Hot climate construction mastery",
      "Multicultural team leadership"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    phase: "Phase 3",
    title: "Major Programme Leadership",
    years: "2006-2015",
    description: "Transitioned to Programme/Project Director roles",
    achievements: [
      "Wiggins Island Rail - $904M EPCM → AIPM Award",
      "Built and led large multidisciplinary teams",
      "Mastered alliance and PPP delivery models",
      "Established reputation for delivery excellence"
    ],
    color: "from-amber-500 to-amber-600"
  },
  {
    phase: "Phase 4",
    title: "Federal Infrastructure",
    years: "2015-2020",
    description: "Peak of influence—leading nation-building projects",
    achievements: [
      "Inland Rail Programme - Multi-billion federal programme",
      "Adani Railway - $1.2B mining infrastructure",
      "Built 200+ person delivery teams",
      "Navigated complex stakeholder environments"
    ],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    phase: "Phase 5",
    title: "Expert & Educator",
    years: "2020-Present",
    description: "Transition to knowledge transfer and specialized advisory",
    achievements: [
      "Sunwater Dam Programme - State government infrastructure",
      "Expert Witness - Construction litigation specialist",
      "Bond University - Teaching next generation",
      "Own Consultancy - SGT Infrastructure Consulting"
    ],
    color: "from-rose-500 to-rose-600"
  }
];

const exceptionalQualities = [
  {
    title: "Technical Brilliance",
    icon: <Lightbulb className="h-6 w-6" />,
    points: [
      "Independent peer review expertise",
      "Constructability problem-solving",
      "Large concrete placement methodologies",
      "Remote location construction solutions",
      "Modular construction techniques"
    ]
  },
  {
    title: "Commercial Mastery",
    icon: <TrendingUp className="h-6 w-6" />,
    points: [
      "P&L responsibility on billion-dollar projects",
      "Astute financial management",
      "Contract administration across multiple delivery models",
      "Dispute resolution and expert witness credibility"
    ]
  },
  {
    title: "Leadership Excellence",
    icon: <Users className="h-6 w-6" />,
    points: [
      "Technically and commercially brilliant",
      "Natural ability for thinking outside the square",
      "Deftly balances project delivery with operational requirements",
      "Manages change effectively"
    ]
  },
  {
    title: "Innovation Focus",
    icon: <Target className="h-6 w-6" />,
    points: [
      "Natural 'ideas person'",
      "Active in innovations space",
      "Creative design solutions",
      "Execution strategy development"
    ]
  }
];

const careerMetrics = [
  { label: "Career Span", value: "37", suffix: " years", detail: "(1988-2025)" },
  { label: "Project Value", value: "$5", suffix: "B+", detail: "managed" },
  { label: "Team Building", value: "200", suffix: "+", detail: "professionals" },
  { label: "Geographic Reach", value: "4", suffix: "", detail: "continents" },
  { label: "Safety Record", value: "Zero", suffix: "", detail: "harm delivery" },
  { label: "Professional Network", value: "500", suffix: "+", detail: "connections" },
];

const industryLegacy = [
  { achievement: "Contributed to UK's only nuclear reactor", icon: "⚛️" },
  { achievement: "Part of 3rd largest mosque in the world", icon: "🕌" },
  { achievement: "Led Melbourne-Brisbane federal rail programme", icon: "🚄" },
  { achievement: "Queensland's largest dam raising project", icon: "🏗️" },
  { achievement: "Next-generation engineer training at Bond University", icon: "🎓" },
];

export default function CareerArcAnalysis() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Career Analysis</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            37 Years of Infrastructure Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From nuclear power foundations to nation-building infrastructure, a career defined by 
            technical brilliance, commercial mastery, and leadership excellence
          </p>
        </motion.div>

        {/* Career Phases */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Career Evolution</h3>
          <div className="space-y-6">
            {careerPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
                  <CardHeader>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <CardTitle className="text-xl">
                        {phase.phase}: {phase.title}
                      </CardTitle>
                      <Badge variant="secondary">{phase.years}</Badge>
                    </div>
                    <p className="text-muted-foreground mt-2">{phase.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exceptional Qualities */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">What Makes Simon Thomas Exceptional</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {exceptionalQualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {quality.icon}
                      </div>
                      {quality.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {quality.points.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Impact Metrics */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Career Impact: The Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {careerMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {metric.value}{metric.suffix}
                    </div>
                    <div className="text-xs font-medium mt-1">{metric.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{metric.detail}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Legacy */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Industry Legacy</h3>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {industryLegacy.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="flex-1">{item.achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto">
                <Award className="h-12 w-12 text-primary mb-6 mx-auto" />
                <blockquote className="text-lg italic text-center mb-4">
                  "Simon is technically and commercially brilliant in his field and has a natural ability 
                  for thinking outside the square and managing change. He has the rare ability of being able 
                  to deftly balance the need to deliver the project on time with the requirement to deliver 
                  a solution that meets the longer term operational requirements."
                </blockquote>
                <cite className="block text-center text-sm text-muted-foreground">
                  — Sonia McDonald, Leadership Development Expert
                </cite>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                The Complete Infrastructure Professional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {[
                  "Technical depth earned over 37 years across diverse sectors",
                  "Commercial sophistication on billion-dollar programmes",
                  "Leadership excellence recognized by peers and industry",
                  "Cultural intelligence proven across four continents",
                  "Sustained delivery with on-time, on-budget performance",
                  "Knowledge transfer through teaching and advisory roles"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 p-4 bg-background/50 rounded-lg">
                <Badge variant="default" className="mb-2">Current Status</Badge>
                <p className="text-sm font-medium">
                  Still active and contributing at the highest levels
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Sunwater • Bond University • Expert Witness Services
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}