import React from 'react';
import { motion } from 'framer-motion';
import PolicyAccordion from '../components/PolicyAccordion/PolicyAccordion';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: `Arrow Smart Solutions ("Company", "we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.`
    },
    {
      title: '2. Information We Collect',
      content: `We may collect information about you in a variety of ways. The information we may collect on the Site includes:

Personal Data:
• Name, email address, phone number
• Postal address and billing address
• Company name and business details
• Payment information (processed securely)
• Project requirements and preferences
• Communication history with our team

Automatically Collected Information:
• Browser type and IP address
• Pages visited and time spent on pages
• Device information and operating system
• Referring website
• Geographic location data
• Cookies and similar tracking technologies

Data from Third Parties:
• Information from payment processors
• Information from analytics providers
• Social media platforms (if you link accounts)`
    },
    {
      title: '3. Purpose of Data Collection',
      content: `We collect and use your information for the following purposes:

Service Delivery:
• To provide, maintain, and improve our services
• To process and fulfill your requests
• To communicate with you about your projects
• To send service-related announcements

Business Operations:
• To create and manage your account
• To process payments and billing
• To troubleshoot technical issues
• To generate invoices and receipts

Marketing and Communications:
• To send newsletters and promotional content (with your consent)
• To conduct surveys and gather feedback
• To customize content based on preferences
• To contact you regarding updates or changes

Legal and Security:
• To comply with legal obligations
• To detect and prevent fraud
• To protect our intellectual property
• To enforce our terms and conditions`
    },
    {
      title: '4. Legal Basis for Processing',
      content: `Our processing of your personal data is based on:

Contractual Necessity:
• Information required to provide services you've requested
• Payment processing information
• Project delivery details

Consent:
• Marketing communications
• Newsletter subscriptions
• Non-essential cookies

Legitimate Interests:
• Business analytics and service improvement
• Fraud prevention
• Customer support
• Website security

Legal Compliance:
• Tax obligations (SARS)
• Regulatory requirements (POPIA, GDPR)
• Court orders or legal requests

You have the right to withdraw consent at any time by contacting us.`
    },
    {
      title: '5. Data Retention',
      content: `We retain your personal data for the following periods:

Active Projects:
• During the service period and 12 months after completion
• Contract and transaction records: 7 years (tax compliance)
• Payment records: 7 years (tax compliance)

Inactive Accounts:
• Account data retained for 24 months after last activity
• May be anonymized or deleted thereafter

Communication Records:
• Email communications: 5 years or until case resolution
• Support tickets: 3 years after closure

Marketing Data:
• Newsletter subscribers: Until you unsubscribe
• Survey data: 2 years

You may request deletion of your data subject to legal retention requirements.`
    },
    {
      title: '6. Data Security',
      content: `Security Measures We Implement:

Technical Security:
• SSL/TLS encryption for data in transit
• AES-256 encryption for sensitive data at rest
• Firewalls and intrusion detection systems
• Regular security audits and penetration testing
• Secure password hashing (bcrypt)

Administrative Security:
• Limited access to personal data (need-to-know basis)
• Employee confidentiality agreements
• Regular security training for staff
• Background checks for team members

Organizational Security:
• Incident response procedures
• Data breach notification protocols
• Regular backup and disaster recovery testing
• Vendor security assessments

Limitations:
• No method of transmission over the internet is 100% secure
• We cannot guarantee absolute security
• You are responsible for maintaining password confidentiality`
    },
    {
      title: '7. Data Sharing and Disclosure',
      content: `We do not sell your personal data. We may share information with:

Service Providers:
• Web hosting providers
• Payment processors
• Email service providers
• Analytics platforms
• CRM systems (under data processing agreements)

Legal Requirements:
• Law enforcement (with valid legal process)
• Regulatory authorities (POPIA, GDPR compliance)
• Court orders
• National security requests

Business Transfers:
• In case of merger, acquisition, or bankruptcy
• You will be notified of any such change

Your Consent:
• Only when you explicitly authorize sharing
• For specific purposes clearly communicated

All third parties are bound by confidentiality agreements and data processing obligations.`
    },
    {
      title: '8. Your Privacy Rights',
      content: `You have the following rights regarding your personal data:

Right to Access (POPIA & GDPR):
• Request a copy of your personal data
• Know what information we hold
• Know how it's being processed
• Response timeline: 30 days

Right to Rectification:
• Correct inaccurate information
• Complete incomplete data
• Request corrections be shared with recipients

Right to Erasure ("Right to be Forgotten"):
• Request deletion of your data
• Subject to legal retention requirements
• Where not incompatible with our obligations

Right to Restrict Processing:
• Limit how your data is used
• Suspend processing while disputes are resolved
• Retained for establishing, exercising, or defending claims

Right to Data Portability:
• Receive your data in a structured format
• Transfer to another service provider
• In machine-readable format (CSV, JSON, etc.)

Right to Object:
• Object to processing for direct marketing
• Object to profiling
• Object to automated decision-making

Right to Lodge a Complaint:
• With your local data protection authority
• POPIA: Information Regulator (South Africa)
• GDPR: Your national data protection authority

To exercise these rights, contact: privacy@arrowsmartsolutions.co.za`
    },
    {
      title: '9. Cookies and Tracking Technologies',
      content: `Types of Cookies We Use:

Essential Cookies:
• Session management
• Security and authentication
• Load balancing
• Not subject to consent

Performance Cookies:
• Analytics and usage patterns
• Site optimization
• Performance monitoring

Functional Cookies:
• Remembering preferences
• Customizing user experience
• Language settings

Marketing Cookies:
• Advertising remarketing
• Campaign tracking
• Requires your consent

Third-Party Cookies:
• Google Analytics
• Social media pixels
• Require consent

Cookie Management:
• Most browsers allow you to control cookies
• You can delete cookies from your device
• Opting out may affect site functionality
• Some cookies are essential for service delivery`
    },
    {
      title: '10. International Data Transfers',
      content: `Data Transfer Policies:

European Users (GDPR):
• We implement Standard Contractual Clauses
• Data transfer impact assessments conducted
• Adequate safeguards in place
• Your data protected under GDPR standards

South African Users (POPIA):
• Data primarily stored within South Africa
• Compliant with POPIA cross-border requirements
• Personal information operator status
• Information regulator oversight

Third-Country Transfers:
• Limited transfers to service providers
• Adequacy determinations made
• Standard contractual clauses implemented
• Privacy Shield alternatives in place

Your Rights:
• Right to know destination of transfers
• Right to object to cross-border transfer
• Recourse in case of unauthorized transfer`
    },
    {
      title: '11. Children\'s Privacy',
      content: `Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal data from children.

If we become aware that a child has provided us with personal data:
• We will delete such information promptly
• We will notify the child's parent or guardian
• We will comply with applicable laws

If you believe a child has provided us information, contact:
privacy@arrowsmartsolutions.co.za

Parents or guardians concerned about data collection may request verification and deletion.`
    },
    {
      title: '12. Third-Party Links',
      content: `Our website may contain links to third-party websites:

Our Responsibility:
• We are not responsible for third-party privacy practices
• We encourage you to review their privacy policies
• Links do not constitute endorsement

Third-Party Services:
• Google Analytics
• Social media platforms
• Payment processors
• External resource providers

Privacy Policy Application:
• This policy applies only to our services
• Third-party policies govern their data handling
• We have no control over third-party practices

Your Responsibility:
• Review terms before providing information
• Exercise caution with personal data
• Report suspicious activity to us`
    },
    {
      title: '13. Data Processing Agreements',
      content: `For Business Clients:

Standard Processing:
• Data Processing Addendum (DPA) available upon request
• GDPR Article 28 compliant agreements
• POPIA compliance provisions included
• Detailed processing instructions

Processor Responsibilities:
• Processing only on your documented instructions
• Employee confidentiality obligations
• Security implementation
• Sub-processor disclosures
• Assistance with data subject rights
• Deletion or return of data upon contract termination

Your Rights as Controller:
• Audit rights (with 15 days notice)
• Approval of sub-processors
• Termination for cause
• Data protection impact assessments

Specific Uses:
• Website hosting and maintenance
• Email communication and support
• Project management and collaboration
• Analytics and performance monitoring`
    },
    {
      title: '14. Automated Decision-Making',
      content: `We Do Not:
• Use automated decision-making for significant decisions
• Implement profiling that produces legal effects
• Make unilateral decisions affecting your rights based on automation

Where Automated Processing Occurs:
• Spam/fraud detection
• Performance analytics
• Non-legally-binding recommendations

Your Rights:
• Request manual review of automated decisions
• Explain your point of view
• Challenge inaccurate automated decisions
• Request human involvement in decision-making

You have the right to not be subject to automated decision-making for legally binding or similarly significant decisions.`
    },
    {
      title: '15. Privacy By Design',
      content: `Our Commitment:

Data Minimization:
• Collect only necessary information
• No excessive data collection
• Clear purposes for all collection
• Regular review of data needs

Privacy-First Approach:
• Privacy considerations in all projects
• Default to stricter privacy settings
• Transparent data handling
• User control over information

Technical Measures:
• Encryption by default
• Secure coding practices
• Regular security updates
• Privacy testing and audits

Accountability:
• Privacy Impact Assessments
• Data protection documentation
• Staff training and awareness
• Regular compliance reviews`
    },
    {
      title: '16. Changes to Privacy Policy',
      content: `Policy Updates:

Modification Rights:
• We may update this policy periodically
• Changes reflect evolving privacy practices
• Changes reflect legal requirements

Notification of Changes:
• Email notification for significant changes
• Website notice (30 days advance notice)
• Updated policy effective immediately upon posting
• Your continued use constitutes acceptance

Material Changes:
• Opt-out options provided for new uses
• Renegotiation of terms if you disagree
• Right to terminate services

Last Updated: January 2026
Current Version: 1.0`
    },
    {
      title: '17. Contact Information',
      content: `Privacy Inquiries:

Data Protection Officer Contact:
Email: privacy@arrowsmartsolutions.co.za
Support: support@arrowsmartsolutions.co.za
Response Time: Within 5-10 business days

Mailing Address:
Arrow Smart Solutions
South Africa

For Data Subject Rights Requests:
• Submit in writing with "Data Subject Request" in subject
• Include specific right you're exercising
• Provide sufficient information to identify you
• Expected response: 30 days

For Privacy Complaints:
South African Data Protection Authority:
• Information Regulator (South Africa)
• Website: www.justice.gov.za/inforeg

European Data Protection Authority:
• Your national DPA if you're in EU
• GDPR Chapter VII authorities`
    },
    {
      title: '18. Compliance Frameworks',
      content: `Laws and Regulations We Comply With:

South African:
• Protection of Personal Information Act (POPIA) - 2013
• Electronic Communications and Transactions Act (ECTA) - 2002
• Consumer Protection Act (CPA) - 2008
• Cybercrimes Act - 2020

European:
• General Data Protection Regulation (GDPR) - 2018
• ePrivacy Directive - 2002/58/EC
• Digital Services Act - 2022

International:
• ISO/IEC 27001 (Information Security)
• ISO/IEC 27701 (Privacy Information Management)
• Industry best practices
• Security standards and protocols

Compliance Certifications:
• Regular audits and assessments
• Third-party security evaluations
• Compliance documentation
• Incident reporting procedures`
    },
    {
      title: '19. Data Breach Notification',
      content: `Our Breach Response:

Notification Timeline:
• Personal notification within 3 business days
• Regulator notification where required by law
• Public announcement if risk to data subjects
• No unnecessary delay in notification

Information Provided:
• Nature of the breach
• Categories and approximate number of affected individuals
• Likely consequences
• Measures taken or proposed to address the breach
• Contact point for further information

Who We Notify:
• Affected individuals (if high risk)
• POPIA regulator (if applicable)
• GDPR authorities (if applicable)
• Business associates (if applicable)
• Law enforcement (if criminal activity)

Your Rights After Breach:
• Right to compensation
• Right to legal action
• Right to claim damages
• Right to identity theft monitoring services
• Right to credit freeze (where applicable)`
    },
    {
      title: '20. Entire Privacy Policy',
      content: `This Privacy Policy, together with our Terms and Conditions and any service-specific privacy notices, constitutes the entire agreement regarding privacy and data protection.

If any provision is deemed invalid:
• Remaining provisions remain in effect
• Invalid provision modified to be enforceable
• Equivalent effect maintained where possible

No Waiver:
• Failure to enforce a right doesn't constitute waiver
• Non-exercise of rights doesn't limit future enforcement
• Our policies remain in effect

Governing Law:
• South African law governs this policy
• Applicable international laws where applicable (GDPR, etc.)
• South African courts have jurisdiction

Last Updated: January 2026
Version: 1.0`
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

          <div className='mt-12'>
            <PolicyAccordion />
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
                <strong>Data Retention:</strong>
                <p>Project data: 12 months post-completion</p>
              </div>
              <div>
                <strong>Your Rights:</strong>
                <p>Access, rectify, erase, port data (30-day response)</p>
              </div>
              <div>
                <strong>Data Security:</strong>
                <p>SSL/TLS encryption, AES-256, regular audits</p>
              </div>
              <div>
                <strong>Privacy Contact:</strong>
                <p>privacy@arrowsmartsolutions.co.za</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
