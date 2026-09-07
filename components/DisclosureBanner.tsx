export default function DisclosureBanner({ brandName }: { brandName: string }) {
  return (
    <div className="w-full bg-landing-stone/40 border-l-[3px] border-emboss" role="note">
      <p className="page-x py-4 md:py-5 max-w-container mx-auto font-sans text-[16px] text-ink">
        <strong className="font-semibold">{brandName}</strong> is not a real company. This is a
        self-initiated project by Ennoia.
      </p>
    </div>
  );
}
