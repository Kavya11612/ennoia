import type { MetadataRoute } from 'next';
import { projects } from '@/lib/data/projects';
import { articles } from '@/lib/data/articles';

const base = 'https://ennoiabranding.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/hypotheticals', '/studio', '/notions', '/contact', '/privacy', '/terms'].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date() })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${base}/hypotheticals/${p.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/notions/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
