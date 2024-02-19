import { locales } from '@/utils/locale';

const preferredLocale = 'en';

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) ||
      pathname === `/${locale}` ||
      pathname.startsWith(`/images/`)
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale

  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
};
