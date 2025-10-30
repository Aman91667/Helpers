import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface CancelReasonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string, details?: string) => void;
}

const cancelReasons = [
  'Found alternative help',
  'Helper taking too long',
  'Changed my mind',
  'Wrong location selected',
  'Emergency resolved',
  'Service no longer needed',
  'Price too high',
  'Other reason',
];

const CancelReasonDialog = ({ isOpen, onClose, onConfirm }: CancelReasonDialogProps) => {
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [details, setDetails] = useState('');

  const handleConfirm = () => {
    if (selectedReason) {
      onConfirm(selectedReason, selectedReason === 'Other reason' ? details : undefined);
      setSelectedReason('');
      setDetails('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold">
                Cancel Request
              </DialogTitle>
              <DialogDescription>
                Please tell us why you're canceling
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <RadioGroup value={selectedReason} onValueChange={setSelectedReason}>
            <div className="space-y-2">
              {cancelReasons.map((reason) => (
                <div
                  key={reason}
                  className={`card-glass p-3 rounded-lg cursor-pointer transition-all ${
                    selectedReason === reason
                      ? 'ring-2 ring-healpers-coral'
                      : 'hover:ring-1 hover:ring-healpers-coral/50'
                  }`}
                  onClick={() => setSelectedReason(reason)}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={reason} id={reason} />
                    <Label htmlFor={reason} className="cursor-pointer flex-1">
                      {reason}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>

          {selectedReason === 'Other reason' && (
            <div className="space-y-2 animate-in slide-in-from-top-2">
              <Label htmlFor="details">Please provide more details</Label>
              <Textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Tell us more about your reason..."
                className="min-h-[100px]"
              />
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Keep Request
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!selectedReason || (selectedReason === 'Other reason' && !details.trim())}
            variant="destructive"
            className="flex-1"
          >
            Confirm Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CancelReasonDialog;
