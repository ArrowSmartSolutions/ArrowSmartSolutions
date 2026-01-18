import '../index.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export const metadata = {
  title: 'Arrow Smart Solutions | Professional IT Services for Small Businesses and Individuals',
  description: 'Arrow Smart Solutions is your trusted partner for comprehensive IT services and solutions designed to meet the needs of small businesses and individuals. We offer expert support for operating system installation, windows activation, network security, antivirus solutions, software installation, and data backup and recovery.',
  keywords: 'IT services, IT support, web development, software installation, network security, South Africa, small business IT, remote IT support',
  authors: [{ name: 'Arrow Smart Solutions' }],
  openGraph: {
    title: 'Arrow Smart Solutions | Professional IT Services',
    description: 'Comprehensive IT services and solutions for small businesses and individuals in South Africa.',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrow Smart Solutions | Professional IT Services',
    description: 'Comprehensive IT services and solutions for small businesses and individuals in South Africa.',
  },
  icons: {
    icon: '/assets/theicon2.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="overflow-x-hidden bg-white text-dark">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
