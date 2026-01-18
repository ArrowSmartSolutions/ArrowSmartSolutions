import PrivacyPolicy from '../../pages/PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy | Arrow Smart Solutions - Data Protection',
  description: 'Privacy policy for Arrow Smart Solutions. Learn how we collect, use, and protect your personal information in compliance with South African data protection laws.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}
