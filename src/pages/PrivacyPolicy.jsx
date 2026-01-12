import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: `Arrow Smart Solutions ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information in accordance with:
      
      • General Data Protection Regulation (GDPR) - EU Regulation 2016/679
      • Protection of Personal Information Act, 2013 (POPIA) - South African legislation
      • Electronic Communications and Transactions Act (ECTA) 2002
      • Other applicable international privacy regulations
      
      Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services.`
    },
    {
      title: '2. Information We Collect',
      content: `We collect information you provide directly:
      
      • Contact Information: Name, email address, phone number, company name
      • Service Information: Project details, requirements, preferences
      • Payment Information: Billing address, payment method details
      • Communication Data: Messages, inquiries, support tickets
      • Website Usage Data: IP address, browser type, pages visited, access times
      • Cookies and Tracking: Device identifiers, cookie data, analytics
      
      We collect this information through:
      • Contact forms and inquiries
      • Service agreements and contracts
      • Email communications
      • Website analytics tools
      • Payment processing systems`
    },
    {
      title: '3. Legal Basis for Processing (GDPR)',
      content: `Under GDPR, we process your personal data based on:
      
      • Contract Performance: Processing necessary to provide our services
      • Legal Compliance: Meeting legal and regulatory obligations
      • Legitimate Interests: Business operations, fraud prevention, security
      • Consent: When you provide explicit consent for specific processing
      • Legal Claims: Establishing, exercising, or defending legal claims
      
      You have the right to withdraw consent at any time.`
    },
    {
      title: '4. How We Use Your Information',
      content: `We use collected information for:
      
      • Service Delivery: Providing web development, IT support, and related services
      • Communication: Responding to inquiries, providing updates, support
      • Billing and Payment: Processing payments, invoicing, financial records
      • Service Improvement: Analyzing usage patterns, improving our offerings
      • Marketing (with consent): Sending newsletters, promotional materials
      • Legal Compliance: Meeting regulatory requirements, fraud prevention
      • Security: Protecting against unauthorized access, malware, attacks
      • Analytics: Understanding how users interact with our website
      
      We do NOT sell your personal data to third parties.`
    },
    {
      title: '5. Data Sharing and Disclosure',
      content: `We may share your information with:
      
      • Service Providers: Payment processors, hosting providers, analytics platforms
      • Legal Requirements: Law enforcement, regulatory bodies when required by law
      • Business Partners: Third parties with your explicit consent only
      • Successors: In case of business sale or merger
      
      All service providers are bound by confidentiality agreements and GDPR/POPIA compliant data processing agreements.`
    },
    {
      title: '6. Data Retention',
      content: `We retain your personal data for:
      
      • Active Clients: Duration of service relationship plus 3 years for legal/tax purposes
      • Inactive Clients: 3 years from last interaction
      • Marketing Lists: Until you unsubscribe
      • Payment Records: As required by South African tax law (6 years)
      • Legal Claims: For the duration of potential claims (7 years)
      
      You can request deletion subject to legal retention requirements.`
    },
    {
      title: '7. Your Rights (GDPR & POPIA)',
      content: `You have the following rights:
      
      • Right of Access: Request access to your personal data we hold
      • Right to Rectification: Correct inaccurate or incomplete information
      • Right to Erasure: Request deletion of your data ("right to be forgotten")
      • Right to Data Portability: Receive your data in a structured format
      • Right to Object: Oppose processing of your data for certain purposes
      • Right to Restrict: Limit how we process your data
      • Right to Withdraw Consent: Withdraw any given consent
      • Right to Lodge Complaint: File a complaint with your data protection authority
      
      To exercise these rights, contact us at privacy@arrowsmartsolutions.co.za`
    },
    {
      title: '8. International Data Transfers',
      content: `Arrow Smart Solutions is based in South Africa. If you are located in the EU and provide data to us:
      
      • We implement appropriate safeguards under GDPR Article 46
      • Data transfers are based on your consent or contractual necessity
      • We ensure equivalent levels of protection
      
      By using our services, you consent to the transfer of your information to South Africa.`
    },
    {
      title: '9. Security Measures',
      content: `We implement technical and organizational measures including:
      
      • SSL/TLS encryption for data in transit
      • Encrypted storage for sensitive data
      • Access controls and authentication
      • Regular security audits and updates
      • Employee training on data protection
      • Incident response procedures
      • Regular backup systems
      
      However, no security measure is 100% secure. We cannot guarantee absolute security.`
    },
    {
      title: '10. Cookies and Tracking',
      content: `Our website uses:
      
      • Essential Cookies: Required for site functionality
      • Analytics Cookies: Google Analytics - understand visitor behavior
      • Marketing Cookies: Retargeting and advertising purposes
      
      You can control cookies through your browser settings. Disabling cookies may affect website functionality.`
    },
    {
      title: '11. Third-Party Services',
      content: `We use third-party services:
      
      • Google Analytics: Website analytics
      • Formspree: Contact form processing
      • Payment Processors: Secure payment processing
      • Email Service Providers: Communication and newsletters
      
      These services have their own privacy policies. We recommend reviewing them.`
    },
    {
      title: '12. Children\'s Privacy',
      content: `Our services are not directed to individuals under 18 years old. We do not knowingly collect personal data from children. If we become aware of such collection, we will delete it immediately.`
    },
    {
      title: '13. Contact Us',
      content: `For privacy-related questions or to exercise your rights:
      
      Email: privacy@arrowsmartsolutions.co.za
      Address: South Africa
      
      Data Protection Officer: Available upon request
      Response Time: 30 days (GDPR/POPIA requirement)`
    },
    {
      title: '14. Changes to Privacy Policy',
      content: `We may update this policy periodically. Significant changes will be communicated via email or prominent notice on our website. Your continued use of our services constitutes acceptance of updated policies.
      
      Last Updated: January 2026`
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
          <h1 className='text-5xl font-bold mb-4'>Privacy Policy</h1>
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
                className='border-l-4 border-secondary pl-6'
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
            <h3 className='text-2xl font-bold mb-4'>Data Protection Authority</h3>
            <p className='text-lg text-dark2 mb-4'>
              If you have concerns about our privacy practices, you have the right to lodge a complaint with:
            </p>
            <ul className='text-lg text-dark2 space-y-2'>
              <li><strong>For EU Residents:</strong> Your local Data Protection Authority (DPA)</li>
              <li><strong>For South African Residents:</strong> Information Regulator of South Africa (IRSA)</li>
              <li className='mt-4'>Email: complaints@inforegulator.org.za</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
