type SectionHeadingProps = {
  label: string;
  heading: string;
  // Dark sections use the yellow label instead of red
  dark?: boolean;
};

// Small coloured label with the section's main heading under it.
export default function SectionHeading({
  label,
  heading,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-sm font-bold tracking-widest uppercase ${dark ? "text-brand-yellow" : "text-brand-red"}`}
      >
        {label}
      </p>
      <h2 className="mt-2">{heading}</h2>
    </div>
  );
}
