import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  canonical?: string;
  structuredData?: object | object[];
  noindex?: boolean;
}

const defaultSEO = {
  siteName: 'SGT Infrastructure Consulting',
  defaultTitle: 'SGT Infrastructure Consulting | Expert Project Management & Civil Engineering',
  defaultDescription: 'Simon Thomas RPEQ provides expert infrastructure consulting, project management, and civil engineering services across Queensland, Australia. Specializing in major infrastructure projects including dams, rail, and transport.',
  defaultKeywords: [
    'infrastructure consulting',
    'project management',
    'civil engineering',
    'RPEQ',
    'Queensland',
    'Australia',
    'Simon Thomas',
    'SGT Infrastructure',
    'major projects',
    'construction management'
  ],
  defaultImage: '/og-image.jpg',
  siteUrl: 'https://sgtinfrastructure.com.au',
  twitterHandle: '@sgtinfra'
};

export default function SEO({
  title,
  description = defaultSEO.defaultDescription,
  keywords = defaultSEO.defaultKeywords,
  ogTitle,
  ogDescription,
  ogImage = defaultSEO.defaultImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = defaultSEO.twitterHandle,
  twitterCreator = defaultSEO.twitterHandle,
  canonical,
  structuredData,
  noindex = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.defaultTitle;

  const fullOgTitle = ogTitle || title || defaultSEO.defaultTitle;
  const fullOgDescription = ogDescription || description;
  const fullOgUrl = ogUrl || canonical || defaultSEO.siteUrl;
  const fullCanonical = canonical || defaultSEO.siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={fullOgTitle} />
      <meta property="og:description" content={fullOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullOgUrl} />
      <meta property="twitter:title" content={fullOgTitle} />
      <meta property="twitter:description" content={fullOgDescription} />
      <meta property="twitter:image" content={ogImage} />
      {twitterSite && <meta property="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta property="twitter:creator" content={twitterCreator} />}

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="AU-QLD" />
      <meta name="geo.placename" content="Coomera, Queensland" />
      <meta name="geo.position" content="-27.8625;153.3221" />
      <meta name="ICBM" content="-27.8625, 153.3221" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Simon Thomas, RPEQ" />
      <meta name="copyright" content="SGT Infrastructure Consulting" />
      <meta name="language" content="English" />
      <meta name="rating" content="General" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(structuredData) ? structuredData : [structuredData]
          )}
        </script>
      )}
    </Helmet>
  );
}

// Reusable structured data schemas
export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SGT Infrastructure Consulting",
  "image": `${defaultSEO.siteUrl}/logo.png`,
  "url": defaultSEO.siteUrl,
  "telephone": "+61-XXX-XXX-XXX", // Update with actual phone
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Coomera",
    "addressLocality": "Gold Coast",
    "addressRegion": "QLD",
    "postalCode": "4209",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.8625,
    "longitude": 153.3221
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sgt-infrastructure",
    // Add other social media profiles
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -27.4705,
      "longitude": 153.0260
    },
    "geoRadius": "500000" // 500km radius
  },
  "serviceType": [
    "Infrastructure Consulting",
    "Project Management",
    "Civil Engineering",
    "Construction Management"
  ]
});

export const createPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Simon Graham Thomas",
  "honorificSuffix": "RPEQ",
  "jobTitle": "Principal Consultant & Registered Professional Engineer Queensland",
  "worksFor": {
    "@type": "Organization",
    "name": "SGT Infrastructure Consulting"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Various Engineering Institutions"
    }
  ],
  "knowsAbout": [
    "Infrastructure Project Management",
    "Civil Engineering",
    "Dam Construction",
    "Rail Infrastructure",
    "Transport Projects",
    "Construction Management"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coomera",
    "addressRegion": "Queensland",
    "addressCountry": "Australia"
  },
  "url": defaultSEO.siteUrl
});

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SGT Infrastructure Consulting",
  "alternateName": "SGT Infrastructure",
  "url": defaultSEO.siteUrl,
  "logo": `${defaultSEO.siteUrl}/logo.png`,
  "description": "Expert infrastructure consulting and project management services specializing in major civil engineering projects across Queensland and Australia.",
  "founder": {
    "@type": "Person",
    "name": "Simon Graham Thomas",
    "honorificSuffix": "RPEQ"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coomera",
    "addressRegion": "Queensland",
    "addressCountry": "Australia"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "AU",
    "availableLanguage": ["English"]
  }
});

export const createServiceSchema = (service: {
  name: string;
  description: string;
  areaServed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "description": service.description,
  "provider": {
    "@type": "ProfessionalService",
    "name": "SGT Infrastructure Consulting"
  },
  "areaServed": service.areaServed || "Queensland, Australia"
});

export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
