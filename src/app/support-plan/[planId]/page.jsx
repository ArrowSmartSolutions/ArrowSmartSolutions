import { redirect } from 'next/navigation'

export default async function SupportDetailPage({ params }) {
  const { planId } = await params
  redirect(`/subscriptions/support/${planId}`)
}
