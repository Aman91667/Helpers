import { Pill, Users, Navigation, HeartHandshake, FileText, ClipboardList, Phone } from 'lucide-react';

export const serviceCategories = [
  {
    id: 'medicine-pickup',
    name: 'Medicine Pickup',
    icon: Pill,
    description: 'Quick pharmacy runs and prescription collection',
    color: 'from-healpers-coral/30 to-healpers-coral/10',
    borderColor: 'healpers-coral',
  },
  {
    id: 'queue-assistance',
    name: 'Queue Assistance',
    icon: Users,
    description: 'Stand in lines for registration, billing, or consultations',
    color: 'from-healpers-teal/30 to-healpers-teal/10',
    borderColor: 'healpers-teal',
  },
  {
    id: 'navigation-help',
    name: 'Navigation Help',
    icon: Navigation,
    description: 'Guide you through hospital departments and facilities',
    color: 'from-accent/30 to-accent/10',
    borderColor: 'accent',
  },
  {
    id: 'patient-escort',
    name: 'Patient Escort',
    icon: HeartHandshake,
    description: 'Accompany patients to tests, procedures, or appointments',
    color: 'from-primary/30 to-primary/10',
    borderColor: 'primary',
  },
  {
    id: 'report-collection',
    name: 'Report Collection',
    icon: FileText,
    description: 'Fetch lab reports, X-rays, and medical documents',
    color: 'from-healpers-coral/30 to-healpers-coral/10',
    borderColor: 'healpers-coral',
  },
  {
    id: 'wheelchair-aid',
    name: 'Wheelchair Aid',
    icon: HeartHandshake,
    description: 'Wheelchair assistance and patient mobility support',
    color: 'from-healpers-teal/30 to-healpers-teal/10',
    borderColor: 'healpers-teal',
  },
  {
    id: 'medical-coordination',
    name: 'Medical Coordination',
    icon: ClipboardList,
    description: 'Coordinate between departments and manage appointments',
    color: 'from-accent/30 to-accent/10',
    borderColor: 'accent',
  },
  {
    id: 'emergency-support',
    name: 'Emergency Support',
    icon: Phone,
    description: 'Urgent assistance for emergency situations',
    color: 'from-destructive/30 to-destructive/10',
    borderColor: 'destructive',
  },
] as const;

export type ServiceCategory = typeof serviceCategories[0];
