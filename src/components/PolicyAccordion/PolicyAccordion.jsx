'use client'
import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const policyItems = [
  {
    title: 'Data use and privacy',
    content:
      'We collect contact and project details to deliver services, respond to requests, and improve our work. Marketing emails are optional, and you can opt out at any time.',
  },
  {
    title: 'Data sharing',
    content:
      'We do not sell personal data. We may share limited information with trusted service providers such as hosting, payment, and analytics partners under data protection agreements.',
  },
  {
    title: 'Security and retention',
    content:
      'We use encryption in transit and secure storage for sensitive data. Project data is retained for defined periods and can be removed on request, subject to legal requirements.',
  },
  {
    title: 'Payments, refunds, and timelines',
    content:
      'Projects usually start with a deposit and are completed within agreed timelines. Refunds are handled according to the service scope and work completed, with third-party fees excluded.',
  },
];

const PolicyAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-light rounded-2xl border border-[#eee] p-6 md:p-7">
      <h3 className="text-2xl font-bold text-dark">Policies at a glance</h3>
      <p className="mt-2 text-dark2">
        A quick, friendly overview of how we work and protect your information.
      </p>
      <div className="mt-6 space-y-3">
        {policyItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`;
          return (
            <div
              key={item.title}
              className={`rounded-xl border transition-colors ${isOpen ? 'border-primary bg-white' : 'border-[#eee] bg-white'}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={isOpen}
                aria-controls={`policy-panel-${panelId}`}
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
                id={`policy-panel-${panelId}`}
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
    </section>
  );
};

export default PolicyAccordion;
