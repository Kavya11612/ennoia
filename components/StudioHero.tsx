import Image from 'next/image';
import SectionKicker from '@/components/SectionKicker';

/**
 * Studio page hero — split layout (copy | illustration), Brandkit palette.
 */
export default function StudioHero() {
  return (
    <header className="relative overflow-hidden page-x max-w-container mx-auto pt-6 pb-5 md:pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-6 lg:items-center">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <SectionKicker>Studio</SectionKicker>

          <h1 className="font-sans font-bold text-h1 text-ink text-balance max-w-[18ch]">
            A strategy-led{' '}
            <span className="relative inline-block text-emboss italic font-semibold px-1 mx-[-0.1em]">
              <span
                className="absolute inset-x-0 inset-y-[0.12em] -z-[1] bg-clay/35 rounded-sm"
                aria-hidden="true"
              />
              branding studio
              <span
                className="absolute left-0 right-0 -bottom-[0.08em] h-px bg-emboss"
                aria-hidden="true"
              />
            </span>{' '}
            for founders.
          </h1>

          <p className="font-sans text-body-l text-ink max-w-standfirst">
            We partner with forward-thinking businesses to build meaningful brands that are rooted
            in purpose and designed to last — because we read the whole board before we move.
          </p>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[5/4] w-full max-w-[520px] mx-auto lg:ml-auto lg:mr-0">
            <div
              className="absolute inset-[8%] rounded-[40%] bg-clay/25"
              aria-hidden="true"
            />
            <Image
              src="/studio-hero.png"
              alt="Big ideas build brands — notepad, pen, and lightbulb composition"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center z-[1]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
