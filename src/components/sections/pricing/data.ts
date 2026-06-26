export const BILLING_PERIODS = [
  {
    label: 'Monthly',
    key: 'monthly',
    saving: null,
  },
  {
    label: 'Annually',
    key: 'yearly',
    saving: '20%',
  },
] as const;

const AMOUNTS = {
  starter: {
    monthly: 299,
    yearly: 2868,
  },
  growth: {
    monthly: 599,
    yearly: 5750,
  },
  pro: {
    monthly: 999,
    yearly: 9590,
  },
  enterprise: {
    monthly: null,
    yearly: null,
  },
};

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];

export const BILLING_PLANS = [
  {
    name: 'Starter',
    description:
      'Perfect for small businesses and startups who want to build their digital presence and start generating leads online.',
    pricing: {
      monthly: {
        amount: AMOUNTS['starter']['monthly'],
        formattedPrice: '$' + AMOUNTS['starter']['monthly'],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['starter']['yearly'],
        formattedPrice: '$' + AMOUNTS['starter']['yearly'],
        stripeId: null,
      },
    },
    features: [
      'SEO Audit & On-Page Optimization',
      'Google Business Profile Setup',
      '2x Blog Posts per Month',
      'Social Media Management (1 platform)',
      'Monthly Performance Report',
      'Email Support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    description:
      'For growing businesses ready to scale their leads and revenue with a full digital marketing strategy.',
    pricing: {
      monthly: {
        amount: AMOUNTS['growth']['monthly'],
        formattedPrice: '$' + AMOUNTS['growth']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['growth']['yearly'],
        formattedPrice: '$' + AMOUNTS['growth']['yearly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_YEARLY_PRICE_ID!,
      },
    },
    features: [
      'Everything in Starter',
      'Google & Meta Ads Management',
      'Advanced SEO & Link Building',
      'Social Media Management (3 platforms)',
      '4x Blog Posts per Month',
      'Email Marketing Setup & Campaigns',
      'Bi-weekly Strategy Calls',
      'Priority Email & Chat Support',
    ],
    cta: 'Start Growing',
    popular: true,
  },
  {
    name: 'Pro',
    description:
      'For established businesses and e-commerce brands that need aggressive growth and full-service digital marketing.',
    pricing: {
      monthly: {
        amount: AMOUNTS['pro']['monthly'],
        formattedPrice: '$' + AMOUNTS['pro']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['pro']['yearly'],
        formattedPrice: '$' + AMOUNTS['pro']['yearly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_YEARLY_PRICE_ID!,
      },
    },
    features: [
      'Everything in Growth',
      'Full SEO + Technical SEO',
      'Advanced PPC on Google, Meta & LinkedIn',
      'Social Media (all platforms)',
      '8x Blog Posts + Content Strategy',
      'Landing Page Design & CRO',
      'Online Reputation Management',
      'Weekly Strategy Calls',
      'Dedicated Account Manager',
    ],
    cta: 'Go Pro',
    popular: false,
  },
  {
    name: 'Enterprise',
    description:
      'Custom solutions for large businesses, agencies, and brands with complex global marketing needs.',
    pricing: {
      monthly: {
        amount: AMOUNTS['enterprise']['monthly'],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['enterprise']['yearly'],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      'Everything in Pro',
      'Custom Multi-Channel Strategy',
      'International & Multilingual SEO',
      'Dedicated Team of Specialists',
      'Custom Reporting Dashboard',
      'SLA-Backed Support (24/7)',
      'Quarterly Business Reviews',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];
