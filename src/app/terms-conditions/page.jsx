import TermsConditions from '../../pages/TermsConditions'

export const metadata = {
  title: 'Terms and Conditions | Arrow Smart Solutions',
  description: 'Terms and conditions for using Arrow Smart Solutions IT services and website. Read our service terms, payment policies, and user agreements.',
  keywords: [
    'terms and conditions IT services',
    'web development service agreements',
    'software development terms',
    'client service contracts South Africa',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.com/terms-conditions',
  },
}

export default function TermsConditionsPage() {
  return <TermsConditions />
}
