export default function StructuredData({ type = 'organization' }) {
  const baseUrl = 'https://arrowsmartsolutions.co.za'
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': baseUrl,
    name: 'Arrow Smart Solutions',
    description: 'Professional IT services and web development solutions for small businesses and individuals in South Africa.',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      // Add rating if available
    },
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
    serviceType: 'IT Services and Web Development',
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
      name: 'IT Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom website development and design services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Support',
            description: 'IT support and maintenance services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Network Security',
            description: 'Network security and antivirus solutions',
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
