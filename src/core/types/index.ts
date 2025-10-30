export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'patient' | 'healper';
  avatar?: string;
}

export interface Helper {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  phone: string;
  avatar: string;
  verified: boolean;
  completedTasks: number;
  specialties: string[];
  currentLocation: {
    lat: number;
    lng: number;
  };
  eta: string;
}

export interface BookingData {
  selectedService: string;
  location: string;
  estimatedTime: number;
  scheduledFor?: Date;
}

export interface ServiceType {
  id: string;
  name: string;
  description: string;
}
