import SubscriptionPlans from '../../components/SubscriptionPlans/SubscriptionPlans'
import Support from '../../components/Support/Support'
import Banner from '../../components/Banner/Banner'

export const metadata = {
  title: 'Subscriptions | Arrow Smart Solutions',
  description: 'Browse subscription plans and support plans for ongoing growth, performance, and maintenance in South Africa.',
  keywords: [
    'subscription plans South Africa',
    'website support plans',
    'website maintenance subscription',
    'ongoing web support',
    'business website subscriptions',
    'portfolio website subscriptions',
  ],
  openGraph: {
    title: 'Subscriptions | Arrow Smart Solutions',
    description: 'Subscription and support plans tailored for South African businesses.',
    images: ['/assets/hero1.png'],
  },
  alternates: {
    canonical: 'https://arrowsmartsolutions.co.za/subscriptions',
  },
}

export default function SubscriptionsPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <SubscriptionPlans />
      <Support />
      <Banner />
    </main>
  )
}
