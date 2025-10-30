import Navigation from '@/shared/components/layout/Navigation';
import Footer from '@/shared/components/layout/Footer';
import MobileBottomNav from '@/shared/components/layout/MobileBottomNav';
import { Heart, Users, Target, Award, Shield, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Active Healpers', value: '500+', icon: Users },
    { label: 'Tasks Completed', value: '10,000+', icon: Award },
    { label: 'Hospitals Covered', value: '50+', icon: Target },
    { label: 'Customer Satisfaction', value: '4.9/5', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'We believe in treating every patient and their family with care and empathy.',
    },
    {
      icon: Shield,
      title: 'Safety & Trust',
      description: 'All our helpers are background-checked and trained professionals.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a supportive community that helps each other in times of need.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-hero">Healpers</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're on a mission to make hospital visits less stressful by providing
            reliable, compassionate assistance when you need it most.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card-glass p-6 text-center rounded-2xl">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-healpers-teal" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Healpers was born from a simple observation: hospital visits are
              overwhelming. Between long queues, complex procedures, and navigating
              large facilities, patients and their families often feel lost and
              stressed.
            </p>
            <p>
              We realized that what people need most during these challenging times
              isn't just medical care—it's a helping hand, a guide, someone who
              knows the system and can make the experience smoother.
            </p>
            <p>
              Today, we've built a community of trained, verified helpers who are
              ready to assist with everything from standing in queues to collecting
              reports, ensuring that you can focus on what matters most: your health
              and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-glass p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-healpers-coral/20 to-healpers-teal/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-healpers-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you need help or want to become a helper, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-helper">
              <button className="btn-glass-primary px-8 py-3 rounded-lg font-semibold">
                Book a Healper
              </button>
            </a>
            <a href="/become-healper">
              <button className="btn-glass px-8 py-3 rounded-lg font-semibold">
                Become a Healper
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default AboutPage;
