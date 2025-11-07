import { Button } from "@/components/ui/button";
import { Award, BookOpen, Building2, Globe2, TrendingUp, Users, Shield, Briefcase } from "lucide-react";
import { Link } from "wouter";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import SEO from "@/components/SEO";
import CareerTimeline from "@/components/CareerTimeline";
import CareerArcAnalysis from "@/components/CareerArcAnalysis";
import { Card, CardContent } from "@/components/ui/card";

export default function CareerHighlights() {
  const careerContent = [
    {
      title: "Awards & Recognition",
      description:
        "AIPM Project Director of the Year 2014 - Recognised for exceptional leadership and delivery excellence on Burdekin Falls Dam Raising Project. This prestigious award acknowledges outstanding project management capabilities at the highest level of infrastructure delivery.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white">
          <div className="flex flex-col items-center gap-4 text-center">
            <Award className="h-24 w-24" />
            <h3 className="text-3xl font-bold">Project Director of the Year</h3>
            <p className="text-lg">AIPM 2014</p>
          </div>
        </div>
      ),
    },
    {
      title: "Professional Qualifications",
      description:
        "Chartered Engineer (CEng) - Engineering Council UK | RPEQ-8668 - Registered Professional Engineer of Queensland (Civil) | Bachelor of Engineering (Civil) with Honours - University of Leeds. Over 34 years of senior-level expertise in delivering major infrastructure projects valued at $5B+ across dams, rail, transport and civil engineering sectors.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <Shield className="mx-auto h-20 w-20 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Professional Credentials</h3>
            </div>
            <div className="space-y-2 text-lg">
              <p>✓ CEng (UK)</p>
              <p>✓ RPEQ-8668 (QLD)</p>
              <p>✓ BEng (Hons) Civil</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Career by Numbers",
      description:
        "34+ years of senior-level experience | $5B+ in major project delivery | Expertise across rail, dams, transport, mining, water, and energy sectors | Geographic reach spanning UK, Middle East, Asia, and Australia | Proven track record with government and private sector clients including Sunwater, ARTC, Aurizon, Adani, and major consultancies.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="grid grid-cols-2 gap-8 p-8 text-center">
            <div>
              <p className="text-5xl font-bold">34+</p>
              <p className="text-sm mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold">$5B+</p>
              <p className="text-sm mt-2">Projects Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-bold">100%</p>
              <p className="text-sm mt-2">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold">Global</p>
              <p className="text-sm mt-2">Reach</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Iconic Projects Portfolio",
      description:
        "Led delivery of Queensland's most significant infrastructure developments: Burdekin Falls Dam Raising (AIPM Award-winning) | Inland Rail Programme - 1,700km transformational freight rail | Gold Coast Light Rail Stage 1 & 2 | Wiggins Island Coal Terminal - $3.1B facility | Clarence River Coal Mine development | Plus major projects for Sunwater, ARTC, Aurizon, and leading international consultancies.",
      content: (
        <div className="h-full w-full">
          <img
            src="/burdekin-dam-1.jpg"
            alt="Major infrastructure project"
            className="h-full w-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "Strategic Leadership",
      description:
        "Expertise in programme/project management, contract strategy, procurement, risk management, and stakeholder engagement. Proven capability across EPC, EPCM, D&C, and Alliance delivery models. Skilled in leading multidisciplinary teams, managing complex supply chains, and delivering strategic outcomes for government and private sector clients in challenging environments.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white">
          <div className="text-center">
            <Users className="mx-auto h-24 w-24 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Leadership Excellence</h3>
            <div className="space-y-2 text-left max-w-md">
              <p>• Programme/Project Management</p>
              <p>• Contract Strategy & Procurement</p>
              <p>• Risk Management</p>
              <p>• Stakeholder Engagement</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Academic Contribution",
      description:
        "Bond University - Lecturer in Project Management. Contributing to the development of the next generation of project management professionals through academic teaching and industry insights. Bringing real-world experience from billion-dollar projects into the classroom to enhance student learning and prepare future industry leaders.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-600 to-red-700 p-8 text-white">
          <div className="text-center">
            <BookOpen className="mx-auto h-24 w-24 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-lg">Bond University</p>
            <p className="text-sm mt-2">Lecturer in Project Management</p>
          </div>
        </div>
      ),
    },
  ];

  const keyStrengths = [
    {
      title: "Programme Delivery",
      description: "Multi-project programme management with focus on strategic outcomes and value delivery across complex infrastructure portfolios.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      header: (
        <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-accent/20">
          <Briefcase className="h-12 w-12 text-primary" />
        </div>
      ),
    },
    {
      title: "Commercial Acumen",
      description: "Expert contract strategy, procurement planning, and commercial management for major projects up to $3.1B.",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      header: (
        <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-md bg-gradient-to-br from-accent/20 to-primary/20">
          <TrendingUp className="h-12 w-12 text-primary" />
        </div>
      ),
    },
    {
      title: "Global Experience",
      description: "International project delivery across UK, Middle East, Asia, and Australia with diverse cultural and regulatory environments.",
      icon: <Globe2 className="h-8 w-8 text-primary" />,
      header: (
        <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-accent/20">
          <Globe2 className="h-12 w-12 text-primary" />
        </div>
      ),
    },
    {
      title: "Sector Expertise",
      description: "Deep expertise across rail, dams, transport, mining, water, energy, and civil infrastructure sectors.",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      header: (
        <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-md bg-gradient-to-br from-accent/20 to-primary/20">
          <Building2 className="h-12 w-12 text-primary" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Simon Thomas RPEQ - Career Highlights & Achievements"
        description="34+ years of senior infrastructure leadership. AIPM Project Director of the Year 2014. $5B+ in major project delivery across dams, rail, and transport. Chartered Engineer and RPEQ-8668 registered professional."
        keywords={[
          'Simon Thomas engineer',
          'RPEQ 8668',
          'AIPM Project Director',
          'infrastructure leadership',
          'dam construction expert',
          'rail infrastructure',
          'Burdekin Falls Dam',
          'Inland Rail Programme',
          'chartered engineer',
          'project management Queensland'
        ]}
        canonical="https://sgtinfrastructure.com.au/career-highlights"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Simon Thomas RPEQ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Chartered Engineer | RPEQ-8668 | AIPM Project Director of the Year 2014
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              34+ years of senior-level expertise delivering $5B+ in major infrastructure projects
              across rail, dams, transport, and civil engineering sectors
            </p>
          </div>
        </div>
      </section>

      {/* Career Journey - Sticky Scroll */}
      <section className="py-20 bg-background" aria-labelledby="career-journey-heading">
        <div className="container mb-12">
          <h2 id="career-journey-heading" className="text-4xl font-bold text-center mb-4 text-foreground">
            Career Journey
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Explore the milestones, achievements, and expertise that define a distinguished career
            in infrastructure delivery
          </p>
        </div>
        <StickyScroll content={careerContent} />
      </section>

      {/* Key Strengths - Bento Grid */}
      <section className="py-20 bg-muted/30" aria-labelledby="strengths-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="strengths-heading" className="text-4xl font-bold mb-4 text-foreground">
              Key Strengths & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive capabilities built through decades of delivering complex infrastructure projects
            </p>
          </div>

          <BentoGrid className="max-w-7xl mx-auto">
            {keyStrengths.map((strength, index) => (
              <BentoGridItem
                key={index}
                title={strength.title}
                description={strength.description}
                header={strength.header}
                icon={strength.icon}
                className={index === 0 || index === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Notable Projects Section */}
      <section className="py-20 bg-background" aria-labelledby="projects-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="projects-heading" className="text-4xl font-bold mb-4 text-foreground">
              Notable Career Milestones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformational infrastructure projects delivered across multiple sectors and geographies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                project: "Burdekin Falls Dam Raising",
                role: "Programme Director",
                value: "Major water infrastructure",
                achievement: "AIPM Project Director of the Year 2014",
                image: "/burdekin-dam-1.jpg"
              },
              {
                project: "Inland Rail Programme",
                role: "Senior Programme Advisor",
                value: "1,700km transformational rail",
                achievement: "National freight backbone project",
                image: "/inland-rail-project.jpg"
              },
              {
                project: "Gold Coast Light Rail",
                role: "Project Director",
                value: "Stage 1 & 2 Delivery",
                achievement: "Major urban transport infrastructure",
                image: "/gold-coast-light-rail.jpg"
              },
              {
                project: "Wiggins Island Coal Terminal",
                role: "Senior Project Manager",
                value: "$3.1B facility",
                achievement: "Major export infrastructure",
                image: "/major-infrastructure.jpg"
              },
            ].map((milestone, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src={milestone.image}
                    alt={milestone.project}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{milestone.project}</h3>
                  <p className="text-sm mb-1 text-white/90">{milestone.role}</p>
                  <p className="text-sm font-semibold text-primary-foreground mb-1">{milestone.value}</p>
                  <p className="text-xs text-white/80">{milestone.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Arc Analysis */}
      <CareerArcAnalysis />

      {/* Career Timeline */}
      <CareerTimeline />

      {/* Professional Qualifications & Memberships */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional Qualifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Internationally recognised engineering credentials and academic qualifications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Academic</h3>
                  <p className="text-muted-foreground">Bachelor of Civil Engineering (Distinction)</p>
                  <p className="text-sm text-muted-foreground mt-1">University of South Wales, UK (1990)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Professional Status</h3>
                  <p className="text-muted-foreground">Chartered Engineer (CEng)</p>
                  <p className="text-sm text-muted-foreground mt-1">Institution of Civil Engineers (2002)</p>
                  <p className="text-muted-foreground mt-2">RPEQ #8668</p>
                  <p className="text-sm text-muted-foreground mt-1">Queensland (2007)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Academic Role</h3>
                  <p className="text-muted-foreground">Part Time Lecturing Fellow</p>
                  <p className="text-sm text-muted-foreground mt-1">Bond University (2023-Present)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Expertise Areas */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Specialized Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deep technical and management capabilities developed through leading billion-dollar projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Large Concrete Placement",
                description: "Expert in remote, hot conditions methodologies",
                icon: <Building2 className="h-8 w-8" />
              },
              {
                title: "Expert Witness",
                description: "Construction litigation for major civil infrastructure",
                icon: <Shield className="h-8 w-8" />
              },
              {
                title: "Alliance Leadership",
                description: "Multiple Alliance Leadership Team positions",
                icon: <Users className="h-8 w-8" />
              },
              {
                title: "Innovation Focus",
                description: "Design, constructability, and execution innovation",
                icon: <TrendingUp className="h-8 w-8" />
              },
              {
                title: "Multicultural Leadership",
                description: "Remote multicultural team management",
                icon: <Globe2 className="h-8 w-8" />
              },
              {
                title: "P&L Accountability",
                description: "Billion dollar project financial responsibility",
                icon: <Briefcase className="h-8 w-8" />
              },
            ].map((expertise, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-primary mb-3">{expertise.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{expertise.title}</h3>
                  <p className="text-muted-foreground text-sm">{expertise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-muted/30" aria-labelledby="sectors-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="sectors-heading" className="text-4xl font-bold mb-4 text-foreground">
              Industry Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven expertise across diverse infrastructure sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Rail Infrastructure",
              "Dam Construction",
              "Transport Systems",
              "Mining Infrastructure",
              "Water Resources",
              "Energy Projects",
              "Civil Engineering",
              "Major Construction"
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <p className="font-semibold text-foreground">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6">
            Experience Senior-Level Expertise
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Work directly with a proven infrastructure leader for your next major project
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
