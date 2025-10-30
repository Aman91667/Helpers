import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Star,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle2,
  Navigation,
  User,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/core/config/constants';

const TrackingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { helper, userLocation } = location.state || {};

  const [eta, setEta] = useState(helper?.eta || '8 min');
  const [status, setStatus] = useState<'accepted' | 'arriving' | 'arrived'>('accepted');

  useEffect(() => {
    if (!helper) {
      navigate(ROUTES.HOME);
      return;
    }

    // Simulate status updates
    const statusTimer = setTimeout(() => {
      setStatus('arriving');
    }, 3000);

    const arrivalTimer = setTimeout(() => {
      setStatus('arrived');
      setEta('Arrived');
    }, 10000);

    return () => {
      clearTimeout(statusTimer);
      clearTimeout(arrivalTimer);
    };
  }, [helper, navigate]);

  if (!helper) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Map Section - Top Half */}
      <div className="relative h-[50vh] bg-gradient-to-br from-healpers-coral/20 to-healpers-teal/20">
        {/* Placeholder map - In production, use Google Maps or Mapbox */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="icon-container mx-auto">
              <Navigation className="w-12 h-12 text-healpers-teal animate-pulse" />
            </div>
            <div className="card-glass px-6 py-3 rounded-full inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-healpers-coral" />
              <span className="font-semibold">{userLocation || 'Your Location'}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Live map integration • Helper is on the way
            </p>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="card-glass px-6 py-3 rounded-full flex items-center gap-2">
            {status === 'arrived' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Clock className="w-5 h-5 text-healpers-coral" />
            )}
            <span className="font-semibold">
              {status === 'accepted' && 'Helper Accepted'}
              {status === 'arriving' && `Arriving in ${eta}`}
              {status === 'arrived' && 'Helper Has Arrived'}
            </span>
          </div>
        </div>
      </div>

      {/* Helper Details Section - Bottom Half */}
      <div className="flex-1 p-4 space-y-4">
        <div className="container mx-auto max-w-2xl space-y-4">
          {/* Helper Card */}
          <div className="card-glass p-6 rounded-2xl">
            <div className="flex items-start gap-4 mb-4">
              {/* Avatar */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center text-white font-bold text-xl">
                  {helper.avatar}
                </div>
                {helper.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-healpers-teal flex items-center justify-center border-2 border-background">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{helper.name}</h3>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{helper.rating}</span>
                  <span className="text-muted-foreground">
                    ({helper.reviews} reviews)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {helper.specialties.map((specialty: string) => (
                    <Badge
                      key={specialty}
                      variant="secondary"
                      className="glass-card text-xs"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button className="btn-glass-primary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call
              </Button>
              <Button variant="outline" className="btn-glass" size="lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Message
              </Button>
            </div>
          </div>

          {/* Trip Details */}
          <div className="card-glass p-6 rounded-2xl space-y-4">
            <h4 className="font-semibold mb-3">Trip Details</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-healpers-teal mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Pickup Location</p>
                  <p className="font-medium">{userLocation}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-healpers-coral" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Estimated Arrival</p>
                  <p className="font-medium text-lg text-gradient-hero">{eta}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-healpers-teal" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Tasks Completed</p>
                  <p className="font-medium">{helper.completedTasks}+ successful assists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety & Support */}
          <div className="card-glass p-4 rounded-2xl">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Need help?</span>
              <Button variant="link" className="text-healpers-teal p-0">
                Contact Support
              </Button>
            </div>
          </div>

          {/* Cancel button (only if not arrived) */}
          {status !== 'arrived' && (
            <Button
              variant="outline"
              className="w-full btn-glass"
              onClick={() => navigate(ROUTES.HOME)}
            >
              Cancel Request
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
