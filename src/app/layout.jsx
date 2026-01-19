import '../index.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CookieConsent from '../components/CookieConsent/CookieConsent'
import { Analytics } from '@vercel/analytics/next'
import StructuredData from '../components/StructuredData/StructuredData'

export const metadata = {
  metadataBase: new URL('https://arrowsmartsolutions.co.za'),
  title: {
    default: 'Arrow Smart Solutions | Software and Web Development Packages & Support in South Africa',
    template: '%s | Arrow Smart Solutions',
  },
  description: 'Arrow Smart Solutions provides professional software and web development packages and ongoing support for businesses in South Africa. From affordable starter websites to enterprise-grade solutions, we build and maintain your online presence with expert care.',
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
    url: 'https://arrowsmartsolutions.co.za',
    siteName: 'Arrow Smart Solutions',
    title: 'Arrow Smart Solutions | Software and Web Development Packages & Support in South Africa',
    description: 'Professional software and web development packages and ongoing support for businesses in South Africa. From starter websites to enterprise solutions, we build and maintain your online presence.',
    images: [
      {
        url: '/assets/theicon2.png',
        width: 1200,
        height: 630,
        alt: 'Arrow Smart Solutions - Software and Web Development Packages and Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrow Smart Solutions | Software and Web Development Packages & Support in South Africa',
    description: 'Professional software and web development packages and ongoing support for businesses in South Africa.',
    images: ['/assets/theicon2.png'],
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
    canonical: 'https://arrowsmartsolutions.co.za',
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
          <CookieConsent />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
