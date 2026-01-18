import Contact from '../../components/Contact/Contact'

export const metadata = {
  title: 'Contact Us | Arrow Smart Solutions',
  description: 'Get in touch with Arrow Smart Solutions for professional IT services and support. We respond within 24-48 hours.',
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <Contact />
    </main>
  )
}
