import { redirect } from 'next/navigation'

export default async function SubscriptionPlanDetailPage({ params }) {
  const { planId } = await params
  redirect(`/subscriptions/${planId}`)
}
