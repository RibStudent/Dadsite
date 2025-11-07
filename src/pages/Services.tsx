import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Users,
  Award,
  FileCheck,
  Hammer,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Scale
} from "lucide-react";
import { Link } from "wouter";
import SEO, { createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: "Expert Witness & Advisory",
      description: "Professional opinion evidence and independent expert advice for infrastructure disputes and litigation.",
      features: [
        "Expert witness testimony for construction disputes",
        "Independent peer reviews of civil engineering designs",
        "Constructability assessments and opinions",
        "Delay claim analysis and expert reports",
        "Commercial dispute resolution support",
        "Technical due diligence for litigation",
      ],
    },
    {
      icon: Building2,
      title: "Project Management & Delivery",
      description: "End-to-end oversight of major infrastructure projects from inception to completion.",
      features: [
        "Project planning and scheduling",
        "Stakeholder management and coordination",
        "Budget management and cost control",
        "Risk identification and mitigation",
        "Quality assurance and compliance",
        "Progress reporting and documentation",
      ],
    },
    {
      icon: Users,
      title: "Strategic Infrastructure Advisory",
      description: "High-level consulting for government and private sector clients on complex challenges.",
      features: [
        "Infrastructure strategy development",
        "Feasibility studies and business cases",
        "Project scoping and definition",
        "Delivery model assessment",
        "Regulatory and compliance guidance",
        "Stakeholder engagement strategies",
      ],
    },
    {
      icon: Award,
      title: "Contract & Procurement Strategy",
      description: "Expert guidance on procurement approaches and contract management for major projects.",
      features: [
        "Procurement strategy development",
        "Contract model selection",
        "Tender documentation review",
        "Contract negotiation support",
        "Risk allocation and management",
        "Dispute resolution assistance",
      ],
    },
    {
      icon: FileCheck,
      title: "Design Management",
      description: "Coordination and oversight of design processes to ensure quality and value outcomes.",
      features: [
        "Design coordination and integration",
        "Technical review and approval",
        "Value engineering initiatives",
        "Design compliance verification",
        "Interface management",
        "Design optimization",
      ],
    },
    {
      icon: Hammer,
      title: "Construction Oversight",
      description: "On-site management and supervision ensuring projects are built to specification.",
      features: [
        "Construction monitoring and inspection",
        "Quality control and testing",
        "Safety management oversight",
        "Progress tracking and reporting",
        "Variation assessment",
        "Defect management",
      ],
    },
    {
      icon: PenTool,
      title: "Civil Engineering Consulting",
      description: "Technical expertise in civil engineering for infrastructure developments.",
      features: [
        "Infrastructure design review",
        "Engineering assessments",
        "Technical specifications",
        "Constructability review",
        "Engineering problem-solving",
        "Peer review services",
      ],
    },
  ];

  const sectors = [
    {
      title: "Water Infrastructure",
      description: "Dams, water supply systems, irrigation, water treatment facilities, and wastewater systems",
    },
    {
      title: "Transport Infrastructure",
      description: "Roads, highways, bridges, motorways, and major transport corridors",
    },
    {
      title: "Rail Infrastructure",
      description: "Heavy haul rail, light rail, freight rail systems, and railway signalling",
    },
    {
      title: "Mining & Resources",
      description: "Mine infrastructure, coal terminals, port facilities, and resource sector projects",
    },
    {
      title: "Urban Development",
      description: "Major urban redevelopment, residential towers, and mixed-use developments",
    },
    {
      title: "Maritime & Port",
      description: "Port infrastructure, marine works, ship loaders, and coastal facilities",
    },
    {
      title: "Power & Energy",
      description: "Power generation facilities, nuclear infrastructure, and energy projects",
    },
    {
      title: "Government Projects",
      description: "State and Federal government infrastructure developments and PPP projects",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Infrastructure Consulting Services - Project Management & Civil Engineering"
        description="SGT Infrastructure Consulting offers expert project management, strategic advisory, contract management, design oversight, and construction management services for major infrastructure projects across Queensland and Australia."
        keywords={[
          'infrastructure consulting services',
          'project management services',
          'civil engineering consulting',
          'construction management',
          'contract strategy',
          'expert witness infrastructure',
          'design management',
          'procurement strategy',
          'infrastructure advisory Queensland',
          'dam project management',
          'rail infrastructure services',
          'transport consulting',
          'risk management infrastructure',
          'stakeholder management',
          'infrastructure delivery'
        ]}
        canonical="https://sgtinfrastructure.com.au/services"
        structuredData={[
          createServiceSchema({
            name: 'Infrastructure Project Management',
            description: 'End-to-end oversight of major infrastructure projects from inception to completion, including planning, stakeholder management, budget control, and risk mitigation.'
          }),
          createServiceSchema({
            name: 'Strategic Infrastructure Advisory',
            description: 'High-level consulting for government and private sector clients on complex infrastructure challenges, feasibility studies, and delivery model assessment.'
          }),
          createServiceSchema({
            name: 'Contract & Procurement Strategy',
            description: 'Expert guidance on procurement approaches, contract management, tender documentation, and risk allocation for major projects.'
          }),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://sgtinfrastructure.com.au/' },
            { name: 'Services', url: 'https://sgtinfrastructure.com.au/services' }
          ])
        ]}
      />
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive infrastructure consulting services for government and private 
              sector clients across Queensland and Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sectors We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across key infrastructure sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{sector.title}</h3>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose SGT Infrastructure</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Senior-Level Expertise</h3>
                  <p className="text-muted-foreground">
                    Direct access to 35+ years of experience, not junior staff. Principal 
                    consultant engagement on every project.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    Successfully delivered billion-dollar projects for major government agencies 
                    and private sector clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Focus</h3>
                  <p className="text-muted-foreground">
                    High-level strategic advisory, not just technical delivery. We solve complex 
                    problems and drive project success.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Queensland Expertise</h3>
                  <p className="text-muted-foreground">
                    Deep understanding of Queensland's infrastructure landscape, regulatory 
                    environment, and government processes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">RPEQ Registered</h3>
                  <p className="text-muted-foreground">
                    Fully qualified and registered professional engineer with demonstrated 
                    technical competence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Boutique Service</h3>
                  <p className="text-muted-foreground">
                    Personalized attention and responsive service without the bureaucracy of 
                    large consulting firms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Delivery Models */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Delivery Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extensive experience across all major infrastructure delivery models
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Alliance</h3>
                <p className="text-sm text-muted-foreground">Collaborative delivery with shared risk and reward</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Design & Construct</h3>
                <p className="text-sm text-muted-foreground">Integrated design and construction delivery</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Construct Only</h3>
                <p className="text-sm text-muted-foreground">Traditional construction contract delivery</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">PPP</h3>
                <p className="text-sm text-muted-foreground">Public-Private Partnership structures</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">EPCM</h3>
                <p className="text-sm text-muted-foreground">Engineering, Procurement & Construction Management</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Design & Build</h3>
                <p className="text-sm text-muted-foreground">Turnkey design-build solutions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Fast Track</h3>
                <p className="text-sm text-muted-foreground">Accelerated delivery methodologies</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">ECI</h3>
                <p className="text-sm text-muted-foreground">Early Contractor Involvement models</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can support your infrastructure project
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
