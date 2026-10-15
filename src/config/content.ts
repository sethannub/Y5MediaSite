// Content shared by the home page and the product pages.

export const clients = [
  ['etisalat-color-logo', 'e& (Etisalat)'],
  ['du-logo-y5media-wifi-advertisement-client', 'du'],
  ['union-coop-color-logo', 'Union Coop'],
  ['sharjah-coop-1', 'Sharjah Co-op'],
  ['cbd-color0logo-2', 'Commercial Bank of Dubai'],
  ['panasonic-color-logo', 'Panasonic'],
  ['mountain-dew-logo-1', 'Mountain Dew'],
  ['alokozay-logo-y5media-wifi-advertisement-client', 'Alokozay'],
  ['ghurair-color-logo', 'Al Ghurair'],
  ['lm-exchange-logo', 'LM Exchange'],
  ['taamul-logo', 'Taamul Credit'],
  ['yallamarket-logo', 'Yalla Market'],
  ['daytoday-logo', 'Day to Day'],
  ['coolandcool-color-logo', 'Cool & Cool'],
  ['five-logo', 'FIVE'],
  ['mashreq-bank-logo', 'Mashreq'],
  ['pepsico-logo', 'PepsiCo'],
  ['mcdonalds', 'McDonald’s'],
  ['lulu-exchange-logo', 'Lulu Exchange'],
  ['alfardan-logo-black', 'Al Fardan Exchange'],
  ['sharaf-exchange-logo-1', 'Sharaf Exchange'],
  ['aafaq-logo', 'Aafaq Islamic Finance'],
  ['helping-small', 'Helping Small'],
].map(([file, name]) => ({ src: `/images/clients/${file}.png`, name }));

export const venues = [
  {
    name: 'Shopping malls',
    img: '/images/venues/malls.webp',
    audience: 'Families, shoppers and tourists, mostly aged 18 to 45, middle to high income.',
    why: 'Catch attention during relaxed shopping trips with bright, visual ads.',
  },
  {
    name: 'Residential homes',
    img: '/images/venues/homes.webp',
    audience: 'Professionals aged 25 to 50, including staff of major UAE employers, with stable incomes.',
    why: 'A personal setting where your message gets full attention.',
  },
  {
    name: 'Coffee shops',
    img: '/images/venues/cafes.webp',
    audience: 'Office workers, freelancers and friends meeting up, mostly aged 20 to 40.',
    why: 'A relaxed audience that responds well to premium and lifestyle brands.',
  },
  {
    name: 'Staff accommodation',
    img: '/images/venues/staff.webp',
    audience: 'Workers in construction, manufacturing and logistics.',
    why: 'Long time online every day on mobile, ideal for clear, direct offers.',
  },
];

export const industries = [
  { name: 'Real Estate', img: '/images/industries/real-estate.webp', both: true },
  { name: 'Luxury Cars', img: '/images/industries/luxury-cars.webp', both: true },
  { name: 'Hospitality & Travel', img: '/images/industries/hospitality.webp', both: true },
  { name: 'Retail & E-commerce', img: '/images/industries/retail.webp', both: true },
  { name: 'Banking & Finance', img: '/images/industries/finance.webp', both: true },
  { name: 'Healthcare', img: '/images/industries/healthcare.webp', both: true },
  { name: 'Education', img: '/images/industries/education.webp', both: true },
  { name: 'B2B & Corporate', img: '/images/industries/corporate.webp', both: true },
];

export const reasons = [
  { title: 'Targeted reach', text: 'Reach people in the places that matter to you, from malls and cafés to homes and staff accommodation.' },
  { title: 'Built around results', text: 'Every campaign starts from a clear goal: more people seeing your brand, more visits, or more enquiries.' },
  { title: 'Numbers you can check', text: 'Impressions, clicks and devices for Y5Ads. Every lead and every credit for Y5Leads.' },
  { title: 'Use one or both', text: 'Run Y5Ads, Y5Leads, or both together, based on your audience and budget.' },
];

export const wifiSteps = [
  { title: 'She connects', text: 'A shopper joins the free WiFi in a mall, café or residence.' },
  { title: 'Your ad plays', text: 'Your banner or video shows on the login screen before she gets online.' },
  { title: 'She taps through', text: 'One tap takes her to your website, offer or landing page.' },
  { title: 'You see the results', text: 'Impressions, clicks, devices and locations land in your campaign report.' },
];

export const leadSteps = [
  { title: 'New leads arrive', text: 'Buyers matched to your projects appear in your list, names hidden.' },
  { title: 'Check before you pay', text: 'See the project and budget first. Open any lead to look closer.' },
  { title: 'Unlock for AED 250', text: 'Click Unlock, then click again to confirm. The lead is yours.' },
  { title: 'Call, WhatsApp or copy', text: 'The number appears with one-tap Call, WhatsApp and Copy buttons.' },
  { title: 'Everything on your dashboard', text: 'Credits, projects and every lead you’ve unlocked, in one place.' },
];
