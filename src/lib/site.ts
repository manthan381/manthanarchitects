const DEFAULT_SITE_URL = "https://manthanarchitects.com";

function stripTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getSiteUrl() {
  const value =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_SITE_URL ??
    DEFAULT_SITE_URL;

  return stripTrailingSlash(value);
}
