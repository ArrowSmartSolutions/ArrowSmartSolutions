import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import Support from '../components/Support/Support'
import WhyPartner from '../components/WhyPartner/WhyPartner'
import FindFit from '../components/FindFit/FindFit'
import Promotion from '../components/Promotion/Promotion'
import HomeAccordions from '../components/HomeAccordions/HomeAccordions'

export const metadata = {
  title: 'Arrow Smart Solutions | Professional IT Services for Small Businesses and Individuals',
  description: 'Arrow Smart Solutions is your trusted partner for comprehensive IT services and solutions designed to meet the needs of small businesses and individuals. We offer expert support for operating system installation, windows activation, network security, antivirus solutions, software installation, and data backup and recovery.',
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
