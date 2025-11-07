import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Building2, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
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
      image: "/dam-project.jpg",
    },
    {
      title: "Gold Coast Light Rail",
      client: "GoldlinQ",
      description: "Executive Director role in delivering Queensland's premier light rail system.",
      image: "/project-construction.jpg",
    },
    {
      title: "Inland Rail Programme",
      client: "Australian Rail Track Corporation",
      description: "Programme Delivery Director for Australia's largest freight rail infrastructure project.",
      image: "/engineers-site.jpg",
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
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero-infrastructure.webp)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        {/* Animated boxes background overlay */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <Boxes className="opacity-40 z-10" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Delivering Major<br />Infrastructure Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Senior-level expertise for Queensland's most significant infrastructure projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-border py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Trusted Expertise in Major Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 35 years of experience leading billion-dollar infrastructure projects, 
                Simon Thomas and SGT Infrastructure Consulting bring senior-level expertise to 
                Queensland's most challenging developments.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Proven Track Record</h3>
                    <p className="text-muted-foreground">Successfully delivered major projects for government and private sector clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">RPEQ Registered</h3>
                    <p className="text-muted-foreground">Registered Professional Engineer of Queensland (Civil Engineering)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Senior-Level Focus</h3>
                    <p className="text-muted-foreground">Direct engagement with principal consultant, not junior staff</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button variant="outline">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/engineers-site.jpg"
                alt="Infrastructure project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive infrastructure consulting services for government and private sector clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Major infrastructure projects delivered across Queensland and Australia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.client}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's work together to deliver excellence in your next major infrastructure development
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
