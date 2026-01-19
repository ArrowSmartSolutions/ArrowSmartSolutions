export default function StructuredData({ type = 'organization' }) {
  const baseUrl = 'https://arrowsmartsolutions.co.za'
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': baseUrl,
    name: 'Arrow Smart Solutions',
    description: 'Arrow Smart Solutions provides professional software and web development packages and ongoing support for businesses in South Africa. From affordable starter websites to enterprise-grade solutions, we build and maintain your online presence with expert care.',
    url: baseUrl,
    logo: `${baseUrl}/assets/theicon2.png`,
    image: `${baseUrl}/assets/hero.png`,
    telephone: '', // Add your phone number
    email: '', // Add your email
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressLocality: 'South Africa',
      // Add specific address if available
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add coordinates if available
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    serviceArea: {
      '@type': 'Country',
      name: 'South Africa',
    },
    priceRange: '$$',
    openingHours: 'Mo-Fr 08:00-17:00',
    sameAs: [
      'https://www.instagram.com/arrowsmartsolutions',
      'https://x.com/arrowsmartlife',
      'https://wa.me/message/KWXXB2FOPACRM1',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Arrow Smart Solutions',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software and Web Development and Support Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Arrow Smart Solutions',
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software and Web Development and Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software and Web Development Packages',
            description: 'Professional software and web development packages from starter to enterprise solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ongoing Software and Web Support',
            description: 'Software and website support, updates, and maintenance plans',
          },
        },
      ],
    },
  }

  let schema = organizationSchema
  if (type === 'website') {
    schema = websiteSchema
  } else if (type === 'service') {
    schema = serviceSchema
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
