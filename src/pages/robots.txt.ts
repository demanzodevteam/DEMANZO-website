// app/robots.txt/route.ts (for Next.js App Router) or similar path in your framework

import { SOURCE_BASE_URL } from "../config/urls";

export async function GET() {
  const isProd = true;

  // Ensure trailing slash is removed from base URL
  const baseUrl = SOURCE_BASE_URL.replace(/\/$/, '');

  const body = isProd
    ? `User-agent: *
Disallow:

Sitemap: ${baseUrl}/sitemap.xml`
    : `User-agent: *
Disallow: /`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
