# Launching the new site on y5media.net

This site replaces the WordPress site at y5media.net. The WordPress site is kept, on
old.y5media.net, so its blog posts and the /demo/ site stay online.

## Read this first: company email

y5media.net email runs on **Google Workspace** (the MX records point to
`aspmx.l.google.com`). Do **not** switch on Cloudflare **Email Routing** for
y5media.net. It replaces those MX records, and company email stops arriving.

When you add the custom domain in step 4, Cloudflare only changes the `y5media.net`
and `www` records. The MX and TXT records must stay as they are.

## What is already done in the code

- Terms, Privacy and Refund Policy carry the WordPress text word for word
  (`src/config/legal.json`). PayTabs and the WiFi login screens may link to them.
- `public/_redirects` sends old WordPress paths to old.y5media.net:
  `/blog`, `/wifi/*`, `/category/*`, `/author/*`, `/2017/*` and the other year archives,
  `/demo/*`, `/wp-content/*`, `/wp-includes/*`, `/wp-admin/*`, `/wp-login.php`, `/feed/*`.
  `/privacy-policy/` goes to `/privacy`.
- The Y5Ads login button points to https://wifiads.y5media.net. That subdomain is not
  touched by any step here.
- Search engines are allowed (`indexable: true`), and canonical URLs use https://y5media.net.

## Steps

Do them in this order. Nothing changes for visitors until step 4.

### 1. Cloudflare Pages project

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick the GitHub repository **sethannub/Y5MediaSite**.
3. Build settings:
   - Project name: `y5media-site`
   - Production branch: `main`
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `24`
4. **Save and Deploy**, then check the site at https://y5media-site.pages.dev.

### 2. Move WordPress to old.y5media.net

1. Cloudflare → y5media.net → **DNS**. Note what the `y5media.net` record points to
   (the WordPress server).
2. Add a record `old` pointing to the same place, **Proxied**.
3. On the hosting, make the WordPress site answer on `old.y5media.net` too
   (an alias or extra domain in the hosting panel). If Cloudflare SSL is set to
   **Full (strict)**, the origin certificate must also cover `old.y5media.net`.
4. Check that https://old.y5media.net/ loads. At this point it may still redirect to
   y5media.net. That is expected until step 3.

### 3. Switch WordPress's own address (do this right before step 4)

WordPress redirects every request to the address it believes it lives at, so it must
be told about the change:

1. WordPress admin → **Settings → General**.
2. Set **WordPress Address (URL)** and **Site Address (URL)** to `https://old.y5media.net`.
3. Save. Do the same in the /demo/ WordPress install if it is a separate one.

Alternative if the admin screen is awkward: add these lines to `wp-config.php`:

```php
define('WP_HOME', 'https://old.y5media.net');
define('WP_SITEURL', 'https://old.y5media.net');
```

### 4. Point y5media.net at the new site

1. Workers & Pages → **y5media-site** → **Custom domains** → **Set up a custom domain**.
2. Add `y5media.net`. Cloudflare offers to replace the existing record. Accept.
3. Add `www.y5media.net` the same way.

### 5. Check

- https://y5media.net/ shows the new site, and https://www.y5media.net/ does too.
- https://y5media.net/terms, `/privacy` and `/refund-policy` show the policy text.
- https://y5media.net/privacy-policy/ redirects to `/privacy`.
- https://y5media.net/wifi/wifi-marketing-for-restaurant-cafes/ redirects to old.y5media.net
  and the post loads with its images.
- https://y5media.net/demo/ redirects to old.y5media.net/demo/ and loads.
- https://wifiads.y5media.net and https://leads.y5media.net still work.
- Send a test email to info@y5media.net from outside the company. It still arrives.

### Rolling back

Remove the two custom domains from the Pages project, put the `y5media.net` and `www`
records back as noted in step 2.1, and set the WordPress addresses back to
`https://y5media.net`.

## Not done yet

- **The contact form cannot send.** Because Email Routing is ruled out on the apex domain,
  the form needs another delivery route (Email Routing on a subdomain only, or sending
  through SendGrid, which the domain's SPF record already allows). Until then it shows the
  "we couldn't send that" message with the email address. Enquiries go to info@y5media.net.
- After launch, the temporary copy at https://leads.y5media.net/preview can be removed
  (a route and the `public/y5media` folder in the Y5Leads app).
