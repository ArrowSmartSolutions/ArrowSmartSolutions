'use client'
import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const faqItems = [
  {
    title: 'How long does a typical website take?',
    content:
      'Most websites take 2 to 6 weeks depending on complexity, feedback cycles, and content readiness.',
  },
  {
    title: 'Do you offer hosting and maintenance?',
    content:
      'Yes. We provide hosting, maintenance, and support plans with clear response times and monthly billing options.',
  },
  {
    title: 'What do you need to start?',
    content:
      'We begin with goals, content, and any branding materials you have. If you do not have them, we can help define a starting point.',
  },
  {
    title: 'Can I update my site after launch?',
    content:
      'Yes. We build on tools that allow you to edit content, or we can handle updates for you.',
  },
  {
    title: 'How do I reach support?',
    content:
      'You can contact us by email and we respond within standard business hours. Critical issues have a faster response time.',
  },
];

const AccordionList = ({ items, openIndex, onToggle }) => (
  <div className="space-y-3">
    {items.map((item, idx) => {
      const isOpen = openIndex === idx;
      const panelId = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`;
      return (
        <div
          key={item.title}
          className={`rounded-xl border transition-colors ${isOpen ? 'border-primary bg-light' : 'border-[#eee] bg-white'}`}
        >
          <button
            type="button"
            onClick={() => onToggle(idx)}
            aria-expanded={isOpen}
            aria-controls={`accordion-panel-${panelId}`}
            className="w-full px-4 py-4 flex items-start justify-between gap-4 text-left"
          >
            <span className="text-base md:text-lg font-semibold text-dark">{item.title}</span>
            <span
              className={`mt-1 flex h-8 w-8 aspect-square shrink-0 items-center justify-center rounded-full border text-lg transition-colors ${
                isOpen ? 'border-primary text-primary bg-white' : 'border-[#ddd] text-dark2 bg-white'
              }`}
              aria-hidden="true"
            >
              {isOpen ? <FiMinus /> : <FiPlus />}
            </span>
          </button>
          <div
            id={`accordion-panel-${panelId}`}
            className={`grid transition-all duration-300 ease-out ${
              isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden px-4 pb-4 text-sm md:text-base text-dark2 leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

const HomeAccordions = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section className="bg-light">
      <div className="container py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
            FAQs
          </h2>
          <p className="mt-3 text-base sm:text-lg text-dark2">
            Straightforward answers to help you decide quickly.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto bg-white rounded-2xl border border-[#eee] shadow-sm p-6 md:p-7">
          <AccordionList
            items={faqItems}
            openIndex={openFaqIndex}
            onToggle={(idx) => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAccordions;
