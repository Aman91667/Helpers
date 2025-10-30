import Navigation from '@/shared/components/layout/Navigation';
import Footer from '@/shared/components/layout/Footer';
import MobileBottomNav from '@/shared/components/layout/MobileBottomNav';
import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Location data when you use our services',
        'Payment information for processing transactions',
        'Usage data and preferences',
        'Device information and IP addresses',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our service',
        'To match you with appropriate Healpers',
        'To process your payments securely',
        'To communicate with you about your bookings',
        'To improve our services and user experience',
        'To ensure safety and prevent fraud',
      ],
    },
    {
      title: 'Information Sharing',
      content: [
        'We share your information with assigned Healpers only for service delivery',
        'We may share data with payment processors for transaction processing',
        'We do not sell your personal information to third parties',
        'We may disclose information if required by law',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We use industry-standard encryption to protect your data',
        'All Healpers undergo background checks and sign confidentiality agreements',
        'Payment information is processed through secure, PCI-compliant systems',
        'We regularly review and update our security practices',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'Access your personal data at any time',
        'Request correction of inaccurate data',
        'Request deletion of your account and data',
        'Opt-out of marketing communications',
        'Export your data in a portable format',
      ],
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to enhance your browsing experience',
        'Essential cookies are required for the service to function',
        'You can control cookie preferences through your browser settings',
        'We use analytics to improve our platform',
      ],
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our services are not intended for children under 13',
        'We do not knowingly collect data from children',
        'If you believe we have collected child data, please contact us',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this policy periodically',
        'We will notify you of significant changes via email',
        'Continued use of our services constitutes acceptance of updates',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy <span className="text-gradient-hero">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card-glass p-8 rounded-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Healpers, we take your privacy seriously. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use
              our platform. Please read this policy carefully. If you do not agree with
              the terms of this privacy policy, please do not access the application.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {index + 1}. {section.title}
              </h2>
              <div className="card-glass p-6 rounded-xl">
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-healpers-teal mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="card-glass p-8 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions or concerns about this Privacy Policy or our
              data practices, please contact us:
            </p>
            <div className="space-y-2 text-lg">
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@healpers.com"
                  className="text-healpers-teal hover:underline"
                >
                  privacy@healpers.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+911800XXXXXXX"
                  className="text-healpers-teal hover:underline"
                >
                  +91 1800-XXX-XXXX
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default PrivacyPolicyPage;
