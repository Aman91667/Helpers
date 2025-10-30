import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Shield,
  Phone,
  User,
  FileText,
  Smartphone,
} from 'lucide-react';
import { toast } from 'sonner';
import { ROUTES } from '@/core/config/constants';

const HelperRegistrationPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    address: '',

    // Step 2: Phone Verification
    otp: '',
    phoneVerified: false,

    // Step 3: Documents
    idType: '',
    idNumber: '',
    idDocument: null as File | null,

    // Step 4: Additional Info
    experience: '',
    availability: '',
    languages: '',
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, idDocument: e.target.files[0] });
    }
  };

  const sendOTP = () => {
    toast.success(`Verification code sent to ${formData.phone}`);
  };

  const verifyOTP = () => {
    if (formData.otp === '123456' || formData.otp.length === 6) {
      setFormData({ ...formData, phoneVerified: true });
      toast.success('Your phone number has been verified successfully');
      setCurrentStep(3);
    } else {
      toast.error('Please enter a valid 6-digit code');
    }
  };

  const handleDigiLockerVerification = () => {
    toast.info('Redirecting to DigiLocker for document verification...');
    setTimeout(() => {
      setFormData({ ...formData, idType: 'Aadhaar', idNumber: 'XXXX-XXXX-1234' });
      toast.success('Your documents have been verified via DigiLocker');
    }, 2000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.phone && formData.age && formData.city;
      case 2:
        return formData.phoneVerified;
      case 3:
        return formData.idType && formData.idNumber;
      case 4:
        return formData.availability && formData.languages;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        toast.success("Your application is under review. We'll contact you within 24 hours.");
        setTimeout(() => navigate(ROUTES.HEALPER_DASHBOARD), 2000);
      }
    } else {
      toast.error('Please fill all required fields');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Personal Details</h2>
                <p className="text-sm text-muted-foreground">Tell us about yourself</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  placeholder="18-60"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Your city"
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Full Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Your complete address"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Phone Verification</h2>
                <p className="text-sm text-muted-foreground">Verify your phone number</p>
              </div>
            </div>

            {!formData.phoneVerified ? (
              <div className="space-y-4">
                <Card className="p-6 bg-muted/50">
                  <p className="text-sm mb-4">
                    We'll send a verification code to <strong>{formData.phone}</strong>
                  </p>
                  <Button onClick={sendOTP} className="btn-glass-primary w-full">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Send OTP
                  </Button>
                </Card>

                <div>
                  <Label htmlFor="otp">Enter 6-digit OTP</Label>
                  <Input
                    id="otp"
                    value={formData.otp}
                    onChange={(e) => handleInputChange('otp', e.target.value)}
                    placeholder="123456"
                    maxLength={6}
                    className="mt-1 text-center text-2xl tracking-widest"
                  />
                </div>

                <Button onClick={verifyOTP} className="btn-glass-primary w-full">
                  Verify OTP
                </Button>
              </div>
            ) : (
              <Card className="p-6 bg-healpers-teal/10 border-healpers-teal">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-healpers-teal" />
                  <div>
                    <p className="font-semibold">Phone Verified Successfully</p>
                    <p className="text-sm text-muted-foreground">{formData.phone}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Document Verification</h2>
                <p className="text-sm text-muted-foreground">KYC verification via DigiLocker</p>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-healpers-coral/10 to-healpers-teal/10 border-dashed">
              <div className="text-center space-y-4">
                <Shield className="w-16 h-16 mx-auto text-healpers-coral" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Verify via DigiLocker</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick and secure verification using your Aadhaar-linked documents
                  </p>
                </div>
                <Button onClick={handleDigiLockerVerification} className="btn-glass-primary">
                  <Shield className="w-4 h-4 mr-2" />
                  Connect DigiLocker
                </Button>
              </div>
            </Card>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or upload manually</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="idType">ID Type</Label>
                <select
                  id="idType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={formData.idType}
                  onChange={(e) => handleInputChange('idType', e.target.value)}
                >
                  <option value="">Select ID Type</option>
                  <option value="Aadhaar">Aadhaar Card</option>
                  <option value="PAN">PAN Card</option>
                  <option value="DL">Driving License</option>
                  <option value="Voter">Voter ID</option>
                </select>
              </div>

              <div>
                <Label htmlFor="idNumber">ID Number</Label>
                <Input
                  id="idNumber"
                  value={formData.idNumber}
                  onChange={(e) => handleInputChange('idNumber', e.target.value)}
                  placeholder="Enter ID number"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="idDocument">Upload Document</Label>
                <div className="mt-1 flex items-center gap-2">
                  <Input
                    id="idDocument"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="cursor-pointer"
                  />
                  {formData.idDocument && (
                    <CheckCircle className="w-5 h-5 text-healpers-teal flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Upload clear photo/scan of your ID (max 5MB)
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Additional Information</h2>
                <p className="text-sm text-muted-foreground">Help us know you better</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="experience">Previous Experience (if any)</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  placeholder="Have you worked in healthcare or customer service before?"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="availability">Availability *</Label>
                <select
                  id="availability"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.availability}
                  onChange={(e) => handleInputChange('availability', e.target.value)}
                >
                  <option value="">Select availability</option>
                  <option value="full-time">Full-time (8+ hours/day)</option>
                  <option value="part-time">Part-time (4-6 hours/day)</option>
                  <option value="flexible">Flexible (as per requests)</option>
                  <option value="weekends">Weekends only</option>
                </select>
              </div>

              <div>
                <Label htmlFor="languages">Languages Known *</Label>
                <Input
                  id="languages"
                  value={formData.languages}
                  onChange={(e) => handleInputChange('languages', e.target.value)}
                  placeholder="e.g., Hindi, English, Marathi"
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">Separate multiple languages with commas</p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-healpers-coral to-healpers-teal flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Review & Submit</h2>
            <p className="text-muted-foreground">Please review your information before submitting</p>

            <Card className="p-6 text-left space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Personal Details</p>
                <p className="font-medium">{formData.fullName}</p>
                <p className="text-sm">
                  {formData.email} • {formData.phone}
                </p>
                <p className="text-sm">
                  {formData.city}, Age: {formData.age}
                </p>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Verification Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle className="w-4 h-4 text-healpers-teal" />
                  <span className="text-sm">Phone Verified</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle className="w-4 h-4 text-healpers-teal" />
                  <span className="text-sm">
                    {formData.idType} - {formData.idNumber}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="font-medium capitalize">{formData.availability}</p>
                <p className="text-sm">Languages: {formData.languages}</p>
              </div>
            </Card>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm">
                By submitting, you agree to our Terms of Service and Privacy Policy. We'll review your application and
                contact you within 24 hours.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() =>
              currentStep > 1 ? setCurrentStep(currentStep - 1) : navigate(ROUTES.BECOME_HEALPER)
            }
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Step Content */}
        <Card className="card-glass p-8">{renderStep()}</Card>

        {/* Navigation */}
        <div className="mt-6 flex gap-4">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="btn-glass"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button onClick={handleNext} disabled={!canProceed()} className="btn-glass-primary flex-1">
            {currentStep === totalSteps ? 'Submit Application' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelperRegistrationPage;
