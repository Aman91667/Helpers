import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader2, MapPin, Clock, X } from 'lucide-react';
import { ROUTES } from '@/core/config/constants';

const SearchingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceType, location: userLocation } = location.state || {};
  const [dots, setDots] = useState('.');

  useEffect(() => {
    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 500);

    // Simulate finding a helper after 3-5 seconds
    const findHelperTimeout = setTimeout(() => {
      // Navigate to tracking page with mock helper data
      navigate(ROUTES.TRACKING, {
        state: {
          helper: {
            id: '1',
            name: 'Rajesh Kumar',
            rating: 4.9,
            reviews: 156,
            phone: '+91 98765 43210',
            avatar: 'RK',
            verified: true,
            completedTasks: 234,
            specialties: ['Wheelchair', 'Escort'],
            currentLocation: { lat: 26.9124, lng: 75.7873 }, // Jaipur coordinates
            eta: '8 min',
          },
          userLocation,
          serviceType,
        },
      });
    }, 4000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(findHelperTimeout);
    };
  }, [navigate, userLocation, serviceType]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="container mx-auto max-w-md">
        <div className="card-glass p-8 rounded-3xl text-center space-y-6 relative">
          {/* Cancel button */}
          <button
            onClick={() => navigate(ROUTES.HOME)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Cancel"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Loading animation */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-healpers-coral to-healpers-teal p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Loader2 className="w-16 h-16 text-healpers-teal animate-spin" />
              </div>
            </div>
          </div>

          {/* Status text */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Finding a Healper{dots}</h2>
            <p className="text-muted-foreground">
              We're matching you with the best available helper nearby
            </p>
          </div>

          {/* Location info */}
          {userLocation && (
            <div className="flex items-center justify-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-healpers-coral" />
              <span>{userLocation}</span>
            </div>
          )}

          {/* Estimated time */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Usually takes less than 30 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingPage;
