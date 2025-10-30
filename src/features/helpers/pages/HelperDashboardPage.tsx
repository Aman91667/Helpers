import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Bell, TrendingUp, Clock, Star, Wallet, MapPin } from 'lucide-react';
import Navigation from '@/shared/components/layout/Navigation';

const HelperDashboardPage = () => {
  const [isOnline, setIsOnline] = useState(false);

  const stats = [
    { icon: Wallet, label: "Today's Earnings", value: '₹450', color: 'text-healpers-coral' },
    { icon: Clock, label: 'Hours Worked', value: '3.5h', color: 'text-healpers-teal' },
    { icon: Star, label: 'Rating', value: '4.8', color: 'text-yellow-500' },
    { icon: TrendingUp, label: 'Completed Tasks', value: '12', color: 'text-green-500' },
  ];

  const pendingRequests = [
    {
      id: 1,
      patientName: 'Rajesh Kumar',
      hospital: 'City Care Hospital',
      service: 'Queue Assistance',
      distance: '2.3 km',
      estimatedPay: '₹150',
      time: '2 min ago',
    },
    {
      id: 2,
      patientName: 'Priya Sharma',
      hospital: 'Apollo Hospital',
      service: 'Report Collection',
      distance: '1.8 km',
      estimatedPay: '₹100',
      time: '5 min ago',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 px-4 pb-8">
        <div className="container mx-auto max-w-7xl">
          {/* Online Status Toggle */}
          <Card className="card-glass p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  Welcome back, <span className="text-gradient-hero">Amit</span>!
                </h2>
                <p className="text-sm text-muted-foreground">
                  {isOnline ? "You're online and ready to accept requests" : "You're offline"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-semibold">{isOnline ? 'Online' : 'Offline'}</p>
                </div>
                <Switch
                  checked={isOnline}
                  onCheckedChange={setIsOnline}
                  className="data-[state=checked]:bg-healpers-teal"
                />
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-glass p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </Card>
              );
            })}
          </div>

          {/* Pending Requests */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Pending Requests</h3>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
            </div>

            {isOnline ? (
              pendingRequests.length > 0 ? (
                pendingRequests.map((request) => (
                  <Card key={request.id} className="card-glass p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div>
                          <h4 className="font-semibold text-lg">{request.patientName}</h4>
                          <p className="text-sm text-muted-foreground">{request.hospital}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-healpers-coral" />
                            <span>{request.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-healpers-teal" />
                            <span>{request.time}</span>
                          </div>
                        </div>
                        <div className="inline-block px-3 py-1 bg-healpers-teal/20 text-healpers-teal rounded-full text-xs font-medium">
                          {request.service}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 md:items-end">
                        <div className="text-2xl font-bold text-healpers-coral">
                          {request.estimatedPay}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="btn-glass">
                            Decline
                          </Button>
                          <Button className="btn-glass-primary">Accept</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="card-glass p-12 text-center">
                  <Bell className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-muted-foreground">No pending requests at the moment</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We'll notify you when someone needs help nearby
                  </p>
                </Card>
              )
            ) : (
              <Card className="card-glass p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Clock className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-lg font-semibold mb-2">You're Currently Offline</p>
                <p className="text-muted-foreground mb-4">
                  Turn on your status to start receiving requests
                </p>
                <Button onClick={() => setIsOnline(true)} className="btn-glass-primary">
                  Go Online
                </Button>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelperDashboardPage;
