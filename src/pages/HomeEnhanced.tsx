import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { CompanyLogos } from "@/components/CompanyLogos";
import SEO, { createLocalBusinessSchema, createOrganizationSchema, createPersonSchema } from "@/components/SEO";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundPaths } from "@/components/ui/background-paths";
import StatsCounter from "@/components/StatsCounter";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import "../home-animations.css";

export default function HomeEnhanced() {
  const [, navigate] = useLocation();

  const stats = [
    { value: "35+", label: "Years Experience" },
    { value: "$5B+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "RPEQ", label: "Registered Engineer" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Infrastructure Consulting & Project Management Queensland"
        description="SGT Infrastructure Consulting delivers expert project management and civil engineering services for major infrastructure projects across Queensland. Led by Simon Thomas RPEQ with 35+ years experience in dams, rail, and transport infrastructure."
        keywords={[
          'infrastructure consulting Queensland',
          'project management Queensland',
          'civil engineering services',
          'RPEQ engineer',
          'Simon Thomas engineer',
          'dam construction Queensland',
          'rail infrastructure',
          'transport projects',
          'Gold Coast infrastructure',
          'Coomera consulting',
          'major infrastructure projects',
          'construction management',
          'infrastructure advisory',
          'engineering consulting Australia'
        ]}
        canonical="https://sgtinfrastructure.com.au/"
        ogImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
        structuredData={[
          createLocalBusinessSchema(),
          createOrganizationSchema(),
          createPersonSchema()
        ]}
      />

      {/* Premium Animated Hero Section */}
      <BackgroundPaths
        title="SGT Infrastructure"
        subtitle="Delivering billion-dollar infrastructure projects across Queensland and Australia with over 35 years of senior-level expertise in dams, rail, transport, and major construction projects."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
        onCtaClick={() => navigate('/contact')}
      />

      {/* Stats Bar */}
      <section
        className="bg-card border-y border-border py-8"
        aria-label="Key statistics"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 0.1}s` }} role="listitem">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2" aria-label={`${stat.value} ${stat.label}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <CompanyLogos />

      {/* Achievements Stats Counter */}
      <StatsCounter />

      {/* Awards and Recognition */}
      <AchievementsSection />

      {/* Iconic Projects Showcase */}
      <ProjectsShowcase />

      {/* Services Section */}
      <ServicesGrid />

      {/* About Section */}
      <section className="py-20 bg-background" aria-labelledby="about-heading">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 id="about-heading" className="text-4xl font-bold mb-6 text-foreground">
                Trusted Expertise in Major Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 35 years of experience leading billion-dollar infrastructure projects,
                Simon Thomas and SGT Infrastructure Consulting bring senior-level expertise to
                Queensland's most challenging developments.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { title: "Proven Track Record", desc: "Successfully delivered major projects for government and private sector clients" },
                  { title: "RPEQ Registered", desc: "Registered Professional Engineer of Queensland (Civil Engineering)" },
                  { title: "Senior-Level Focus", desc: "Direct engagement with principal consultant, not junior staff" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="outline">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl slide-in-right">
              <img
                src="/headshot.png"
                alt="Simon Thomas RPEQ - Professional Engineer and Infrastructure Consultant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden" aria-labelledby="cta-heading">
        <BackgroundBeams className="absolute inset-0 opacity-20" />
        <div className="container text-center relative z-10">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6 fade-in">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto fade-in delay-1">
            Let's work together to deliver excellence in your next major infrastructure development
          </p>
          <div className="fade-in delay-2">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
