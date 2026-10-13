// Minimal types for the Cloudflare Pages Functions in this folder, so no extra
// npm packages are needed. See docs/CONTACT_FORM.md for what each value is.

declare module 'cloudflare:email' {
  export class EmailMessage {
    constructor(from: string, to: string, raw: string | ReadableStream);
    readonly from: string;
    readonly to: string;
  }
}

interface SendEmailBinding {
  send(message: import('cloudflare:email').EmailMessage): Promise<void>;
}

interface ContactEnv {
  /** Cloudflare Email Routing "send_email" binding. */
  CONTACT_EMAIL?: SendEmailBinding;
  /** Verified destination address that receives submissions. */
  CONTACT_TO?: string;
  /** Sender address on the site's own domain, e.g. forms@yourdomain.com. */
  CONTACT_FROM?: string;
  /** Turnstile secret key. When unset, the spam check is skipped. */
  TURNSTILE_SECRET?: string;
}

interface PagesContext<Env> {
  request: Request;
  env: Env;
}
