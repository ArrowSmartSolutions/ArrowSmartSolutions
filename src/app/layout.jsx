import '../index.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Analytics } from '@vercel/analytics/next'
import StructuredData from '../components/StructuredData/StructuredData'

export const metadata = {
  metadataBase: new URL('https://arrowsmartsolutions.com'),
  title: {
    default: 'Arrow Smart Solutions | Professional IT Services & Web Development in South Africa',
    template: '%s | Arrow Smart Solutions',
  },
  description: 'Arrow Smart Solutions offers comprehensive IT services, web development, and technical support for small businesses and individuals in South Africa. Expert support for operating system installation, network security, antivirus solutions, and software installation.',
  keywords: [
    'IT services South Africa',
    'web development South Africa',
    'website development packages',
    'starter package R4999',
    'business package R12000',
    'professional package R30000',
    'IT support plans',
    'basic support R499',
    'standard support R999',
    'priority support R1999',
    'website maintenance',
    'IT support Cape Town',
    'IT support Johannesburg',
    'IT support Pretoria',
    'IT support Durban',
    'IT services for small business',
    'affordable website development',
    'remote IT support',
    'network security South Africa',
    'software installation',
    'windows activation',
    'data backup and recovery',
    'IT consulting South Africa',
    'e-commerce development',
    'custom web development',
    'responsive web design',
  ],
  authors: [{ name: 'Arrow Smart Solutions' }],
  creator: 'Arrow Smart Solutions',
  publisher: 'Arrow Smart Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://arrowsmartsolutions.com',
    siteName: 'Arrow Smart Solutions',
    title: 'Arrow Smart Solutions | Professional IT Services & Web Development in South Africa',
    description: 'Comprehensive IT services and solutions for small businesses and individuals in South Africa. Expert web development, IT support, and technical services.',
    images: [
      {
        url: '/assets/hero.png',
        width: 1200,
        height: 630,
        alt: 'Arrow Smart Solutions - IT Services and Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrow Smart Solutions | Professional IT Services & Web Development',
    description: 'Comprehensive IT services and solutions for small businesses and individuals in South Africa.',
    images: ['/assets/hero.png'],
    creator: '@arrowsmartlife',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/theicon2.png',
    apple: '/assets/theicon2.png',
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <body>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <div className="overflow-x-hidden bg-white text-dark">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
