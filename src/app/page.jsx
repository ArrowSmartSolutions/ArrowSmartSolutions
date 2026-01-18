import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import Support from '../components/Support/Support'
import WhyPartner from '../components/WhyPartner/WhyPartner'
import FindFit from '../components/FindFit/FindFit'
import Promotion from '../components/Promotion/Promotion'
import HomeAccordions from '../components/HomeAccordions/HomeAccordions'

export const metadata = {
  title: 'Professional IT Services & Web Development in South Africa',
  description: 'Arrow Smart Solutions provides affordable IT services, web development, and technical support for small businesses and individuals across South Africa. Expert help with operating systems, network security, antivirus, software installation, and data recovery. Get reliable IT support in Cape Town, Johannesburg, Pretoria, and nationwide.',
  keywords: [
    'IT services South Africa',
    'web development South Africa',
    'website development packages',
    'starter website package R4999',
    'business website package R12000',
    'professional website package R30000',
    'IT support plans R499 R999 R1999',
    'website maintenance South Africa',
    'IT support near me',
    'small business IT services',
    'affordable IT support',
    'website development Cape Town',
    'website development Johannesburg',
    'website development Pretoria',
    'IT consulting South Africa',
    'network security South Africa',
    'responsive web design',
    'e-commerce development',
    'custom web development',
  ],
  openGraph: {
    title: 'Professional IT Services & Web Development in South Africa | Arrow Smart Solutions',
    description: 'Affordable IT services, web development, and technical support for small businesses and individuals in South Africa. Serving Cape Town, Johannesburg, Pretoria, and nationwide.',
    images: ['/assets/hero.png'],
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.com',
  },
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Promotion />
      <Support />
      <Banner />
      <WhyPartner />
      <FindFit />
      <HomeAccordions />
    </main>
  )
}
