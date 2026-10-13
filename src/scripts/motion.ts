// Site-wide motion: sections fade up once as they come into view.
// The <head> script only adds html.motion when reduced motion is off, so
// without JavaScript or with reduced motion everything is simply visible.

export const reducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initMotion(): void {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!document.documentElement.classList.contains('motion') || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        el.style.transitionDelay = el.dataset.revealDelay ?? '0s';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  items.forEach((el) => io.observe(el));
}
