import FeeCalculator from '../../components/FeeCalculator/FeeCalculator';

export const metadata = {
  title: 'No-Nonsense Web & IT Solutions Project Estimator | Arrow Smart Solutions',
  description: 'Use our transparent project estimator to estimate your website and IT solutions costs. See setup fees, monthly rates, and total investment for our plans tailored to your business needs.',
  keywords: [
    'website cost estimator',
    'IT services pricing',
    'web development cost estimator',
    'subscription cost estimator',
    'pricing transparency',
    'South Africa IT solutions pricing',
  ],
  alternates: {
    canonical: 'https://arrowsmartsolutions.co.za/fee-calculator',
  },
};

export default function FeeCalculatorPage() {
  return <FeeCalculator />;
}
