// POST /api/contact: receives the website contact form and emails it to the team
// through Cloudflare Email Routing. Setup: docs/CONTACT_FORM.md.
// Nothing is stored. Logs record only what went wrong, never the visitor's details.

import { EmailMessage } from 'cloudflare:email';

// Keep in step with src/components/ContactForm.astro
const INTERESTS = ['y5ads', 'y5leads', 'y5campaigns', 'both', 'other'];
const INTEREST_LABEL: Record<string, string> = { y5ads: 'Y5Ads', y5leads: 'Y5Leads', y5campaigns: 'Y5Campaigns', both: 'More than one', other: 'Something else' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_BODY_BYTES = 20_000;

type Submission = {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
};

const json = (status: number, body: { ok: boolean; error?: string }) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

/** Trim, drop control characters (keeping newlines where allowed) and cap length. */
function clean(value: unknown, max: number, multiline = false): string {
  if (typeof value !== 'string') return '';
  const pattern = multiline ? /[\u0000-\u0009\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g;
  return value.replace(pattern, '').trim().slice(0, max);
}

function validate(raw: Record<string, unknown>): { data?: Submission; error?: string } {
  const data: Submission = {
    name: clean(raw.name, 120),
    email: clean(raw.email, 200),
    phone: clean(raw.phone, 40),
    company: clean(raw.company, 160),
    interest: clean(raw.interest, 20) || 'other',
    message: clean(raw.message, 3000, true),
  };
  if (!data.name) return { error: 'Name is required.' };
  if (!EMAIL_RE.test(data.email)) return { error: 'A valid email is required.' };
  if (!INTERESTS.includes(data.interest)) return { error: 'Choose what you are interested in.' };
  if (!data.message) return { error: 'Tell us a little about what you need.' };
  if (raw.consent !== true) return { error: 'Consent is required.' };
  return { data };
}

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  if (!token) return false;
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
  if (!res.ok) return false;
  const out = (await res.json()) as { success?: boolean };
  return out.success === true;
}

/** Base64 of a UTF-8 string, wrapped at 76 characters for MIME. */
function base64Utf8(text: string, wrap = true): string {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  const b64 = btoa(bin);
  return wrap ? (b64.match(/.{1,76}/g) ?? []).join('\r\n') : b64;
}

/** RFC 2047 encoded header value, safe for any characters. */
const encodeHeader = (value: string) => `=?UTF-8?B?${base64Utf8(value, false)}?=`;

function buildMessage(from: string, to: string, d: Submission): string {
  const subject = `Website enquiry: ${INTEREST_LABEL[d.interest]} - ${d.company || d.name}`;
  const body = [
    'New enquiry from the Y5Media website.',
    '',
    `Name:         ${d.name}`,
    `Email:        ${d.email}`,
    `Phone:        ${d.phone || '-'}`,
    `Company:      ${d.company || '-'}`,
    `Interested in: ${INTEREST_LABEL[d.interest]}`,
    '',
    'Message:',
    d.message,
    '',
    `Received: ${new Date().toISOString()}`,
    'Reply to this email to answer the visitor directly.',
  ].join('\r\n');

  const domain = from.split('@')[1] ?? 'localhost';
  const headers = [
    `From: ${encodeHeader('Y5Media website')} <${from}>`,
    `To: <${to}>`,
    `Reply-To: <${d.email}>`,
    `Subject: ${encodeHeader(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@${domain}>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
  ];
  return `${headers.join('\r\n')}\r\n\r\n${base64Utf8(body)}\r\n`;
}

export async function onRequestPost({ request, env }: PagesContext<ContactEnv>): Promise<Response> {
  if (!(request.headers.get('Content-Type') ?? '').includes('application/json')) {
    return json(415, { ok: false, error: 'Send JSON.' });
  }
  const length = Number(request.headers.get('Content-Length') ?? '0');
  if (length > MAX_BODY_BYTES) return json(413, { ok: false, error: 'Request too large.' });

  let raw: Record<string, unknown>;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return json(413, { ok: false, error: 'Request too large.' });
    raw = JSON.parse(text) as Record<string, unknown>;
    if (!raw || typeof raw !== 'object') throw new Error('not an object');
  } catch {
    return json(400, { ok: false, error: 'Invalid request.' });
  }

  // Honeypot filled in: almost certainly a bot. Pretend it worked.
  if (typeof raw.website === 'string' && raw.website.trim() !== '') return json(200, { ok: true });

  const { data, error } = validate(raw);
  if (!data) return json(422, { ok: false, error });

  if (env.TURNSTILE_SECRET) {
    const token = clean(raw.turnstile, 2048);
    const passed = await verifyTurnstile(env.TURNSTILE_SECRET, token, request.headers.get('CF-Connecting-IP')).catch(() => false);
    if (!passed) return json(403, { ok: false, error: 'Spam check failed. Please try again.' });
  }

  if (!env.CONTACT_EMAIL || !env.CONTACT_TO || !env.CONTACT_FROM) {
    console.error('contact: email delivery is not configured (CONTACT_EMAIL / CONTACT_TO / CONTACT_FROM)');
    return json(503, { ok: false, error: 'The form is not set up to deliver yet.' });
  }

  try {
    const raw822 = buildMessage(env.CONTACT_FROM, env.CONTACT_TO, data);
    await env.CONTACT_EMAIL.send(new EmailMessage(env.CONTACT_FROM, env.CONTACT_TO, raw822));
  } catch (e) {
    console.error('contact: send failed', { error: e instanceof Error ? e.message : String(e) });
    return json(502, { ok: false, error: 'We could not send your request.' });
  }

  return json(200, { ok: true });
}

// Anything other than POST
export function onRequest(): Response {
  return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
}
