import Services from '../../components/Services/Services'
import Banner from '../../components/Banner/Banner'
import Support from '../../components/Support/Support'

export const metadata = {
  title: 'Services | Arrow Smart Solutions',
  description: 'Explore our comprehensive IT services including web development packages, support plans, and technical solutions tailored for small businesses and individuals in South Africa.',
}

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <Services />
      <Support />
      <Banner />
    </main>
  )
}
