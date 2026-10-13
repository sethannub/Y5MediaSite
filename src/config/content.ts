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
  ['helping-small', 'Helping Small'],
].map(([file, name]) => ({ src: `/images/clients/${file}.png`, name }));

export const venues = [
  {
    name: 'Shopping malls',
    img: '/images/venues/malls-audience-02.jpg',
    audience: 'Families, shoppers and tourists, mostly aged 18 to 45, middle to high income.',
    why: 'Catch attention during relaxed shopping trips with bright, visual ads.',
  },
  {
    name: 'Residential homes',
    img: '/images/venues/home-family-audience.jpg',
    audience: 'Professionals aged 25 to 50, including staff of major UAE employers, with stable incomes.',
    why: 'A personal setting where your message gets full attention.',
  },
  {
    name: 'Coffee shops',
    img: '/images/venues/coffee-shops-audience.jpg',
    audience: 'Office workers, freelancers and friends meeting up, mostly aged 20 to 40.',
    why: 'A relaxed audience that responds well to premium and lifestyle brands.',
  },
  {
    name: 'Staff accommodation',
    img: '/images/venues/labour-camps.jpg',
    audience: 'Workers in construction, manufacturing and logistics.',
    why: 'Long time online every day on mobile, ideal for clear, direct offers.',
  },
];

export const industries = [
  { name: 'Real Estate', img: '/images/industries/real-estate-ad-cmapaigns.jpg', both: true },
  { name: 'Retail & E-commerce', img: '/images/industries/retail-ad-campaigns.jpg' },
  { name: 'Banking & Finance', img: '/images/industries/banks-ad-campaigns.jpg' },
  { name: 'Healthcare', img: '/images/industries/healthcare-ads.jpg' },
  { name: 'Education', img: '/images/industries/education-ad-campaigns.jpg' },
  { name: 'B2B & Corporate', img: '/images/industries/corporate-office-ad-campaigns.jpg' },
];

export const reasons = [
  { title: 'Targeted reach', text: 'Reach people in the places that matter to you, from malls and cafés to homes and staff accommodation.' },
  { title: 'Built around results', text: 'Every campaign starts from a clear goal: more people seeing your brand, more visits, or more enquiries.' },
  { title: 'Numbers you can check', text: 'Impressions, clicks and devices for WiFi Marketing. Every lead and every credit for Y5Leads.' },
  { title: 'Use one or both', text: 'Run WiFi Marketing, Y5Leads, or both together, based on your audience and budget.' },
];

export const wifiSteps = [
  { title: 'She connects', text: 'A shopper joins the free WiFi in a mall, café or residence.' },
  { title: 'Your ad plays', text: 'Your banner or video shows on the login screen before she gets online.' },
  { title: 'She taps through', text: 'One tap takes her to your website, offer or landing page.' },
  { title: 'You see the results', text: 'Impressions, clicks, devices and locations land in your campaign report.' },
];

export const leadSteps = [
  { title: 'A buyer enquires', text: 'Someone looking for property leaves their details, budget and timeline.' },
  { title: 'Matched to your project', text: 'The lead goes to the agency whose project fits the buyer’s budget and area.' },
  { title: 'You unlock it', text: 'New leads stay blurred until you unlock them with credits, so you only pay for the ones you want.' },
  { title: 'Call, copy or report', text: 'Call or WhatsApp in one tap, copy the details into your CRM, or report a bad lead for a refund.' },
];
