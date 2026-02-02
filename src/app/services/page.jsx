import Services from '../../components/Services/Services'
import Banner from '../../components/Banner/Banner'
import Support from '../../components/Support/Support'
import SubscriptionPlans from '../../components/SubscriptionPlans/SubscriptionPlans'

export const metadata = {
  title: 'IT Services & Web Development Packages in South Africa',
  description: 'Explore Arrow Smart Solutions\' comprehensive IT services and web development packages. Starter, Business, and Professional packages for small businesses. IT support plans with 24/7 assistance. Serving South Africa with affordable, reliable IT solutions.',
  keywords: [
    'IT services packages South Africa',
    'web development packages',
    'website packages R4999 R12000 R30000',
    'starter website package',
    'business website package',
    'professional website package',
    'IT support plans',
    'website maintenance plans',
    'basic support plan R499',
    'standard support plan R999',
    'priority support plan R1999',
    'small business website packages',
    'IT maintenance plans',
    'web design South Africa',
    'affordable website development',
    'e-commerce website development',
    'enterprise web development',
    'custom software development packages',
    'business software solutions South Africa',
    'web application development',
  ],
  openGraph: {
    title: 'IT Services & Web Development Packages | Arrow Smart Solutions',
    description: 'Comprehensive IT services and web development packages tailored for small businesses in South Africa. From starter websites to enterprise solutions.',
    images: ['/assets/hero1.png'],
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.co.za/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <Services />
      <SubscriptionPlans />
      <Support />
      <Banner />
    </main>
  )
}
