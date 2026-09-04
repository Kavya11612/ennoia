import type { Metadata } from 'next';
import NotionsIndex from '@/components/NotionsIndex';

export const metadata: Metadata = {
  title: 'Notions',
  description:
    'Writing from Ennoia on strategy, naming, and craft. From ennoia — idea, concept, strategic thought — the root of the studio name.',
};

export default function NotionsPage({
  searchParams,
}: {
  searchParams?: { category?: string; page?: string };
}) {
  const category = searchParams?.category ?? 'all';
  const page = Math.max(1, Number(searchParams?.page) || 1);

  return <NotionsIndex category={category} page={page} />;
}
