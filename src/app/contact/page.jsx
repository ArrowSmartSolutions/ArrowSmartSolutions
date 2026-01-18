import Contact from '../../components/Contact/Contact'

export const metadata = {
  title: 'Contact Us for IT Services in South Africa | Arrow Smart Solutions',
  description: 'Contact Arrow Smart Solutions for professional IT services, web development, and technical support in South Africa. Fast response within 24-48 hours. Serving businesses and individuals nationwide.',
  keywords: [
    'contact IT services South Africa',
    'IT support contact',
    'web development inquiry',
    'custom software development contact',
    'business website creation South Africa',
    'IT consulting South Africa',
  ],
  openGraph: {
    title: 'Contact Arrow Smart Solutions | IT Services South Africa',
    description: 'Get in touch for professional IT services and web development solutions. We respond within 24-48 hours.',
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.co.za/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <Contact />
    </main>
  )
}
