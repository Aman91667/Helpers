import Navigation from '@/shared/components/layout/Navigation';
import Footer from '@/shared/components/layout/Footer';
import MobileBottomNav from '@/shared/components/layout/MobileBottomNav';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageSquare, Mail, Phone, HelpCircle } from 'lucide-react';

const HelpPage = () => {
  const faqs = [
    {
      question: 'How do I book a Healper?',
      answer: 'Simply enter your hospital location on the home page, select the type of assistance you need, and we\'ll match you with the nearest available Healper. You can book for immediate help or schedule for later.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Our pricing starts at ₹299 for basic tasks. The final cost depends on the duration and type of service. You\'ll see the estimated cost before confirming your booking.',
    },
    {
      question: 'Are Healpers verified?',
      answer: 'Yes! All our Healpers undergo thorough background checks and training. They are verified professionals who understand hospital procedures and patient care.',
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking anytime before the Healper arrives. Cancellation charges may apply depending on when you cancel. No charges if canceled within 2 minutes of booking.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, credit/debit cards, digital wallets, and cash payments. You can choose your preferred payment method when booking.',
    },
    {
      question: 'How do I track my Healper?',
      answer: 'Once your booking is confirmed, you\'ll be redirected to a live tracking page where you can see your Healper\'s location in real-time and estimated arrival time.',
    },
    {
      question: 'What if I need help with multiple tasks?',
      answer: 'You can select multiple service types when booking. Our Healpers are trained to handle various tasks like queue assistance, report collection, and patient escort.',
    },
    {
      question: 'Is the service available 24/7?',
      answer: 'Yes, Healpers is available 24/7 for emergency situations. However, availability may vary by location during late-night hours.',
    },
    {
      question: 'How do I become a Healper?',
      answer: 'Click on "Become a Healper" in the navigation menu. You\'ll need to fill out an application, complete a background check, and undergo training before you can start helping patients.',
    },
    {
      question: 'What if I have an issue with my Healper?',
      answer: 'You can report any issues through the app or contact our 24/7 support team. We take all complaints seriously and will resolve them promptly.',
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 1800-XXX-XXXX',
      description: '24/7 Support Available',
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'support@healpers.com',
      description: 'Response within 24 hours',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      info: 'Chat with us',
      description: 'Available 9 AM - 9 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Can We <span className="text-gradient-hero">Help You?</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="card-glass p-6 rounded-2xl text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-healpers-coral/20 to-healpers-teal/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-healpers-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-healpers-teal font-semibold mb-1">
                    {method.info}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-glass rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our support team is always here to help you
          </p>
          <a href="mailto:support@healpers.com">
            <button className="btn-glass-primary px-8 py-3 rounded-lg font-semibold">
              Contact Support
            </button>
          </a>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default HelpPage;
