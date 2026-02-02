import Services from '../../components/Services/Services'
import Banner from '../../components/Banner/Banner'

export const metadata = {
  title: 'Website Packages | Arrow Smart Solutions',
  description: 'Explore our flexible web development packages for startups, SMEs, and growing businesses in South Africa.',
  keywords: [
    'website packages South Africa',
    'starter website package',
    'business website package',
    'professional website package',
    'web development packages',
    'custom website design',
    'small business web design',
  ],
  openGraph: {
    title: 'Website Packages | Arrow Smart Solutions',
    description: 'Flexible web development packages tailored for South African businesses.',
    images: ['/assets/hero1.png'],
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.co.za/packages',
  },
}

export default function PackagesPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <Services />
      <Banner />
    </main>
  )
}
