export default function DisclosureBanner({ brandName }: { brandName: string }) {
  return (
    <div
      className="w-full bg-landing-stone/40 border-l-[3px] border-emboss px-4 py-4 md:px-5 md:py-5"
      role="note"
    >
      <p className="font-sans text-[16px] text-ink max-w-container mx-auto page-x">
        <strong className="font-semibold">{brandName}</strong> is not a real company. This is a
        self-initiated project by Ennoia.
      </p>
    </div>
  );
}
