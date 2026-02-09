'use client';

import { useState, useEffect } from 'react';
import { subscriptionPlans, subscriptionPlanDetails } from '../../data/subscriptionPlans';
import { FiCopy, FiShare2 } from 'react-icons/fi';

const FeeCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState('personal-brand');
  const [months, setMonths] = useState(12);
  const [showDetails, setShowDetails] = useState(false);
  const [shareId, setShareId] = useState('');
  const [copied, setCopied] = useState(false);

  // Parse price string to number
  const parsePrice = (priceString) => {
    if (!priceString) return 0;
    const match = priceString.match(/[\d,]+/);
    if (!match) return 0;
    return parseInt(match[0].replace(/,/g, ''), 10);
  };

  const plan = subscriptionPlanDetails[selectedPlan];
  const setupFee = parsePrice(plan.setupFee);
  let monthlyPrice = parsePrice(plan.monthlyPrice);

  // For enterprise with range, use the lower bound
  if (selectedPlan === 'enterprise-solution') {
    monthlyPrice = 6500; // Using lower bound of 6,500
  }

  const monthlyTotal = monthlyPrice * months;
  const totalCost = setupFee + monthlyTotal;

  // Generate shareable link with encoded data
  const generateShareLink = () => {
    const data = btoa(JSON.stringify({ selectedPlan, months }));
    const link = `${window.location.origin}/fee-calculator?calc=${data}`;
    setShareId(link);
  };

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return `R${amount.toLocaleString('en-ZA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-white to-gray-50 text-dark pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            Project Estimator
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-dark2 max-w-xl mx-auto">
            Estimate your website costs in real-time. Select your plan and contract length to see the exact investment needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 max-w-5xl mx-auto">
          {/* Estimator Section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
            {/* Plan Selection */}
            <div className="mb-6">
              <label className="block text-base font-semibold text-dark mb-3">
                Select Your Plan
              </label>
              <div className="space-y-2.5">
                {subscriptionPlans.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlan(p.id)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedPlan === p.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 bg-white hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-dark">{p.title}</h3>
                        <p className="text-xs text-dark2">{p.label}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-primary">{p.monthlyPrice}</p>
                        <p className="text-[10px] text-dark2">{p.setupFee}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Term Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-base font-semibold text-dark">
                  Contract Term
                </label>
                <span className="text-xl font-bold text-primary">{months} months</span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-dark2 mt-2">
                <span>1 month</span>
                <span>60 months (5 years)</span>
              </div>
            </div>

            {/* Quick Select Buttons */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-dark2 mb-2.5">Quick Select</p>
              <div className="grid grid-cols-4 gap-2">
                {[1, 3, 6, 12, 24, 36].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMonths(m)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                      months === m
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-dark hover:bg-gray-200'
                    }`}
                  >
                    {m}m
                  </button>
                ))}
              </div>
            </div>

            {/* Share Estimator Link */}
            <div className="bg-gray-50 rounded-lg p-3 mb-6">
              <button
                onClick={generateShareLink}
                className="w-full flex items-center justify-center gap-2 text-primary text-sm font-semibold hover:text-secondary transition-colors"
              >
                <FiShare2 size={16} />
                Share Estimator Link
              </button>
              {shareId && (
                <div className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={shareId}
                    readOnly
                    className="flex-1 px-2.5 py-2 bg-white border border-gray-300 rounded text-[10px] font-mono"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-3 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
                  >
                    <FiCopy size={16} />
                  </button>
                </div>
              )}
              {copied && <p className="text-[10px] text-green-600 mt-2">✓ Copied to clipboard!</p>}
            </div>
          </div>

          {/* Cost Breakdown Section */}
          <div className="flex flex-col gap-4">
            {/* Summary Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-4 sm:p-6 border-2 border-primary/20">
              <h2 className="text-xl font-bold text-dark mb-4">Cost Breakdown</h2>

              {/* Plan Name */}
              <div className="mb-4 pb-4 border-b border-primary/20">
                <p className="text-dark2 text-xs mb-1">Selected Plan</p>
                <p className="text-xl font-bold text-dark">{plan.title}</p>
              </div>

              {/* Individual Costs */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-dark font-semibold">Setup Fee</p>
                    <p className="text-xs text-dark2">(One-time payment)</p>
                  </div>
                  <p className="text-lg font-bold text-primary">{formatCurrency(setupFee)}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-primary/10">
                  <div>
                    <p className="text-sm text-dark font-semibold">Monthly Cost</p>
                    <p className="text-xs text-dark2">{formatCurrency(monthlyPrice)} × {months} months</p>
                  </div>
                  <p className="text-lg font-bold text-primary">{formatCurrency(monthlyTotal)}</p>
                </div>
              </div>

              {/* Total Cost */}
              <div className="bg-white rounded-xl p-4 border-2 border-primary">
                <p className="text-dark2 text-xs mb-2">Total Investment</p>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {formatCurrency(totalCost)}
                </p>
                <p className="text-[10px] text-dark2">
                  {formatCurrency(totalCost / months)} per month on average
                </p>
              </div>
            </div>

            {/* Plan Details Toggle */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full py-2.5 px-4 bg-white border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              {showDetails ? 'Hide' : 'Show'} Plan Details
            </button>

            {/* Plan Details */}
            {showDetails && (
              <div className="bg-white rounded-xl p-4 border-2 border-gray-200 space-y-4">
                <div>
                  <h3 className="font-bold text-dark text-sm mb-2">Deliverables</h3>
                  <ul className="space-y-2">
                    {plan.deliverables?.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-xs">
                        <span className="text-primary font-bold">✓</span>
                        <span className="text-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-bold text-dark text-sm mb-2">Support & SEO</h3>
                  <p className="text-xs text-dark mb-2">
                    <span className="font-semibold">SEO:</span> {plan.seo}
                  </p>
                  <p className="text-xs text-dark">
                    <span className="font-semibold">Support:</span> {plan.support}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-bold text-dark text-sm mb-2">Tech Stack</h3>
                  <p className="text-xs text-dark">{plan.techStack}</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-bold text-dark text-sm mb-3">Best For</h3>
                  <ul className="space-y-2">
                    {plan.bestFor?.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-xs">
                        <span className="text-secondary font-bold">•</span>
                        <span className="text-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-primary/5 rounded-2xl p-5 sm:p-8 text-center max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-dark mb-3">Ready to Get Started?</h2>
            <p className="text-sm text-dark2 mb-5 max-w-lg mx-auto">
              Share this estimator with your team, or contact us to discuss your specific needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-block bg-primary text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-secondary transition-colors text-sm"
              >
                Contact Sales
              </a>
              <a
                href="/packages"
                className="inline-block bg-white text-primary font-semibold py-2.5 px-6 rounded-lg border-2 border-primary hover:bg-primary/5 transition-colors text-sm"
              >
                View All Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeeCalculator;
