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

export const industryPages = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    img: '/images/industries/real-estate.webp',
    alt: 'An agent showing an apartment to a couple',
    title: 'Buyers and investors,',
    accent: 'ready for a viewing.',
    lede: 'Property buyers compare projects for weeks and speak to several agents. We put the ones who match your development in front of you first, and keep your launch in view while they decide.',
    benefits: [
      'Buyers matched to each project and budget range',
      'See the project and budget before you pay',
      'Your launch on WiFi where buyers live and shop',
      'Call or WhatsApp in one tap, or send leads to your CRM',
    ],
    venues: ['Residential homes', 'Shopping malls', 'Coffee shops'],
    example: { project: 'Palm Residences', meta: '2-bed apartment · Budget AED 2M–3M' },
  },
  {
    id: 'automotive',
    name: 'Automotive',
    img: '/images/industries/luxury-cars.webp',
    alt: 'Cars in a showroom',
    title: 'Drivers ready to',
    accent: 'book a test drive.',
    lede: 'Car buyers shortlist models online, then visit only one or two showrooms. We reach them while they are choosing, and get the ones ready to buy on your phone first.',
    benefits: [
      'Leads for the models and price bands you sell',
      'Unlock only the serious buyers',
      'Full-screen video ads give a new model the whole screen',
      'Book the test drive the same day',
    ],
    venues: ['Shopping malls', 'Coffee shops', 'Residential homes'],
    example: { project: 'New SUV range', meta: 'Test drive wanted · Budget AED 180K–250K' },
  },
  {
    id: 'retail',
    name: 'Retail',
    img: '/images/industries/retail.webp',
    imgPos: '50% 35%',
    alt: 'A shopper browsing clothes in a store',
    title: 'Shoppers, while they’re',
    accent: 'out shopping.',
    lede: 'Footfall comes from reaching people nearby, at the moment they have time to browse. We put your offer in front of them in the malls they are already in, and bring you customers for bigger purchases.',
    benefits: [
      'Your offer on the WiFi login inside the mall',
      'One tap to your promo page or online shop',
      'Campaigns timed around sales and holidays',
      'Leads for furniture, electronics and other big purchases',
    ],
    venues: ['Shopping malls', 'Coffee shops', 'Staff accommodation'],
    example: { project: 'Living room furniture', meta: 'Sofa and dining set · Budget AED 15K–25K' },
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    img: '/images/industries/healthcare.webp',
    alt: 'A doctor talking with a patient',
    title: 'Patients looking for care,',
    accent: 'near your clinic.',
    lede: 'Clinics need booked appointments, not just awareness. We send you people asking about your treatments, and keep your clinic in mind in the communities you serve.',
    benefits: [
      'Enquiries for your treatments and packages',
      'Call back while patients are still deciding',
      'Check-up and seasonal offers in residential communities',
      'Report a bad lead and get the credits back',
    ],
    venues: ['Residential homes', 'Staff accommodation', 'Shopping malls'],
    example: { project: 'Dental implants', meta: 'Consultation wanted · Budget AED 5K–10K' },
  },
  {
    id: 'education',
    name: 'Education',
    img: '/images/industries/education.webp',
    alt: 'Students in a classroom',
    title: 'Students and parents,',
    accent: 'ready to enrol.',
    lede: 'Families and students compare schools, universities and courses for months before they commit. We reach them while they research, and send you the ones asking about your programmes.',
    benefits: [
      'Enquiries for your schools, courses and programmes',
      'See the programme and fee range before you pay',
      'Open days and new intakes on WiFi where families live',
      'Call or WhatsApp in one tap to book a campus visit',
    ],
    venues: ['Residential homes', 'Shopping malls', 'Coffee shops'],
    example: { project: 'British curriculum school', meta: 'Grade 3 admission · Fees AED 40K–60K' },
  },
] as const;

export const companyTimeline = [
  { year: '2020', title: 'Y5Media opens in Dubai', text: 'Starting with WiFi display advertising for UAE brands.' },
  { year: '2022', title: 'The WiFi network grows', text: '500+ locations and 50K+ hotspots across malls, cafés, residential communities and staff accommodation.' },
  { year: '2023', title: 'Brands across the UAE', text: 'Telecoms, banks, retailers and FMCG brands advertise with us, from e& and du to PepsiCo and McDonald’s.' },
  { year: '2024', title: 'Y5Leads launches', text: 'Verified buyer leads for every industry, delivered to a dashboard where clients unlock only the ones they want.' },
];
