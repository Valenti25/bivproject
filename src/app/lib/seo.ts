const envSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

const DEFAULT_SITE_URL = "http://localhost:3000";

export const siteUrl: string = envSiteUrl || DEFAULT_SITE_URL;

export function canonical(path: string): string {
  try {
    return new URL(path, siteUrl).toString();
  } catch {
    return siteUrl;
  }
}

