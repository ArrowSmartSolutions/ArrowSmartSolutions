import SubscriptionPlanDetailClient from '../../../components/SubscriptionPlanDetail'
import { subscriptionPlanDetails } from '../../../data/subscriptionPlans'

export async function generateStaticParams() {
  return Object.keys(subscriptionPlanDetails).map((planId) => ({ planId }))
}

export async function generateMetadata({ params }) {
  const { planId } = await params
  const details = subscriptionPlanDetails[planId]

  const metadata = details
    ? {
        title: `${details.title} | Arrow Smart Solutions`,
        description: details.description,
      }
    : {
        title: 'Subscriptions | Arrow Smart Solutions',
        description: 'Explore subscription plans for portfolios, SMEs, and enterprise teams in South Africa.',
      }

  return {
    ...metadata,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: ['/assets/hero1.png'],
    },
    alternates: {
      canonical: `https://arrowsmartsolutions.co.za/subscriptions/${planId}`,
    },
  }
}

export default async function SubscriptionPlanDetailPage({ params }) {
  const { planId } = await params
  return <SubscriptionPlanDetailClient planId={planId} />
}
