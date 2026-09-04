import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ennoiabranding.com/sitemap.xml',
    host: 'https://ennoiabranding.com',
  };
}
