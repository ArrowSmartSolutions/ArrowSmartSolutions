import NewsletterPage from '../../pages/NewsletterPage'

export const metadata = {
  title: 'Newsletter Subscription | IT Tips & Business Insights',
  description: 'Subscribe to Arrow Smart Solutions newsletter for the latest IT support tips, business insights, and tech news for South African businesses. Stay updated with practical IT advice.',
  keywords: [
    'IT newsletter South Africa',
    'business tech tips',
    'IT support insights',
    'web development tips',
    'software development news',
    'business website updates',
  ],
  alternates: {
    canonical: 'https://arrowsmartsolutions.com/newsletter',
  },
}

export default function Newsletter() {
  return <NewsletterPage />
}
