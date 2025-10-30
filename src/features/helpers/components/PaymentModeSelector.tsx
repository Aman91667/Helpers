import { useState } from 'react';
import { CreditCard, Smartphone, Wallet, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface PaymentModeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (paymentMode: string) => void;
}

const paymentModes = [
  {
    id: 'card',
    name: 'Credit / Debit Card',
    icon: CreditCard,
    description: 'Pay securely with your card',
  },
  {
    id: 'upi',
    name: 'UPI',
    icon: Smartphone,
    description: 'Google Pay, PhonePe, Paytm',
  },
  {
    id: 'wallet',
    name: 'Wallet',
    icon: Wallet,
    description: 'Use your wallet balance',
  },
  {
    id: 'cash',
    name: 'Cash',
    icon: Banknote,
    description: 'Pay directly to helper',
  },
];

const PaymentModeSelector = ({ isOpen, onClose, onSelect }: PaymentModeSelectorProps) => {
  const [selectedMode, setSelectedMode] = useState<string>('upi');

  const handleContinue = () => {
    onSelect(selectedMode);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Choose Payment Method
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            Select how you'd like to pay for the service
          </p>
        </DialogHeader>

        <RadioGroup value={selectedMode} onValueChange={setSelectedMode} className="space-y-3 mt-4">
          {paymentModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.id}
                className={`card-glass p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedMode === mode.id
                    ? 'ring-2 ring-healpers-teal'
                    : 'hover:ring-1 hover:ring-healpers-teal/50'
                }`}
                onClick={() => setSelectedMode(mode.id)}
              >
                <div className="flex items-start gap-4">
                  <RadioGroupItem value={mode.id} id={mode.id} className="mt-1" />
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-healpers-coral/20 to-healpers-teal/20"
                  >
                    <Icon className="w-6 h-6 text-healpers-teal" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor={mode.id} className="font-semibold cursor-pointer">
                      {mode.name}
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      {mode.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </RadioGroup>

        <Button
          onClick={handleContinue}
          className="w-full btn-glass-primary mt-6"
          size="lg"
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModeSelector;
