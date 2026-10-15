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
  more. Hovering a side swings the divider and brings in its details and graphic (`LeadsFeed.astro`,
  `AdsPhones.astro`). Each side links to its product page. Both products' sections show below on home
  until a side is hovered; then only that product's `[data-product]` block shows, and it stays after the
  pointer leaves. `/#y5ads` and `/#y5leads` pick one too. Below 961px both always show.
  Options B, C, D stay as `/hero-*` mockups (`HeroCross`, `HeroWave`, `HeroMotion`).
- `src/components/y5ads/`: the Y5Ads sections built from y5media.net (`AdsStats`, `AdsAttention`,
  `AdsAdvantages`, `AdsSetup`, `AdsNetwork`). Their images are in `public/images/y5ads`, and the
  transparent login-portal animation is `public/video/portal-steps.webm` (500x582, VP9 with alpha).
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

## Open items

- The Y5Ads login URL (`site.logins` in `src/config/site.ts`, empty for now).
- The Y5Leads product card photo (a placeholder for now, see `docs/IMAGE_PROMPTS.md`).
- Privacy Policy and Terms of Use text.
- The GitHub repository and the Cloudflare Pages project.
- At launch: set `indexable: true` in `site.ts` and delete `public/_headers`.

## Running locally

```
npm install
npm run dev      # http://localhost:4340
npm run build
```
