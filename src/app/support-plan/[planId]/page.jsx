import SupportDetailClient from '../../../pages/SupportDetail'

export async function generateStaticParams() {
  return [
    { planId: 'basic' },
    { planId: 'standard' },
    { planId: 'priority' },
  ]
}

export async function generateMetadata({ params }) {
  const { planId } = params
  
  const metadataMap = {
    basic: {
      title: 'Basic IT Support Plan R499/month | Website Maintenance South Africa',
      description: 'Basic IT Support Plan for R499/month. Essential maintenance for new websites and small projects. Includes monthly security patches, CMS core updates, daily database backups, 24-hour email support, uptime monitoring, and basic performance reports. Affordable website maintenance in South Africa.',
      keywords: [
        'basic IT support plan South Africa',
        'website maintenance R499',
        'monthly website support',
        'basic website maintenance',
        'security patches South Africa',
        'website backup service',
        'affordable IT support',
        'small business IT maintenance',
        'website monitoring service',
        'web development support basic',
        'software maintenance plan',
      ],
    },
    standard: {
      title: 'Standard IT Support Plan R999/month | Website Support & Updates South Africa',
      description: 'Standard IT Support Plan for R999/month. Popular choice for growing businesses. Includes everything in Basic plus 2 hours/month content updates, performance monitoring, 12-hour priority email support, SEO monitoring, and advanced performance reports. Comprehensive website support for South African businesses.',
      keywords: [
        'standard IT support plan South Africa',
        'website support plan R999',
        'content updates service',
        'performance monitoring website',
        'SEO monitoring service',
        'priority IT support',
        'website maintenance plan',
        'business website support',
        'monthly website updates',
        'web development support standard',
        'software updates service',
      ],
    },
    priority: {
      title: 'Priority IT Support Plan R1,999/month | Premium Website Support South Africa',
      description: 'Priority IT Support Plan for R1,999/month. Premium support for mission-critical websites and high-traffic platforms. Includes 2-hour emergency hotfixes, advanced SEO monitoring, monthly technical consultations, unlimited content updates, proactive issue detection, and 24/7 priority support. Enterprise website support in South Africa.',
      keywords: [
        'priority IT support plan South Africa',
        'premium website support R1999',
        'emergency website hotfixes',
        '24/7 IT support South Africa',
        'enterprise website support',
        'advanced SEO monitoring',
        'dedicated technical support',
        'high-traffic website support',
        'mission-critical website support',
        'web development support priority',
        'enterprise software support',
      ],
    },
  }
  
  const metadata = metadataMap[planId] || {
    title: 'IT Support Plans | Arrow Smart Solutions',
    description: 'Explore our IT support and maintenance plans for websites in South Africa.',
  }
  
  return {
    ...metadata,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: ['/assets/hero1.png'],
    },
    alternates: {
      canonical: `https://arrowsmartsolutions.com/support-plan/${planId}`,
    },
  }
}

export default function SupportDetailPage({ params }) {
  return <SupportDetailClient planId={params.planId} />
}
