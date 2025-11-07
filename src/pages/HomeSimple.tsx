import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Building2, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { CompanyLogos } from "@/components/CompanyLogos";
import SEO, { createLocalBusinessSchema, createOrganizationSchema, createPersonSchema } from "@/components/SEO";
import "../home-animations.css";

export default function HomeSimple() {
  const services = [
    {
      title: "Project Management",
      description: "End-to-end delivery of major infrastructure projects with proven expertise in billion-dollar developments.",
      icon: Building2,
    },
    {
      title: "Strategic Advisory",
      description: "High-level consulting for government and private sector clients on complex infrastructure challenges.",
      icon: Users,
    },
    {
      title: "Contract Strategy",
      description: "Procurement planning, contract negotiation, and risk management for large-scale projects.",
      icon: Award,
    },
  ];

  const projects = [
    {
      title: "Burdekin Falls Dam",
      client: "Sunwater",
      description: "Project Director for major dam improvement and raising projects in North Queensland.",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80",
    },
    {
      title: "Gold Coast Light Rail",
      client: "GoldlinQ",
      description: "Executive Director role in delivering Queensland's premier light rail system.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    },
    {
      title: "Inland Rail Programme",
      client: "Australian Rail Track Corporation",
      description: "Programme Delivery Director for Australia's largest freight rail infrastructure project.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
  ];

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
      {/* Hero Section with Animations */}
      <section
        id="main-content"
        className="relative h-[600px] flex items-center justify-center overflow-hidden hero-section"
        aria-label="Hero section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80)",
          }}
          role="img"
          aria-label="Major infrastructure construction site"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        {/* Animated particles - decorative only */}
        <div className="particles-container" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }} />
          ))}
        </div>

        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight fade-in-up">
            Delivering Major<br />
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent gradient-text">
              Infrastructure Excellence
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto fade-in-up delay-1">
            Senior-level expertise for Queensland's most significant infrastructure projects
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-2">
            <Link href="/contact">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm hover-lift">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar with Animation */}
      <section
        className="bg-white border-y border-border py-8 relative overflow-hidden"
        aria-label="Key statistics"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-gradient" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 0.1}s` }} role="listitem">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 counter" aria-label={`${stat.value} ${stat.label}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos Carousel */}
      <CompanyLogos />

      {/* About Section */}
      <section className="py-20 bg-muted/30" aria-labelledby="about-heading">
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
                <Button variant="outline" className="hover-lift">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Engineers reviewing blueprints at an infrastructure construction site"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="container">
          <div className="text-center mb-12 fade-in">
            <h2 id="services-heading" className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive infrastructure consulting services for government and private sector clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={index} className="float-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="border-2 hover:border-primary transition-all duration-300 h-full card-3d">
                    <CardContent className="pt-6">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 icon-rotate" aria-hidden="true">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-12 fade-in delay-3">
            <Link href="/services">
              <Button variant="outline" size="lg" className="hover-lift">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30" aria-labelledby="projects-heading">
        <div className="container">
          <div className="text-center mb-12 fade-in">
            <h2 id="projects-heading" className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Major infrastructure projects delivered across Queensland and Australia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article key={index} className="float-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="h-48 overflow-hidden relative group">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-sm text-primary font-medium mb-2">{project.client}</div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 fade-in delay-3">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="hover-lift">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 animate-gradient" aria-hidden="true" />
        <div className="container text-center relative z-10">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6 fade-in">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto fade-in delay-1">
            Let's work together to deliver excellence in your next major infrastructure development
          </p>
          <div className="fade-in delay-2">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 hover-lift">
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
