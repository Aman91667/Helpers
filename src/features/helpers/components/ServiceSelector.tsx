import { useState } from 'react';
import { Accessibility, HelpingHand, Activity, Compass, ClipboardList, FileText, Pill, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ServiceSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (serviceId: string) => void;
}

const services = [
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
    name: 'Hospital Guidance',
    icon: HelpingHand,
    color: 'from-indigo-400 to-purple-600',
  },
  {
    id: 'queue',
    name: 'Queue Assistance',
    icon: ClipboardList,
    color: 'from-amber-400 to-orange-600',
  },
  {
    id: 'reports',
    name: 'Report Collection',
    icon: FileText,
    color: 'from-teal-400 to-cyan-600',
  },
  {
    id: 'medicine',
    name: 'Medicine Pickup',
    icon: Pill,
    color: 'from-purple-400 to-pink-600',
  },
  {
    id: 'emergency',
    name: 'Emergency Support',
    icon: Phone,
    color: 'from-red-400 to-rose-600',
  },
];

const ServiceSelector = ({ isOpen, onClose, onSelect }: ServiceSelectorProps) => {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleContinue = () => {
    if (selectedService) {
      onSelect(selectedService);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            What type of help do you need?
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Select the service you need assistance with
          </p>
        </DialogHeader>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService === service.id;

            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'card-glass ring-2 ring-healpers-teal scale-105'
                    : 'card-glass hover:scale-105'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 mx-auto bg-gradient-to-br ${service.color}`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-center leading-tight">
                  {service.name}
                </h3>
              </button>
            );
          })}
        </div>

        <Button
          onClick={handleContinue}
          disabled={!selectedService}
          className="w-full btn-glass-primary mt-6"
          size="lg"
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceSelector;
