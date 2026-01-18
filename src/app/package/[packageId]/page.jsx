import PackageDetailClient from '../../../pages/PackageDetail'

export async function generateStaticParams() {
  return [
    { packageId: 'starter' },
    { packageId: 'business' },
    { packageId: 'professional' },
  ]
}

export async function generateMetadata({ params }) {
  const { packageId } = params
  
  const metadataMap = {
    starter: {
      title: 'Starter Website Package R4,999-R8,000 | Affordable Web Design South Africa',
      description: 'Starter Website Package from R4,999-R8,000. Perfect for freelancers, small local businesses, startups & bloggers. Includes responsive web design, basic SEO setup, CMS, up to 5 pages, and mobile-first approach. Get started with affordable web development in South Africa.',
    },
    business: {
      title: 'Business Website Package R12,000-R25,000 | E-commerce Web Development South Africa',
      description: 'Business Website Package from R12,000-R25,000. Ideal for growing businesses and e-commerce stores. Includes custom feature development, basic e-commerce integration, advanced analytics, up to 15 pages, and priority support. Professional web development for South African businesses.',
    },
    professional: {
      title: 'Professional Website Package R30,000-R60,000+ | Enterprise Web Development South Africa',
      description: 'Professional Website Package from R30,000-R60,000+. Enterprise-grade solutions for SaaS companies and large businesses. Includes enterprise security, API development, custom web applications, dedicated account manager, and unlimited pages. Premium web development in South Africa.',
    },
  }
  
  const metadata = metadataMap[packageId] || {
    title: 'Website Packages | Arrow Smart Solutions',
    description: 'Explore our website development packages for businesses in South Africa.',
  }
  
  return {
    ...metadata,
    keywords: metadataMap[packageId]?.keywords || [],
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: ['/assets/hero.png'],
    },
    alternates: {
      canonical: `https://arrowsmartsolutions.com/package/${packageId}`,
    },
  }
}

export default function PackageDetailPage({ params }) {
  return <PackageDetailClient packageId={params.packageId} />
}
