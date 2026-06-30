/**
 * Returns a URL for a static asset in the `public/` folder, correctly
 * prefixed with the Vite base path so it works both locally and on
 * GitHub Pages (or any other base path).
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
