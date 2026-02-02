'use client'
import React, { useMemo, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const whatsappUrl = 'https://wa.me/message/KWXXB2FOPACRM1';

const WhatsAppAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stepKey, setStepKey] = useState('start');
  const router = useRouter();

  const steps = useMemo(() => ({
    start: {
      question: 'How can we help you today?',
      options: [
        { label: 'I need a new website/package', next: 'packageIntent' },
        { label: 'I need ongoing support or a subscription', next: 'subscriptionIntent' },
        { label: 'I have an urgent issue', next: 'urgent' },
        { label: 'I am just browsing', next: 'browsing' },
      ],
    },
    packageIntent: {
      question: 'Are you ready for a quote?',
      options: [
        { label: 'Yes, I need a quote', next: 'whatsappQuote' },
        { label: 'Not yet, I am exploring', next: 'showPackages' },
      ],
    },
    subscriptionIntent: {
      question: 'Are you an existing client?',
      options: [
        { label: 'Yes, I need help now', next: 'whatsappSupport' },
        { label: 'No, I want to compare plans', next: 'showSubscriptions' },
      ],
    },
    urgent: {
      type: 'result',
      title: 'Fastest help is on WhatsApp',
      body: 'For urgent issues, WhatsApp gets you the quickest response.',
      primary: { label: 'Chat on WhatsApp', href: whatsappUrl },
    },
    browsing: {
      type: 'result',
      title: 'Start with the right page',
      body: 'Browse packages or subscriptions, and chat when you are ready.',
      primary: { label: 'View Packages', action: () => router.push('/packages') },
      secondary: { label: 'View Subscriptions', action: () => router.push('/subscriptions') },
    },
    showPackages: {
      type: 'result',
      title: 'Browse packages first',
      body: 'Explore package options, then message us for a tailored quote.',
      primary: { label: 'View Packages', action: () => router.push('/packages') },
      secondary: { label: 'Ask on WhatsApp', href: whatsappUrl },
    },
    showSubscriptions: {
      type: 'result',
      title: 'Compare subscriptions',
      body: 'Review the subscription and support plans, then chat if you have questions.',
      primary: { label: 'View Subscriptions', action: () => router.push('/subscriptions') },
      secondary: { label: 'Ask on WhatsApp', href: whatsappUrl },
    },
    whatsappQuote: {
      type: 'result',
      title: 'Let us prepare a quote',
      body: 'Share a short brief and we will respond with the best-fit package.',
      primary: { label: 'Chat on WhatsApp', href: whatsappUrl },
      secondary: { label: 'View Packages', action: () => router.push('/packages') },
    },
    whatsappSupport: {
      type: 'result',
      title: 'We can help right away',
      body: 'Start a WhatsApp chat and include your site name and issue.',
      primary: { label: 'Chat on WhatsApp', href: whatsappUrl },
      secondary: { label: 'View Subscriptions', action: () => router.push('/subscriptions') },
    },
  }), [router]);

  const step = steps[stepKey];

  const handleReset = () => {
    setStepKey('start');
  };

  return (
    <div className='fixed left-4 bottom-6 z-50 flex flex-col items-start gap-3'>
      {isOpen && (
        <div className='w-[280px] sm:w-[320px] max-w-[90vw] rounded-2xl border border-[#eee] bg-white shadow-xl'>
          <div className='flex items-center justify-between px-4 py-3 border-b border-[#f0f0f0]'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-dark2'>WhatsApp Assistant</p>
              <p className='text-sm sm:text-base font-semibold text-dark'>Quick help in 30 seconds</p>
            </div>
            <button
              type="button"
              aria-label="Close WhatsApp assistant"
              onClick={() => setIsOpen(false)}
              className='p-2 rounded-full hover:bg-light text-dark2'
            >
              <FiX />
            </button>
          </div>

          <div className='px-4 py-4 space-y-4'>
            {step?.type !== 'result' && (
              <>
                <p className='text-sm sm:text-base font-semibold text-dark'>{step.question}</p>
                <div className='space-y-2'>
                  {step.options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setStepKey(option.next)}
                      className='w-full text-left px-3 py-2 rounded-xl border border-[#eee] hover:border-secondary hover:bg-light text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-dark transition-colors'
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step?.type === 'result' && (
              <div className='space-y-3'>
                <div>
                  <p className='text-sm sm:text-base font-semibold text-dark'>{step.title}</p>
                  <p className='text-xs sm:text-sm text-dark2 leading-relaxed'>{step.body}</p>
                </div>
                <div className='flex flex-col gap-2'>
                  {step.primary?.href ? (
                    <a
                      href={step.primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='primary-btn text-xs sm:text-sm md:text-base text-center'
                    >
                      {step.primary.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={step.primary?.action}
                      className='primary-btn text-xs sm:text-sm md:text-base'
                    >
                      {step.primary?.label}
                    </button>
                  )}
                  {step.secondary?.href ? (
                    <a
                      href={step.secondary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='inline-block text-center text-xs sm:text-sm md:text-base font-semibold text-secondary hover:text-primary'
                    >
                      {step.secondary.label}
                    </a>
                  ) : step.secondary?.action ? (
                    <button
                      type="button"
                      onClick={step.secondary.action}
                      className='text-xs sm:text-sm md:text-base font-semibold text-secondary hover:text-primary'
                    >
                      {step.secondary.label}
                    </button>
                  ) : null}
                </div>
              </div>
            )}
          </div>

          <div className='px-4 py-3 border-t border-[#f0f0f0] flex items-center justify-between text-xs sm:text-sm'>
            <button type="button" onClick={handleReset} className='text-dark2 hover:text-secondary'>
              Start over
            </button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='font-semibold text-secondary hover:text-primary'>
              Open WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Open WhatsApp assistant"
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white shadow-xl hover:shadow-2xl transition-transform duration-200 hover:scale-105'
      >
        <FaWhatsapp className='text-xl' />
      </button>
    </div>
  );
};

export default WhatsAppAssistant;
