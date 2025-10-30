export const APP_NAME = 'Healpers';
export const APP_TAGLINE = 'Hospital Companion';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  BOOK_HELPER: '/book-helper',
  SEARCHING: '/searching',
  TRACKING: '/tracking',
  BECOME_HEALPER: '/become-healper',
  HEALPER_REGISTRATION: '/healper-registration',
  HEALPER_DASHBOARD: '/healper-dashboard',
  ABOUT: '/about',
} as const;

export const PATIENT_NEEDS = [
  {
    id: 'wheelchair',
    name: 'Wheelchair Assistance',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'injured',
    name: 'Injured / Need Assistance',
    color: 'from-rose-400 to-pink-600',
  },
  {
    id: 'first-time',
    name: 'First-time Visitor',
    color: 'from-emerald-400 to-green-600',
  },
  {
    id: 'guidance',
    name: 'Need Hospital Guidance',
    color: 'from-indigo-400 to-purple-600',
  },
] as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    ME: '/auth/me',
  },
  HELPERS: {
    LIST: '/helpers',
    SEARCH: '/helpers/search',
    AVAILABILITY: '/helpers/availability',
  },
  BOOKINGS: {
    CREATE: '/bookings',
    LIST: '/bookings',
    DETAIL: (id: string) => `/bookings/${id}`,
    CANCEL: (id: string) => `/bookings/${id}/cancel`,
  },
} as const;
