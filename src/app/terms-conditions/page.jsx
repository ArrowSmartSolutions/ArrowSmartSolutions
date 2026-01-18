import TermsConditions from '../../pages/TermsConditions'

export const metadata = {
  title: 'Terms and Conditions | Arrow Smart Solutions',
  description: 'Terms and conditions for using Arrow Smart Solutions IT services and website. Read our service terms, payment policies, and user agreements.',
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
