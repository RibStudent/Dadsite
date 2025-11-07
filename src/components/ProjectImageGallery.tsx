import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import PhotoGallery from "./PhotoGallery";

interface GallerySection {
  title: string;
  category: string;
  description: string;
  photos: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

const gallerySections: GallerySection[] = [
  {
    title: "Sheikh Zayed Grand Mosque",
    category: "Religious/Cultural Heritage",
    description: "Managing construction of the 3rd largest mosque in the world - Abu Dhabi, UAE (2002-2004)",
    photos: [
      {
        src: "/sheikh-zayed-mosque-construction.jpg",
        alt: "Sheikh Zayed Mosque Construction",
        caption: "Main construction phase - Managing over 50,000m³ of concrete placement"
      },
      {
        src: "/mosque-construction-1.jpg",
        alt: "Mosque Dome Construction",
        caption: "Precast dome installation - Complex engineering coordination"
      },
      {
        src: "/mosque-construction-2.jpg",
        alt: "Structural Engineering Phase",
        caption: "Structural elements and architectural detail work"
      },
      {
        src: "/mosque-construction-3.jpg",
        alt: "Construction Site Management",
        caption: "International team coordination and planning management"
      },
      {
        src: "/mosque-interior.jpg",
        alt: "Completed Mosque Interior",
        caption: "World heritage site - Architectural excellence achieved"
      }
    ]
  },
  {
    title: "Sizewell B Nuclear Power Station",
    category: "Energy Infrastructure",
    description: "UK's only pressurised water reactor - Foundation engineering excellence (1988-1990)",
    photos: [
      {
        src: "/sizewell-b-construction.jpg",
        alt: "Sizewell B Nuclear Reactor",
        caption: "Nuclear reactor construction - Highest safety standards"
      },
      {
        src: "/sizewell-construction-1.jpg",
        alt: "Foundation Engineering",
        caption: "Complex foundation work for landmark energy project"
      }
    ]
  },
  {
    title: "Queensland Dam Infrastructure",
    category: "Water Resources",
    description: "Major water infrastructure projects including Burdekin Falls Dam raising",
    photos: [
      {
        src: "/burdekin-dam-1.jpg",
        alt: "Burdekin Falls Dam",
        caption: "Queensland's largest dam raising project - 18+ million megalitres capacity"
      },
      {
        src: "/burdekin-dam-2.jpg",
        alt: "Dam Construction Works",
        caption: "400,000m³ concrete and 4,000,000m³ earthworks"
      },
      {
        src: "/dam-project.jpg",
        alt: "Dam Engineering Excellence",
        caption: "Critical water resource infrastructure development"
      }
    ]
  },
  {
    title: "Rail & Transport Infrastructure",
    category: "Transportation",
    description: "Nation-building rail projects from Inland Rail to mining infrastructure",
    photos: [
      {
        src: "/inland-rail-project.jpg",
        alt: "Inland Rail Programme",
        caption: "1,700km Melbourne to Brisbane freight rail programme"
      },
      {
        src: "/inland-rail-1.jpg",
        alt: "Rail Infrastructure Development",
        caption: "Federal government transformational infrastructure"
      },
      {
        src: "/carmichael-rail.jpg",
        alt: "Adani Railway Project",
        caption: "210km heavy haul railway with 32 bridges - $1.2B project"
      },
      {
        src: "/gold-coast-light-rail.jpg",
        alt: "Gold Coast Light Rail",
        caption: "Major urban transport infrastructure - PPP delivery"
      },
      {
        src: "/houghton-highway-bridge.jpg",
        alt: "Houghton Highway Bridge",
        caption: "2.4km road bridge - Major transport link"
      }
    ]
  },
  {
    title: "Mining & Export Infrastructure",
    category: "Resources Sector",
    description: "Major export terminal and mining infrastructure development",
    photos: [
      {
        src: "/wiggins-island-terminal.jpg",
        alt: "Wiggins Island Coal Terminal",
        caption: "27MTPA export capacity - $904M EPCM project (AIPM Award Winner)"
      },
      {
        src: "/wiggins-terminal-1.jpg",
        alt: "Terminal Development",
        caption: "Major export infrastructure - Alliance delivery excellence"
      }
    ]
  },
  {
    title: "Project Management Excellence",
    category: "Leadership & Education",
    description: "On-site leadership and knowledge transfer to next generation",
    photos: [
      {
        src: "/engineers-site.jpg",
        alt: "Site Engineering Leadership",
        caption: "Leading multidisciplinary teams on major projects"
      },
      {
        src: "/project-construction.jpg",
        alt: "Construction Management",
        caption: "Hands-on project delivery and team coordination"
      },
      {
        src: "/bond-university-lecture.jpg",
        alt: "Bond University Teaching",
        caption: "Part Time Lecturing Fellow - Educating future project managers"
      }
    ]
  }
];

export default function ProjectImageGallery() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Visual journey through landmark infrastructure projects across four continents
          </p>
        </motion.div>

        <div className="space-y-12">
          {gallerySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 shadow-sm"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                  <Badge variant="secondary">{section.category}</Badge>
                </div>
                <p className="text-muted-foreground">{section.description}</p>
              </div>

              {/* Thumbnail Grid or Expanded Gallery */}
              {expandedSection === section.title ? (
                <div>
                  <PhotoGallery photos={section.photos} columns={3} />
                  <button
                    onClick={() => setExpandedSection(null)}
                    className="mt-4 text-primary hover:underline text-sm"
                  >
                    Show less
                  </button>
                </div>
              ) : (
                <div>
                  {/* Show first 3 images as preview */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {section.photos.slice(0, 3).map((photo, photoIndex) => (
                      <div
                        key={photoIndex}
                        className="aspect-video relative overflow-hidden rounded-lg group cursor-pointer"
                        onClick={() => setExpandedSection(section.title)}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                  {section.photos.length > 3 && (
                    <button
                      onClick={() => setExpandedSection(section.title)}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      View all {section.photos.length} photos →
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}