import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import FloatingCard from "@/components/FloatingCard";
import SEO, { createPersonSchema, createOrganizationSchema, createBreadcrumbSchema } from "@/components/SEO";

export default function AboutAnimated() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality outcomes on every project",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Transparent, honest, and ethical in all our professional relationships",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients and stakeholders to achieve shared goals",
    },
  ];

  const experience = [
    {
      year: "2020 - Present",
      role: "Owner & Managing Director",
      company: "SGT Infrastructure Consulting Pty Ltd",
      description: "Founded boutique consultancy specializing in major infrastructure project delivery",
    },
    {
      year: "2023",
      role: "Project Director",
      company: "Sunwater",
      description: "Led Burdekin Falls Dam improvement and raising projects",
    },
    {
      year: "2018 - 2020",
      role: "Programme Delivery Director",
      company: "Australian Rail Track Corporation",
      description: "Oversaw delivery of Inland Rail programme across multiple states",
    },
    {
      year: "Previous",
      role: "Executive Director",
      company: "GoldlinQ",
      description: "Key leadership role in Gold Coast Light Rail project delivery",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Simon Thomas RPEQ - Infrastructure Consulting Expert"
        description="Meet Simon Graham Thomas, RPEQ - a Registered Professional Engineer Queensland with 35+ years of experience delivering major infrastructure projects including dams, rail, and transport across Australia and internationally."
        keywords={[
          'Simon Thomas RPEQ',
          'Registered Professional Engineer Queensland',
          'infrastructure consultant',
          'project management expert',
          'civil engineering professional',
          'dam engineering',
          'rail infrastructure expert',
          'SGT Infrastructure founder',
          'Queensland engineer',
          'infrastructure project director',
          'major projects consultant',
          'engineering experience Australia'
        ]}
        canonical="https://sgtinfrastructure.com.au/about"
        ogImage="/engineers-site.jpg"
        structuredData={[
          createPersonSchema(),
          createOrganizationSchema(),
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://sgtinfrastructure.com.au/' },
            { name: 'About', url: 'https://sgtinfrastructure.com.au/about' }
          ])
        ]}
      />
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/engineers-site.jpg')] bg-cover bg-center"
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">About SGT Infrastructure</h1>
            <p className="text-xl text-primary-foreground/90">
              Delivering senior-level expertise and proven results in major infrastructure 
              project management across Queensland and Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                SGT Infrastructure Consulting Pty Ltd is a Queensland-based boutique consultancy 
                specializing in major infrastructure project delivery. Founded in 2020, we bring 
                over 35 years of senior-level experience to every engagement.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike larger firms that delegate to junior staff, SGT provides direct access to 
                principal consultant Simon Thomas, ensuring consistent, high-quality strategic 
                guidance throughout your project lifecycle.
              </p>
              <p className="text-lg text-muted-foreground">
                Our focus is on complex, high-value infrastructure projects where experience, 
                judgment, and strategic thinking make the difference between success and failure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/engineers-site.jpg"
                alt="Infrastructure project site"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values with 3D Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FloatingCard key={index} delay={index * 0.1}>
                  <Card className="text-center h-full">
                    <CardContent className="pt-8">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </FloatingCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Direct engagement with experienced industry leadership
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-1"
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/headshot.png"
                    alt="Simon Thomas - Managing Director"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">Simon Graham Thomas</h3>
                  <p className="text-primary font-medium">CEng | RPEQ #8668</p>
                  <p className="text-muted-foreground">Managing Director</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:col-span-2 space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Simon Graham Thomas</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    A Registered Professional Engineer Queensland (RPEQ-8668) with over 35 years of experience 
                    in delivering major infrastructure projects across dams, rail, transport, mining, and civil 
                    engineering sectors.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Simon's career spans from foundation engineering on the UK's only nuclear reactor to leading 
                    billion-dollar infrastructure programmes across four continents. His expertise includes project 
                    and programme management, contract strategy, procurement, and stakeholder engagement.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Key Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">AIPM Project Director of the Year 2014</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Delivered $5B+ in major infrastructure projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Part Time Lecturing Fellow - Bond University</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Built and led teams of 200+ professionals</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Meet Our Founder</h2>
              <p className="text-lg text-muted-foreground">
                Simon Graham Thomas, RPEQ - Principal Consultant
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: GraduationCap, title: "Education", content: "Bachelor of Civil Engineering\nBond University (1986-1990)" },
                { icon: Briefcase, title: "Experience", content: "35+ Years in Major\nInfrastructure Projects" },
                { icon: Award, title: "Registration", content: "RPEQ #08668\nCivil Engineering" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <FloatingCard key={index} delay={index * 0.1}>
                    <Card className="text-center h-full">
                      <CardContent className="pt-6">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                          <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                        </motion.div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  </FloatingCard>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-muted-foreground mb-4">
                Simon Thomas is a highly experienced civil engineer and project director with a 
                distinguished career spanning over three decades in major infrastructure delivery. 
                As a Registered Professional Engineer of Queensland (RPEQ), Simon has led some of 
                the state's most significant infrastructure projects.
              </p>
              <p className="text-muted-foreground mb-4">
                His expertise encompasses project management, contracting strategy, construction 
                oversight, and design management across diverse infrastructure sectors including 
                water, transport, and rail. Simon's approach combines technical excellence with 
                strategic thinking, ensuring projects are delivered on time, within budget, and 
                to the highest quality standards.
              </p>
              <p className="text-muted-foreground">
                Through SGT Infrastructure Consulting, Simon provides clients with direct access 
                to senior-level expertise, offering the strategic guidance and hands-on leadership 
                that complex infrastructure projects demand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Timeline with Animations */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Career Highlights
            </motion.h2>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-px bg-border relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"
                    />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
                    <p className="text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto"
          >
            Bring senior-level expertise to your next major infrastructure project
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
