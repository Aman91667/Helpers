import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, MapPin, Clock, Search, Accessibility, HelpingHand, Activity, Compass } from 'lucide-react';
import { ROUTES } from '@/core/config/constants';
import Navigation from '@/shared/components/layout/Navigation';

const BookHelperPage = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [location, setLocation] = useState('');
  const [estimatedTime] = useState(15);
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (location && selectedService) {
      navigate(ROUTES.SEARCHING, {
        state: {
          location,
          selectedService,
          estimatedTime,
        },
      });
    }
  };

  const patientNeeds = [
    {
      id: 'wheelchair',
      name: 'Wheelchair Assistance',
      icon: Accessibility,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      id: 'injured',
      name: 'Injured / Need Assistance',
      icon: Activity,
      color: 'from-rose-400 to-pink-600',
    },
    {
      id: 'first-time',
      name: 'First-time Visitor',
      icon: Compass,
      color: 'from-emerald-400 to-green-600',
    },
    {
      id: 'guidance',
      name: 'Need Hospital Guidance',
      icon: HelpingHand,
      color: 'from-indigo-400 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center p-4 pt-28">
        <div className="glass-card-neon max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative rounded-2xl shadow-2xl">
          {/* Close button */}
          <button
            onClick={() => navigate(ROUTES.HOME)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold font-orbitron mb-2">
              Find a <span className="text-gradient-neon">Healper</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Choose what kind of help you need and where you are.
            </p>
          </div>

          {/* Location Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Your Hospital / Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-healpers-teal" />
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., City Care Hospital, Jaipur"
                className="pl-10 glass-card-neon border-0"
              />
            </div>
          </div>

          {/* Needs Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">
              I Need Help With
            </label>
            <div className="grid grid-cols-2 gap-3">
              {patientNeeds.map((need) => {
                const Icon = need.icon;
                const isSelected = selectedService === need.id;
                return (
                  <button
                    key={need.id}
                    onClick={() => setSelectedService(need.id)}
                    className={`glass-card-category p-4 text-left transition-all duration-300 rounded-xl ${
                      isSelected
                        ? 'neon-border-active scale-105'
                        : 'hover:scale-102'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 bg-gradient-to-br ${need.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-semibold font-orbitron">
                      {need.name}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimated Time */}
          {selectedService && location && (
            <div className="mb-6 glass-card p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-healpers-coral" />
                <span className="font-medium">Estimated Arrival</span>
              </div>
              <div className="text-2xl font-bold text-gradient-neon">
                {estimatedTime} min
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Based on nearest available Healper.
              </p>
            </div>
          )}

          {/* Book Button */}
          <Button
            onClick={handleBookNow}
            disabled={!selectedService || !location}
            className="w-full btn-glass-primary text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="w-5 h-5 mr-2" />
            Find Available Healpers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookHelperPage;
