# CLAUDE.md: Y5Media website

The public website for Y5Media. It presents two products on one site:

- **Y5Ads**: banner and video ads on WiFi login screens in malls, cafés,
  homes and staff accommodation (the existing WiFi display platform).
- **Y5Leads**: buyer leads for every industry, from property to luxury cars
  (the app at https://leads.y5media.net, source in `C:\Codex\Y5LeadsCRM`).

It is a separate project from the Y5Leads app and from the emailaat site
(`C:\Codex\Y5Email`). The look and the build setup follow emailaat, with much less
motion: no Three.js, no smooth-scroll library, no page transitions.

## Decisions (13 Oct 2026)

- Hosting: GitHub plus Cloudflare Pages, the same setup as emailaat. The site runs on a
  preview URL until the domain is switched over from the current WordPress site.
- Product names: "Y5Ads" and "Y5Leads" (no space). "Y5Media" is the company.
- Y5Leads pricing on the site: AED 250 a lead standard, with credit packs of 2,500 (5% off),
  5,000 (10% off) and 7,500+ (15% off), excluding 5% VAT. Keep this in step with the credit
  packs in the Y5Leads app. The app also has a custom tier from 8,000 credits at 20% off,
  which the site leaves out and covers with "Talk to us".
- Y5Leads covers every industry (changed 15 Oct 2026; it was real estate only). Leads come from
  Y5Media's own 360° marketing platform, powered by an audience built over years across every
  industry in the UAE. Never say the leads come from "our database". Y5Ads covers every industry.
- Y5Ads copy, stats and images come from y5media.net (15 Oct 2026): 50K+ hotspots, 500+ locations,
  50M+ impressions, 40–60% conversion, CPM from $4, CPC from $0.02, AED 200 free ad credit.
- The contact form is general: one form, with a choice of Y5Ads, Y5Leads, both or other.
- The client logos are current Y5Ads clients, taken from y5media.net.

## Content sources

- `C:\Codex\Y5LeadsCRM\docs\Y5MEDIA.docx`: the homepage brief (sections, copy, navigation).
- https://y5media.net/demo/: the current site. Audience, venue and reporting copy, client
  logos, venue and industry photos.
- Claims about Y5Leads must match what the app actually does.

## Structure

- `src/config/site.ts`: company details, navigation, logins, product summaries and pricing.
- `src/config/content.ts`: client logos, venues, industries, reasons, and the journey steps.
- `src/components/home/HeroSlant.astro`: the home page hero (option A chosen by the CEO, 14 Oct 2026, with
  option D's colours). A straight corner-to-corner divider with an AND badge: Y5Leads top left on dark
  emerald, Y5Ads bottom right on white. At rest only label, name (Y5 logo + word), one line and Explore
  more. Clicking a side (not hovering; changed 19 Oct 2026 at the user's request) swings the divider and
  brings in its details and graphic (`LeadsFeed.astro`, `AdsPhones.astro`). A click on the open side
  follows its link to the product page. Below the hero, home shows one short summary per product
  (`AdsSummary`, `LeadsSummary`, each with Learn more to its page). Both show until a side is opened;
  then only that product's `[data-product]` block shows.
  `/#y5ads` and `/#y5leads` pick one too. Below 961px both always show. The full detail lives on the
  product pages, not on home.
  Options B, C, D stay as `/hero-*` mockups (`HeroCross`, `HeroWave`, `HeroMotion`).
- `src/pages/about.astro`: the /about page (15 Oct 2026). It opens on an industry selector
  (`components/about/IndustrySelector.astro`, content in `industryPages` in `content.ts`): Real Estate, Automotive,
  Retail, Healthcare and Education as tabs that auto-advance every 8 seconds, each with a photo, an example lead,
  four benefits and venues. Y5Ads and Y5Leads are deliberately not split out there. Then the company: facts
  (founded 2020), mission and vision, the timeline (`companyTimeline`), network numbers, how we work, the office
  (hours in `site.contact.hours`). No team section and no client logos (those stay on home only). The user wants
  no extra pages: the separate /industries page was retired and now redirects to `/about#industries`.
  `/about#automotive` (or any industry id) opens that tab.
- `src/components/y5ads/`: the /y5ads page, laid out like y5media.net, with its graphics as full-width
  section backgrounds: `AdsHero` (three cross-fading slides: lime, dark traffic, UAE map), `AdsAttention`
  (with the transparent portal video, `public/video/portal-steps.webm`, 500x582 VP9 with alpha),
  `AdsAdvantages` (phones), `AdsSetup` (lime laptop), `AdsNetwork` (laptop on white), `AdsClients`, and
  `AdsControl` (watermark). Images are in `public/images/y5ads`.
- `src/components/PageHero.astro`: product page hero. `bg` adds a photo and `full` makes it full-screen
  (used by /y5leads).
- `src/components/SiteControls.astro`: floating Back (previous page) and Back to top buttons on every page.
- `src/components/Journey.astro`: the step-by-step journey. It plays while in view, and
  picking a step stops it. With reduced motion it never auto-plays.
- `src/components/mocks/`: the HTML phone (Y5Ads) and app (Y5Leads) screens the
  journeys show.
- `functions/api/contact.ts`: the contact form handler (Cloudflare Pages Function, Email
  Routing). Setup is the same as emailaat's `docs/CONTACT_FORM.md`.
- `docs/PHOTO_SOURCES.md`: where every stock photo came from (Unsplash and Pexels, free licences,
  no credit required). Photos are cropped WebP files in `public/images/{hero,venues,industries,people}`.
- `public/images/y5leads/claim-*.webp`: real screenshots of the Y5Leads app (local test account,
  sample leads) used by the claim animation (`ClaimFilm.astro`). Retake them if the app's look changes.
- `docs/IMAGE_PROMPTS.md`: prompts for any images still to generate.

## Launch on y5media.net (16 Oct 2026)

- The site replaces the WordPress site at y5media.net. The WordPress site moves to
  old.y5media.net; `public/_redirects` sends its blog, archive, /demo and wp-* paths there.
- Terms and Privacy carry the WordPress text word for word, in
  `src/config/legal.json`, rendered by `components/LegalPage.astro`. PayTabs and the WiFi
  login screens may link to them, so keep both. The old `/privacy-policy` path redirects, and the
  Refund Policy page was removed at the user's request (19 Oct 2026); `/refund-policy` redirects to `/terms`.
- The Y5Ads login is https://wifiads.y5media.net (a separate system, not touched by the switch).
- y5media.net mail is Google Workspace. Never switch on Cloudflare Email Routing for the apex
  domain: it replaces the MX records and stops company email. The contact form must send
  some other way (see Open items).
- Contact enquiries go to info@y5media.net.

## Open items

- The contact form's delivery (Email Routing on the apex is ruled out, see above).
- The Y5Leads product card photo (a placeholder for now, see `docs/IMAGE_PROMPTS.md`).

## Running locally

```
npm install
npm run dev      # http://localhost:4340
npm run build
```
