import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Wallet, Clock, Users, BadgeCheck, TrendingUp } from 'lucide-react';
import Navigation from '@/shared/components/layout/Navigation';
import Footer from '@/shared/components/layout/Footer';
import { ROUTES } from '@/core/config/constants';

const BecomeHelperPage = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Wallet,
      title: 'Flexible Earnings',
      description: 'Earn ₹15,000 - ₹40,000/month with flexible hours',
    },
    {
      icon: Clock,
      title: 'Work on Your Schedule',
      description: 'Choose when you want to work - full-time or part-time',
    },
    {
      icon: Shield,
      title: 'Safety & Insurance',
      description: 'Complete insurance coverage while you\'re helping',
    },
    {
      icon: Users,
      title: 'Make a Difference',
      description: 'Help families during their hospital visits',
    },
    {
      icon: BadgeCheck,
      title: 'Quick Verification',
      description: 'Fast onboarding with DigiLocker verification',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Earn bonuses and increase your ratings',
    },
  ];

  const requirements = [
    'Age 18-60 years',
    'Basic smartphone knowledge',
    'Good communication skills',
    'Valid government ID (Aadhaar/PAN/Driving License)',
    'Compassionate and patient attitude',
    'Available for minimum 4 hours/day',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-healpers-coral rounded-full blur-[100px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-healpers-teal rounded-full blur-[100px] animate-pulse-glow animation-delay-2000" />
          </div>

          <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Become a <span className="text-gradient-hero">Healper</span> Today
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community of verified helpers and earn while making a real difference in people's lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-glass-primary text-lg px-8 py-6"
                onClick={() => navigate(ROUTES.HEALPER_REGISTRATION)}
              >
                Start Registration <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-glass text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Join <span className="text-gradient-hero">Healpers</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Benefits that make a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="card-glass p-6 rounded-2xl hover:scale-105 transition-transform"
                  >
                    <div className="icon-container mb-4">
                      <Icon className="w-8 h-8 text-healpers-coral" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple Requirements
              </h2>
              <p className="text-lg text-muted-foreground">
                Do you meet these criteria?
              </p>
            </div>

            <div className="card-glass p-8 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-healpers-teal flex-shrink-0" />
                    <span className="text-base">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="btn-glass-primary text-lg px-8 py-6"
                onClick={() => navigate(ROUTES.HEALPER_REGISTRATION)}
              >
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple 4-Step Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started in less than 24 hours
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Register', desc: 'Fill basic details' },
                { step: '02', title: 'Verify', desc: 'Complete KYC via DigiLocker' },
                { step: '03', title: 'Training', desc: 'Quick online orientation' },
                { step: '04', title: 'Start Earning', desc: 'Accept requests & earn' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeHelperPage;
