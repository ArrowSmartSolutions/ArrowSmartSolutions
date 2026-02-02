import SubscriptionPlans from '../../components/SubscriptionPlans/SubscriptionPlans'

export const metadata = {
  title: 'Subscription Plans | Arrow Smart Solutions',
  description: 'Subscription plans for portfolios, SMEs, and enterprise teams in South Africa.',
  keywords: [
    'subscription plans South Africa',
    'portfolio website plan',
    'SME website plan',
    'enterprise website plan',
    'website maintenance subscription',
    'Next.js hosting plans',
    'website growth retainers',
  ],
  openGraph: {
    title: 'Subscription Plans | Arrow Smart Solutions',
    description: 'Subscription plans built for portfolios, SMEs, and enterprise brands in South Africa.',
    images: ['/assets/hero1.png'],
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.co.za/subscription-plan',
  },
}

export default function SubscriptionPlansPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <SubscriptionPlans />
    </main>
  )
}
