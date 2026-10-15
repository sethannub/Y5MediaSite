// Everything the site says about the company lives here.

export const site = {
  name: 'Y5Media',
  tagline: 'WiFi advertising and lead generation in the UAE',
  description:
    'Y5Media helps brands reach people across the UAE with Y5Ads in malls, cafés, homes and staff accommodation, and delivers buyer leads for every industry, from property to luxury cars, through Y5Leads.',

  analytics: {
    ga4Id: (import.meta.env.PUBLIC_GA4_ID as string | undefined) ?? '',
  },

  // Pre-launch: keep search engines out. At launch set true AND delete public/_headers.
  indexable: false,

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Y5Ads', href: '/y5ads' },
    { label: 'Y5Leads', href: '/y5leads' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ],

  cta: { label: 'Talk to us', href: '/contact' },

  logins: [
    { label: 'Y5Leads', note: 'Buyer leads', href: 'https://leads.y5media.net/login' },
    { label: 'Y5Ads', note: 'Campaign reports', href: '' as string }, // TODO: WiFi platform login URL
  ],

  contact: {
    email: 'info@y5media.net',
    phone: '+971 4 566 2317',
    phoneHref: '+97145662317',
    address: ['2nd Floor, EDB Building', 'Rebat St., Al Garhoud', 'Dubai, UAE'],
  },

  social: [] as { label: string; href: string }[],
} as const;

export const products = {
  wifi: {
    name: 'Y5Ads',
    href: '/y5ads',
    tagline: 'Reach people where they connect',
    summary:
      'Your banner or video plays on the WiFi login screen in malls, cafés, homes and staff accommodation across the UAE. People see it the moment they connect, tap through to your site, and you watch the results come in.',
    points: [
      'Target audiences by location',
      'Banner and video ad formats',
      'Drive visits to your website or offer',
      'Track impressions, clicks and devices',
    ],
  },
  leads: {
    name: 'Y5Leads',
    href: '/y5leads',
    tagline: 'Buyer leads for every industry, ready to call',
    summary:
      'Customers interested in what you sell are matched to your product or service and delivered to your Y5Leads dashboard. Unlock the ones you want, and we can push them to your own CRM.',
    points: [
      'Leads matched to your projects and budget',
      'Pay only for the leads you unlock',
      'Call, WhatsApp or copy to your CRM in one click',
      'Report a bad lead and get your credits back',
    ],
  },
} as const;

// Y5Leads pricing. Keep in step with the credit packs in the Y5Leads app (Credits page).
// 1 credit = AED 1; prices exclude 5% VAT.
export const leadPricing = {
  perLead: 250,
  vat: 5,
  packs: [
    { name: 'Starter', credits: 2500, discount: 5 },
    { name: 'Growth', credits: 5000, discount: 10 },
    { name: 'Scale', credits: 7500, discount: 15 },
  ],
} as const;

export const aed = (n: number): string => 'AED ' + Math.round(n).toLocaleString('en-US');
