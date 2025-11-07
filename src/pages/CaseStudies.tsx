import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Calendar,
  DollarSign,
  MapPin,
  Users,
  CheckCircle2,
  AlertTriangle,
  Target,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import PhotoGallery from "@/components/PhotoGallery";
import ProjectImageGallery from "@/components/ProjectImageGallery";
import SEO, { createBreadcrumbSchema } from "@/components/SEO";
import "../home-animations.css";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  duration: string;
  value?: string;
  role: string;
  image: string;
  overview: string;
  challenges: string[];
  approach: string[];
  outcomes: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      id: "sizewell-b",
      title: "Sizewell 'B' Nuclear Power Station",
      subtitle: "First Project - Foundation for a 35-Year Career",
      client: "Laing O'Rourke",
      location: "Suffolk, East Coast of England, UK",
      duration: "1988-1989",
      role: "Site Engineer",
      image: "/sizewell-b-construction.jpg",
      overview: "Simon's first project as a young civil engineer was the construction of the Sizewell B Nuclear Power Station, the UK's newest nuclear power station. This pressurized water reactor (PWR) project involved massive concrete structures and complex embedded systems. The reactor building base pour alone took over 6 months of steel fixing, formwork, and installation of complicated embedded items before a continuous 3-day pour of high strength concrete.",
      challenges: [
        "Working with high-strength concrete in a nuclear facility requiring extreme precision",
        "Managing complex embedded items and steel fixing for critical infrastructure",
        "Coordinating a continuous 3-day concrete pour for the reactor building base",
        "Operating in harsh elements of the East Coast of England",
        "Meeting stringent nuclear industry quality and safety standards",
        "Learning curve as a young engineer on a highly technical project"
      ],
      approach: [
        "12-hour days, 6 days a week commitment to project delivery",
        "Hands-on site engineering in challenging outdoor conditions",
        "Meticulous planning and coordination for the massive concrete pours",
        "Close collaboration with senior engineers and specialists",
        "Rigorous quality control and documentation processes",
        "Continuous learning and skill development in nuclear construction"
      ],
      outcomes: [
        "Successfully completed reactor building foundation - a true 'foundation for success'",
        "Gained invaluable experience in large-scale concrete placement methodologies",
        "Developed expertise in complex civil engineering in demanding environments",
        "Established strong work ethic and commitment to excellence",
        "Built lasting professional relationships - still in contact with supervisor Jez Porter",
        "Set the trajectory for a distinguished 35+ year career in major infrastructure"
      ],
      metrics: [
        { label: "Project Duration", value: "1+ Year" },
        { label: "Work Schedule", value: "12hrs/day, 6 days/week" },
        { label: "Reactor Base Pour", value: "3-Day Continuous" },
        { label: "Preparation Time", value: "6+ Months" }
      ],
      testimonial: {
        quote: "What a fantastic way to start my career, 36 years later and it's still the best project I have had the honour to work on. I loved every minute of it. Civil Engineering is a wonderful career.",
        author: "Simon Thomas",
        position: "Reflecting on his first project"
      },
      gallery: [
        { src: "/sizewell-construction-1.jpg", alt: "Sizewell B construction site overview", caption: "Aerial view of Sizewell B construction site" },
        { src: "/sizewell-construction-2.jpg", alt: "Reactor building under construction", caption: "The reactor building under construction" },
        { src: "/sizewell-construction-3.jpg", alt: "Steel reinforcing bars installation", caption: "Construction site with steel reinforcing bars prior to concrete pour" },
        { src: "/sizewell-construction-4.jpg", alt: "Tower crane view of construction", caption: "Cranes at construction of Sizewell B nuclear reactor" }
      ]
    },
    {
      id: "sheikh-zayed-mosque",
      title: "Sheikh Zayed Grand Mosque",
      subtitle: "3rd Largest Mosque in the World",
      client: "Hill International (Project Managers)",
      location: "Abu Dhabi, United Arab Emirates",
      duration: "2001-2003",
      value: "Multi-Billion AED",
      role: "Construction Planning Manager",
      image: "/sheikh-zayed-mosque-construction.jpg",
      overview: "The Sheikh Zayed Grand Mosque is one of the world's largest mosques and a masterpiece of modern Islamic architecture. As Construction Planning Manager, Simon was responsible for planning and coordinating this iconic project featuring high-strength reinforced concrete structures, intricate marble finishes, and capacity for over 40,000 worshippers. The project combined cutting-edge engineering with traditional Islamic design principles.",
      challenges: [
        "Managing planning for 50,000m³ of high-strength concrete placement",
        "Coordinating complex marble finishing works to exacting standards",
        "Planning for a structure accommodating 40,000+ worshippers",
        "Working in Abu Dhabi's extreme heat conditions",
        "Integrating modern engineering with traditional Islamic architectural requirements",
        "Coordinating multiple specialized contractors and consultants",
        "Meeting the vision of a project of national and religious significance"
      ],
      approach: [
        "Comprehensive construction planning and scheduling using advanced methodologies",
        "Specialized planning for large concrete placements in hot climate conditions",
        "Detailed coordination of marble installation and finishing works",
        "Integration of structural, architectural, and MEP systems planning",
        "Proactive stakeholder management and progress reporting",
        "Risk management and contingency planning for complex elements",
        "Quality assurance planning for high-end finishes and materials"
      ],
      outcomes: [
        "Successful delivery of the 3rd largest mosque in the world",
        "Flawless execution of massive concrete and marble works",
        "Created an iconic landmark combining engineering excellence with cultural significance",
        "Demonstrated expertise in mega-project planning in challenging environments",
        "Established reputation for delivering culturally sensitive projects",
        "Gained extensive experience in Middle East construction practices",
        "Project recognized globally as an architectural and engineering masterpiece"
      ],
      metrics: [
        { label: "Concrete Volume", value: "50,000m³" },
        { label: "Worshipper Capacity", value: "40,000+" },
        { label: "World Ranking", value: "3rd Largest Mosque" },
        { label: "Project Duration", value: "2+ Years" }
      ],
      technologies: [
        "High-strength reinforced concrete",
        "Advanced marble finishing systems",
        "Specialized foundation systems",
        "Integrated MEP systems",
        "Primavera P6 scheduling"
      ],
      gallery: [
        { src: "/mosque-construction-1.jpg", alt: "Sheikh Zayed Grand Mosque aerial construction view", caption: "Aerial view showing the scale of the mosque construction" },
        { src: "/mosque-construction-2.jpg", alt: "Mosque construction progress", caption: "Construction progress showing domes and minarets" },
        { src: "/mosque-construction-3.jpg", alt: "Completed Sheikh Zayed Grand Mosque", caption: "The completed Sheikh Zayed Grand Mosque" },
        { src: "/mosque-interior.jpg", alt: "Interior of Sheikh Zayed Grand Mosque", caption: "Stunning interior with marble finishes and chandelier" }
      ]
    },
    {
      id: "burdekin-falls-dam",
      title: "Burdekin Falls Dam Improvement Program",
      subtitle: "Queensland's Largest Dam Upgrade",
      client: "Sunwater",
      location: "North Queensland, Australia",
      duration: "2022-Present",
      value: "$1B+ Programme",
      role: "Project Director",
      image: "/dam-project.jpg",
      overview: "As Project Director for Sunwater's Dam Improvement Program, Simon leads the upgrade of 19 referable dams across Queensland, with the Burdekin Falls Dam raising being the flagship project. This involves 400,000m³ of concrete, 4,000,000m³ of earthworks, and 80km of road construction in remote North Queensland. The program ensures long-term dam viability and meets modern engineering standards while managing complex environmental and cultural heritage approvals.",
      challenges: [
        "Managing a $1B+ programme across 19 dam sites statewide",
        "Coordinating 400,000m³ concrete and 4,000,000m³ earthworks for Burdekin Dam",
        "Working in remote North Queensland with extreme heat conditions",
        "Navigating complex environmental and cultural heritage approvals",
        "Constructing 80km of access roads in challenging terrain",
        "Coordinating multiple stakeholder groups (15+) including government agencies",
        "Maintaining dam operations while conducting major upgrade works",
        "Managing technical complexity of raising an existing major dam"
      ],
      approach: [
        "Strategic programme management across multiple dam sites",
        "Specialized concrete placement methodologies for remote, hot conditions",
        "Comprehensive stakeholder engagement and approvals management",
        "Proactive environmental and cultural heritage management",
        "Alliance delivery model for collaborative project execution",
        "Building and leading high-performing multidisciplinary teams",
        "Industry briefings and knowledge sharing with engineering community",
        "Innovative construction methodologies and value engineering"
      ],
      outcomes: [
        "Successfully managing Queensland's largest dam improvement programme",
        "Securing complex environmental and cultural heritage approvals",
        "Building high-performing team delivering to schedule and budget",
        "Conducting multiple industry briefings sharing technical knowledge",
        "Ensuring long-term viability of critical water infrastructure",
        "Demonstrating expertise in large-scale concrete works in remote locations",
        "Strengthening Queensland's water security for agriculture and communities",
        "Establishing new standards for dam improvement projects in Australia"
      ],
      metrics: [
        { label: "Programme Value", value: "$1B+" },
        { label: "Concrete Volume", value: "400,000m³" },
        { label: "Earthworks", value: "4,000,000m³" },
        { label: "Road Construction", value: "80km" },
        { label: "Dam Sites", value: "19 Dams" },
        { label: "Stakeholder Groups", value: "15+" }
      ],
      technologies: [
        "Advanced concrete placement systems",
        "Earthworks and compaction technology",
        "Dam safety monitoring systems",
        "Environmental monitoring systems",
        "Alliance project management systems"
      ]
    },
    {
      id: "inland-rail",
      title: "Inland Rail Programme",
      subtitle: "Australia's Largest Freight Rail Project",
      client: "Australian Rail Track Corporation (ARTC)",
      location: "Melbourne to Brisbane, Multi-State",
      duration: "2015-2018",
      value: "$10B+ Programme",
      role: "Programme Delivery Director",
      image: "/inland-rail-project.jpg",
      overview: "As Programme Delivery Director for Inland Rail, Simon was responsible for all feasibility, detail design, approvals, procurement, and construction activities for Australia's largest freight rail infrastructure project. The programme involved 1,000km+ of upgrade works, 400km of new dual gauge railway, and a 6km tunnel through the Great Dividing Range. Simon built a team of 200+ personnel and awarded over $800m in design and construction contracts.",
      challenges: [
        "Managing a $10B+ multi-state infrastructure programme",
        "Coordinating 1,000km+ of rail upgrades and 400km of new railway construction",
        "Planning and delivering a 6km tunnel through the Great Dividing Range",
        "Building and managing a team of 200+ specialized personnel",
        "Securing environmental approvals across multiple states and jurisdictions",
        "Coordinating with numerous stakeholders including state and federal governments",
        "Managing $150m+ in design contracts and $300m+ in construction packages",
        "Integrating new railway with existing operational rail network"
      ],
      approach: [
        "Strategic programme management across three states (Victoria, NSW, Queensland)",
        "Rapid team building from startup to 200+ personnel",
        "Comprehensive procurement strategy for design and construction packages",
        "Proactive stakeholder engagement with government and community",
        "Detailed feasibility studies and business case development",
        "Integrated design management across multiple consultants",
        "Risk management and approvals strategy for complex multi-state project",
        "Innovation in rail design and construction methodologies"
      ],
      outcomes: [
        "Successfully established and led 200+ person programme delivery team",
        "Awarded $150m+ in design contracts and $300m+ in construction packages",
        "Secured critical environmental and planning approvals",
        "Advanced Australia's largest freight rail project through key milestones",
        "Demonstrated capability in mega-project programme management",
        "Established frameworks for multi-state infrastructure coordination",
        "Created lasting legacy in Australian rail infrastructure",
        "Built strong relationships with government and industry stakeholders"
      ],
      metrics: [
        { label: "Programme Value", value: "$10B+" },
        { label: "Rail Upgrades", value: "1,000km+" },
        { label: "New Railway", value: "400km" },
        { label: "Tunnel Length", value: "6km" },
        { label: "Team Size", value: "200+ Personnel" },
        { label: "Design Contracts", value: "$150M+" },
        { label: "Construction Packages", value: "$300M+" }
      ],
      technologies: [
        "Dual gauge railway systems",
        "Tunnel boring technology",
        "Advanced rail signalling",
        "Bridge and structure design",
        "Environmental monitoring systems",
        "Programme management systems"
      ]
    },
    {
      id: "wiggins-island",
      title: "Wiggins Island Rail Project",
      subtitle: "AIPM Project Director of the Year 2014",
      client: "Aurizon",
      location: "Gladstone, Queensland",
      duration: "2011-2014",
      value: "$904M Project",
      role: "Project Director",
      image: "/wiggins-island-terminal.jpg",
      overview: "As Project Director for the Wiggins Island Rail Project, Simon led the delivery of a $904M rail infrastructure project connecting the new Wiggins Island Coal Export Terminal to the existing rail network. The project included a $350M signalling partnership with Invensys Rail and required complex coordination with port operations, existing rail infrastructure, and multiple stakeholders. Simon's exceptional leadership earned him the AIPM Project Director of the Year 'High Commendation' award in 2014.",
      challenges: [
        "Managing a $904M complex rail infrastructure project",
        "Coordinating a $350M signalling partnership with Invensys Rail",
        "Integrating new rail infrastructure with operational port and rail systems",
        "Managing interface between coal terminal construction and rail delivery",
        "Coordinating multiple contractors and specialized suppliers",
        "Maintaining existing rail operations during construction",
        "Meeting aggressive schedule for coal export terminal commissioning",
        "Managing commercial and technical complexity of signalling systems"
      ],
      approach: [
        "Strong project leadership and team development",
        "Strategic partnership management with Invensys Rail",
        "Integrated project planning and coordination",
        "Proactive stakeholder and interface management",
        "Commercial acumen in contract and partnership negotiations",
        "Risk management and issue resolution",
        "Quality assurance and safety leadership",
        "Innovation in rail construction methodologies"
      ],
      outcomes: [
        "Successful delivery of $904M rail infrastructure project",
        "Awarded AIPM Project Director of the Year 'High Commendation' 2014",
        "Delivered complex signalling partnership worth $350M",
        "Enabled operation of major new coal export terminal",
        "Demonstrated exceptional project leadership and commercial management",
        "Established reputation as leading rail infrastructure project director",
        "Created lasting infrastructure supporting Queensland's coal export industry",
        "Recognized by industry peers for outstanding project delivery"
      ],
      metrics: [
        { label: "Project Value", value: "$904M" },
        { label: "Signalling Partnership", value: "$350M" },
        { label: "Award", value: "AIPM Project Director 2014" },
        { label: "Project Duration", value: "3+ Years" }
      ],
      technologies: [
        "Advanced railway signalling systems",
        "Rail track and civil works",
        "Integrated control systems",
        "Port interface infrastructure",
        "Project management systems"
      ],
      testimonial: {
        quote: "Simon is an expert and leader in the civil and construction arena. He is a talented, strategic, passionate and insightful Project Director and Leader. He has great dedication and a commitment to getting the job done right that ensures projects are successful. I can't recommend Simon highly enough as a leader.",
        author: "Sonia McDonald",
        position: "CEO & Founder, LeadershipHQ"
      }
    },
    {
      id: "gold-coast-light-rail",
      title: "Gold Coast Light Rail Stage 3",
      subtitle: "PPP Delivery Model Excellence",
      client: "GoldlinQ",
      location: "Gold Coast, Queensland",
      duration: "2020-2022",
      value: "$700M Project",
      role: "Project Director",
      image: "/gold-coast-light-rail.jpg",
      overview: "As Project Director for Gold Coast Light Rail Stage 3, Simon oversaw the delivery of 6km of new track and stations between Broadbeach and Burleigh Heads under a PPP (Public-Private Partnership) delivery model. The project required close coordination with the D&C Contractor, State Government, and Gold Coast City Council while maintaining operations on the existing light rail network.",
      challenges: [
        "Managing a $700M PPP project with complex stakeholder relationships",
        "Overseeing D&C Contractor delivering 6km of new light rail",
        "Coordinating with State Government and Gold Coast City Council",
        "Integrating new infrastructure with existing operational light rail system",
        "Managing construction in busy urban corridor (Broadbeach to Burleigh)",
        "Minimizing disruption to businesses and residents",
        "Ensuring seamless transition to operations",
        "Balancing public and private sector interests in PPP model"
      ],
      approach: [
        "Strategic oversight of D&C Contractor performance",
        "Comprehensive stakeholder engagement with government and community",
        "PPP governance and commercial management",
        "Integration planning with existing light rail operations",
        "Urban construction management and traffic coordination",
        "Quality assurance and project controls",
        "Risk management across design, construction, and operations interfaces",
        "Collaborative problem-solving with all project parties"
      ],
      outcomes: [
        "Successful delivery of 6km light rail extension",
        "Seamless integration with existing Gold Coast Light Rail network",
        "Effective management of PPP delivery model",
        "Strong stakeholder relationships with government and community",
        "Enhanced public transport connectivity on Gold Coast",
        "Demonstrated expertise in light rail and PPP projects",
        "Minimal disruption to existing operations and community",
        "Created lasting infrastructure benefiting Gold Coast residents and visitors"
      ],
      metrics: [
        { label: "Project Value", value: "$700M" },
        { label: "New Track", value: "6km" },
        { label: "Delivery Model", value: "PPP" },
        { label: "Project Duration", value: "2+ Years" }
      ],
      technologies: [
        "Light rail track and systems",
        "Station infrastructure",
        "Overhead power systems",
        "Integrated control systems",
        "Urban construction methodologies"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Projects - Major Infrastructure Portfolio and Case Studies"
        description="Explore our projects portfolio with detailed case studies across dams, rail, and transport infrastructure including Burdekin Falls Dam, Gold Coast Light Rail, and Inland Rail. Real-world examples of successful delivery."
        keywords={[
          'infrastructure case studies',
          'infrastructure projects portfolio',
          'dam construction projects',
          'rail infrastructure projects',
          'Burdekin Falls Dam',
          'Gold Coast Light Rail',
          'Inland Rail',
          'major infrastructure delivery',
          'projects Queensland',
          'civil engineering projects',
          'infrastructure project examples',
          'successful infrastructure delivery',
          'transport infrastructure projects',
          'water infrastructure projects'
        ]}
        canonical="https://sgtinfrastructure.com.au/projects"
        structuredData={[
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://sgtinfrastructure.com.au/' },
            { name: 'Projects', url: 'https://sgtinfrastructure.com.au/projects' }
          ])
        ]}
      />
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-primary-foreground/90">
              In-depth analysis of significant infrastructure projects spanning 35+ years 
              from nuclear power stations to major dam improvements across three continents.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section 
          key={study.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-12 fade-in">
                <h2 className="text-4xl font-bold mb-3">{study.title}</h2>
                <p className="text-xl text-muted-foreground mb-6">{study.subtitle}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Client</div>
                      <div className="font-semibold">{study.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold">{study.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{study.duration}</div>
                    </div>
                  </div>
                  {study.value && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Value</div>
                        <div className="font-semibold">{study.value}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">Role: </span>
                    <span className="font-semibold">{study.role}</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mb-12 fade-in">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12 fade-in">
                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {study.overview}
                </p>
              </div>

              {/* Photo Gallery */}
              {study.gallery && study.gallery.length > 0 && (
                <div className="mb-12 fade-in">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <PhotoGallery photos={study.gallery} columns={4} />
                </div>
              )}

              {/* Three Column Section */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Challenges */}
                <Card className="floating-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-xl font-semibold">The Challenge</h3>
                    </div>
                    <ul className="space-y-3">
                      {study.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Approach */}
                <Card className="floating-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Our Approach</h3>
                    </div>
                    <ul className="space-y-3">
                      {study.approach.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Outcomes */}
                <Card className="floating-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Results</h3>
                    </div>
                    <ul className="space-y-3">
                      {study.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Metrics */}
              <div className="mb-12 fade-in">
                <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {study.metrics.map((metric, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              {study.technologies && (
                <div className="mb-12 fade-in">
                  <h3 className="text-2xl font-bold mb-6">Technologies & Systems</h3>
                  <div className="flex flex-wrap gap-3">
                    {study.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {study.testimonial && (
                <div className="fade-in">
                  <Card className="bg-primary/5 border-l-4 border-primary">
                    <CardContent className="pt-6">
                      <p className="text-lg italic text-muted-foreground mb-4">
                        "{study.testimonial.quote}"
                      </p>
                      <div className="font-semibold">{study.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {study.testimonial.position}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Project Image Gallery */}
      <ProjectImageGallery />

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Bring the same level of expertise and commitment to your infrastructure project.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
