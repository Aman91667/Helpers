import Navigation from '@/shared/components/layout/Navigation';
import Footer from '@/shared/components/layout/Footer';
import HeroSection from '../components/HeroSection';
import HomeServices from '../components/HomeServices';
import HowItWorks from '../components/HowItWorks';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <HeroSection />
        <HomeServices />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
