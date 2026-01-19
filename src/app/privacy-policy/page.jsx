import PrivacyPolicy from '../../components/PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy | Arrow Smart Solutions - Data Protection',
  description: 'Privacy policy for Arrow Smart Solutions. Learn how we collect, use, and protect your personal information in compliance with South African data protection laws.',
  keywords: [
    'privacy policy IT services',
    'data protection South Africa',
    'web development privacy',
    'software development data security',
    'client data protection',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.co.za/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}
