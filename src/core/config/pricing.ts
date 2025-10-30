export const PRICING = {
  pricePerMinute: 8,
  defaultMinutes: 20,
  currency: '₹',
} as const;

export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 299,
    duration: 'per task',
    features: [
      'Single task completion',
      'Up to 2 hours service',
      'Basic report collection',
      'Live tracking',
      'Chat support',
    ],
    highlighted: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 799,
    duration: 'per day',
    features: [
      'Multiple tasks',
      'Up to 8 hours service',
      'Priority response',
      'Document organization',
      'Live tracking',
      '24/7 phone support',
    ],
    highlighted: true,
  },
  {
    id: 'care',
    name: 'Care Package',
    price: 4999,
    duration: 'per week',
    features: [
      'Unlimited tasks',
      'Dedicated Healper',
      'Full day availability',
      'Premium support',
      'Family coordination',
      'Medical liaison',
    ],
    highlighted: false,
  },
] as const;
