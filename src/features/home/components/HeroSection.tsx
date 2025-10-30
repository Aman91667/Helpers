import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Search } from 'lucide-react';
import { ROUTES } from '@/core/config/constants';
import heroHeart from '@/assets/heart.png';
import ServiceSelector from '@/features/helpers/components/ServiceSelector';

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const [showSchedule, setShowSchedule] = useState(false);
  const [showServiceSelector, setShowServiceSelector] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const navigate = useNavigate();

  const handleFindHelper = () => {
    if (location) {
      setShowServiceSelector(true);
    }
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    navigate(ROUTES.SEARCHING, {
      state: {
        location,
        selectedService: serviceId,
        scheduledDate: showSchedule ? scheduledDate : null,
        scheduledTime: showSchedule ? scheduledTime : null,
      },
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 sm:py-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] bg-healpers-coral rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/2 translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] bg-healpers-teal rounded-full blur-[100px] animate-pulse-glow animation-delay-2000" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Booking Section */}
          <div className="text-center lg:text-left space-y-8 w-full">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Request a <span className="text-gradient-hero">Healper</span>{' '}
                for now or later
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Get instant help at hospitals — queue assistance, patient
                escort, and report collection.
              </p>
            </div>

            {/* Booking Card */}
            <div className="max-w-md sm:max-w-lg mx-auto lg:mx-0 w-full">
              <div className="p-6 sm:p-8 rounded-[2rem] card-glass backdrop-blur-md bg-background/50 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(255,255,255,0.08)] transition-all duration-500 space-y-4">
                {/* Location Input */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-healpers-coral z-10" />
                  <Input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter hospital / location"
                    className="pl-12 h-14 text-base bg-background/50 border-0 focus-visible:ring-2 focus-visible:ring-healpers-coral"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Button
                    size="lg"
                    className="w-full sm:flex-1 h-14 text-base btn-glass-primary"
                    disabled={!location}
                    onClick={handleFindHelper}
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Find Available Healpers
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-6 btn-glass"
                    onClick={() => setShowSchedule(!showSchedule)}
                  >
                    <Calendar className="w-5 h-5" />
                  </Button>
                </div>

                {/* Schedule Later */}
                {showSchedule && (
                  <div className="pt-4 border-t border-border/50 space-y-3 animate-in fade-in slide-in-from-top-2">
                    <p className="text-sm font-medium">Schedule for later</p>
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="date"
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="bg-background/50 border-0"
                      />
                      <Input
                        type="time"
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                        className="bg-background/50 border-0"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-healpers-teal" />
                <span>500+ Verified Healpers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-healpers-coral" />
                <span>10,000+ Completed Tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-healpers-teal" />
                <span>4.9★ Average Rating</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Sphere */}
          <div className="relative flex items-center justify-center mb-10 lg:mb-0 w-full">
            <div className="relative w-2/3 sm:w-3/4 md:w-3/4 lg:w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-healpers-coral/20 to-healpers-teal/20 blur-2xl animate-pulse-glow" />
              <div className="absolute inset-0 rounded-full flex items-center justify-center p-6 sm:p-8 card-glass bg-background/40 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.2)] animate-float">
                <div className="absolute inset-8 sm:inset-10 rounded-full bg-gradient-to-br from-healpers-coral/30 to-healpers-teal/30 blur-xl" />
                <img
                  src={heroHeart}
                  alt="Healpers heart"
                  className="relative z-10 w-3/4 h-3/4 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Selector Modal */}
      <ServiceSelector
        isOpen={showServiceSelector}
        onClose={() => setShowServiceSelector(false)}
        onSelect={handleServiceSelect}
      />
    </section>
  );
};

export default HeroSection;
