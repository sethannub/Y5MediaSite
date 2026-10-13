// Cookie consent. The visitor's choice is stored in localStorage (strictly
// necessary: it only remembers the choice). Google Analytics is loaded only
// after analytics consent, and its cookies are deleted if consent is withdrawn.

export interface Consent {
  version: 1;
  analytics: boolean;
  decidedAt: string;
}

const KEY = 'cookieConsent';

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    return c.version === 1 ? c : null;
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean): Consent {
  const c: Consent = { version: 1, analytics, decidedAt: new Date().toISOString() };
  try { localStorage.setItem(KEY, JSON.stringify(c)); } catch { /* storage blocked: ask again next visit */ }
  return c;
}

let gaLoaded = false;

export function loadGoogleAnalytics(id: string): void {
  if (!id || gaLoaded) return;
  gaLoaded = true;
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() { w.dataLayer.push(arguments); } as (...args: unknown[]) => void;
  w.gtag('js', new Date());
  w.gtag('config', id);
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.append(s);
}

/** Remove Google Analytics cookies (_ga, _ga_XXXX) after consent is withdrawn. */
export function clearAnalyticsCookies(): void {
  const host = location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => n === '_ga' || n.startsWith('_ga_') || n === '_gid')
    .forEach((name) => {
      domains.forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`;
      });
    });
}
