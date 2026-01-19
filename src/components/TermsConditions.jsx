'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using the services provided by Arrow Smart Solutions ("Company", "we", "us", "our"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.`
    },
    {
      title: '2. Service Description',
      content: `Arrow Smart Solutions provides:
      
      • Website design and development services
      • Web hosting and maintenance solutions
      • IT support and technical services
      • Custom software development
      • Network and infrastructure support
      • Data backup and recovery services
      
      Service scope is defined in individual service agreements and quotes.`
    },
    {
      title: '3. Payment Terms',
      content: `Payment Structure:
      
      • Deposits: 50% deposit required to commence work (non-refundable for custom development)
      • Balance: Remaining 50% due upon service delivery or project completion
      • Support Plans: Monthly billing in advance
      • Invoicing: Net 7 payment terms from invoice date
      
      Payment Methods: Bank transfer, credit card, EFT
      Late Payments: 1.5% monthly interest on overdue accounts
      Currency: All prices in South African Rands (ZAR) unless agreed otherwise`
    },
    {
      title: '4. Refund Policy',
      content: `Refund Eligibility:
      
      • Website Development: Non-refundable once development commences. You may request modifications instead.
      • Pre-delivery Cancellation: Refund of remaining balance (minus deposit) if cancelled before delivery
      • Defective Services: Full refund if service fails to meet agreed specifications
      • Support Plans: Pro-rata refund if cancelled within 7 days of purchase
      
      Refund Timeline:
      • Approved refunds processed within 10 business days
      • Original payment method used for refunds
      • Bank processing may add 3-5 business days
      
      Non-Refundable:
      • Domain registrations and third-party services
      • Hosting fees (apply for credit toward future months)
      • Completed custom development work
      • Ongoing support services (pro-rata available)`
    },
    {
      title: '5. Project Timeline',
      content: `Service Delivery:
      
      • Initial Consultation: 3-5 business days
      • Project Proposals: 5-7 business days after requirements confirmation
      • Website Development: 2-6 weeks depending on complexity
      • Custom Software: 4-12 weeks or as specified in contract
      • Support Services: Next business day response for standard issues
      • Emergency Support: 4-hour response for critical issues
      
      Timeline Factors:
      • Client communication and feedback delays
      • Third-party service providers
      • Scope changes or additions
      • Technical complexities discovered during development
      
      Force Majeure: Timelines may be extended due to unforeseen circumstances beyond our control.`
    },
    {
      title: '6. Intellectual Property Rights',
      content: `Ownership:
      
      • Custom Work: You own all custom-developed code and designs upon full payment
      • Pre-existing IP: We retain ownership of our tools, templates, and methodologies
      • Third-party Components: Third-party licenses apply to integrated components
      • Branding: You retain ownership of your content and branding
      
      License Grant: You grant us a license to use your content for project delivery and portfolio purposes (with your consent).`
    },
    {
      title: '7. Limitations of Liability',
      content: `Disclaimer:
      
      Services are provided "as is" without warranty. We are not liable for:
      
      • Indirect, incidental, or consequential damages
      • Lost profits, data, or business opportunities
      • Third-party actions or unavailability
      • Performance issues due to user actions
      • Client negligence or misuse
      
      Maximum Liability: Our total liability shall not exceed the amount paid for the specific service in question, limited to the last 12 months of service fees.`
    },
    {
      title: '8. Warranty and SLA',
      content: `Service Level Agreement:
      
      • Uptime Guarantee: 99.5% for hosted services (excluding maintenance)
      • Support Response: Next business day for standard issues
      • Critical Issues: 4-hour response time
      • Maintenance Window: Planned maintenance Sundays 00:00-06:00 SAST
      
      Warranty:
      • 30-day bug fix warranty for completed projects
      • Defects reported within 30 days are fixed at no additional cost
      • Warranty excludes changes requested by client
      • Support continues per agreed service plan`
    },
    {
      title: '9. Client Responsibilities',
      content: `As a client, you agree to:
      
      • Provide accurate project requirements and information
      • Supply content (text, images, documents) in timely manner
      • Maintain backups of critical data
      • Implement security recommendations
      • Keep usernames/passwords confidential
      • Comply with applicable laws
      • Not use services for illegal purposes
      • Not interfere with service infrastructure
      • Report security vulnerabilities promptly`
    },
    {
      title: '10. Data Security and Backup',
      content: `Security Measures:
      
      • SSL/TLS encryption for data in transit
      • Encrypted storage for sensitive data
      • Regular security updates and patches
      • Firewall and intrusion detection
      
      Backups:
      • Daily automated backups for hosted services
      • 30-day backup retention
      • Backup recovery: Within 24 hours
      • Recovery fees apply for custom recovery requests
      
      Client Backup Responsibility: You are responsible for maintaining your own backups of critical data.`
    },
    {
      title: '11. Limitation of Services',
      content: `We do not provide:
      
      • 24/7/365 support (standard business hours support)
      • Unlimited free modifications after project completion
      • Removal of third-party service limitations
      • Guarantees of search engine rankings
      • Data recovery from client-caused deletion
      
      Scope Creep: Changes beyond original specifications require separate quotes and agreements.`
    },
    {
      title: '12. Modification of Terms',
      content: `We may modify these terms with 30 days' written notice. Your continued use of services constitutes acceptance. Material changes will be communicated via email or prominent website notice.`
    },
    {
      title: '13. Termination',
      content: `Termination by Client:
      
      • 30 days' written notice required
      • Pro-rata refund for monthly services (if eligible)
      • You remain responsible for outstanding invoices
      • Access to services terminates immediately upon final payment
      
      Termination by Company:
      
      • Immediate: For illegal activity, non-payment after 30 days, terms violation
      • 30 days' notice: For convenience
      • You have 30 days to retrieve data`
    },
    {
      title: '14. Dispute Resolution',
      content: `Process:
      
      1. Attempt to resolve through direct communication (7 days)
      2. Formal written complaint to support@arrowsmartsolutions.co.za (7 days)
      3. Mediation attempt (14 days)
      4. Arbitration or court proceedings (South African jurisdiction)
      
      Governing Law: South African law
      Jurisdiction: South African courts`
    },
    {
      title: '15. Limitation Period',
      content: `Any claims must be made within:
      
      • 30 days for service defects
      • 3 months for billing disputes
      • 6 months for other claims
      
      After these periods, claims are barred.`
    },
    {
      title: '16. Confidentiality',
      content: `Both parties agree to:
      
      • Maintain confidentiality of sensitive information
      • Not disclose proprietary information
      • Protect access credentials
      • Limit sharing to employees with legitimate need
      
      Exceptions: Legal compliance, court orders, regulatory requirements.`
    },
    {
      title: '17. Compliance',
      content: `Arrow Smart Solutions complies with:
      
      • Protection of Personal Information Act (POPIA)
      • General Data Protection Regulation (GDPR)
      • Electronic Communications and Transactions Act (ECTA)
      • Consumer Protection Act (CPA)
      • South African tax regulations
      
      See our Privacy Policy for data handling details.`
    },
    {
      title: '18. Contact Information',
      content: `For questions or concerns:
      
      Email: legal@arrowsmartsolutions.co.za
      Support: support@arrowsmartsolutions.co.za
      Response Time: Within 5 business days
      
      Mailing Address: South Africa`
    },
    {
      title: '19. Entire Agreement',
      content: `These Terms and Conditions, together with any individual service agreements and our Privacy Policy, constitute the entire agreement between you and Arrow Smart Solutions regarding the use of our services.`
    },
    {
      title: '20. Updates and Changes',
      content: `Last Updated: January 2026

Any updates will be posted on our website. Your continued use of services after updates means you accept the new terms.`
    }
  ];

  return (
    <main className="overflow-x-hidden bg-white text-dark pt-32 pb-16">
      <div className='container py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto'
        >
          <h1 className='text-5xl font-bold mb-4'>Terms and Conditions</h1>
          <p className='text-xl text-dark2 mb-12'>
            Effective Date: January 2026 | Last Updated: January 2026
          </p>
          
          <div className='space-y-8'>
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className='border-l-4 border-primary pl-6'
              >
                <h2 className='text-2xl font-bold mb-4'>{section.title}</h2>
                <p className='text-lg text-dark2 whitespace-pre-line leading-relaxed'>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mt-12 p-6 bg-light rounded-2xl'
          >
            <h3 className='text-2xl font-bold mb-4'>Quick Reference</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-dark2'>
              <div>
                <strong>Payment Terms:</strong>
                <p>50% deposit, 50% on delivery</p>
              </div>
              <div>
                <strong>Refund Period:</strong>
                <p>Non-refundable after work begins</p>
              </div>
              <div>
                <strong>Project Timeline:</strong>
                <p>2-6 weeks for websites</p>
              </div>
              <div>
                <strong>Support Response:</strong>
                <p>Next business day (4 hours for critical)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default TermsConditions;
