# CLAUDE.md: Y5Media website

The public website for Y5Media. It presents two products on one site:

- **Y5Ads**: banner and video ads on WiFi login screens in malls, cafés,
  homes and staff accommodation (the existing WiFi display platform).
- **Y5Leads**: property buyer leads for real estate agencies
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
- Y5Leads is real estate only for now. Y5Ads covers every industry.
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
- `src/components/home/HomeSplit.astro`: the home page opener, a split screen (approved 13 Oct 2026,
  after the Dribbble "Split Screen Interaction" shot). Y5Ads is the lime half, Y5Leads the
  deep green half. Picking one opens it in place, the other collapses to a strip, and that
  product's sections (`[data-product]` in `index.astro`) show below. `/#wifi` and `/#y5leads`
  open a side directly; the nav links use them.
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
